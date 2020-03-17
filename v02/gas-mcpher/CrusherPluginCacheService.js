/* eslint-disable max-params */
import { isUndefined } from './isUndefined';
import { expBackoff } from './expBackoff';
import { Squeeze } from './Squeeze';

/* eslint-disable max-lines-per-function */

/**
 * Jak tego używać:
 * https://ramblings.mcpher.com/google-apps-scripts-snippets-2/squeezing-more-into-and-getting-more-out-of-cache-services/
 */

function CrusherPluginCacheService() {
	// writing a plugin for the Squeeze service is pretty straighforward.
	// you need to provide an init function which sets up how to
	// init/write/read/remove objects from the store
	// this example is for the Apps Script cache service
	const self = this;

	// these will be specific to your plugin
	let settings_;

	// standard function to check store is present and of the correct type
	const checkStore = () => {
		if (!settings_.store)
			throw new Error('You must provide a cache service to use');
		if (!settings_.chunkSize)
			throw new Error(
				'You must provide the maximum chunksize supported'
			);
		return self;
	};

	/**
	 * write an item
	 * @param {object} store whatever you initialized store with
	 * @param {string} key the key to write
	 * @param {string} str the string to write
	 * @param {number} expiry time in secs
	 * @return {object} whatever you like
	 */
	const write = (store, key, str, expiry) => {
		checkStore();
		return expBackoff(() =>
			expiry ? store.put(key, str, expiry) : store.put(key, str)
		);
	};

	/**
	 * read an item
	 * @param {object} store whatever you initialized store with
	 * @param {string} key the key to write
	 * @return {object} whatever you like
	 */

	const read = (store, key) => {
		checkStore();
		return expBackoff(() => store.get(key));
	};

	/**
	 * remove an item
	 * @param {string} key the key to remove
	 * @return {object} whatever you  like
	 */
	const remove = (store, key) => {
		checkStore();
		return expBackoff(() => store.remove(key));
	};

	// start plugin by passing settings you'll need for operations

	/**
	 * @param {object} settings these will vary according
	 * to the type of store
	 */

	self.init = function(settings) {
		settings_ = settings || {};

		// set default chunkzise for cacheservice
		settings_.chunkSize = settings_.chunkSize || 100000;

		// respect digest can reduce the number of chunks read,
		// but may return stale
		settings_.respectDigest = isUndefined(settings_.respectDigest)
			? false
			: settings_.respectDigest;

		// must have a cache service and a chunksize
		checkStore();

		// now initialize the squeezer
		self.squeezer = new Squeeze.Chunking()
			.setStore(settings_.store)
			.setChunkSize(settings_.chunkSize)
			.funcWriteToStore(write)
			.funcReadFromStore(read)
			.funcRemoveObject(remove)
			.setRespectDigest(settings_.respectDigest)
			.setCompressMin(settings_.compressMin)
			.setPrefix(settings_.prefix);

		// export the verbs
		self.put = self.squeezer.setBigProperty;
		self.get = self.squeezer.getBigProperty;
		self.remove = self.squeezer.removeBigProperty;
		return self;
	};

	// return your own settings
	function getSettings() {
		return settings_;
	}
}

export { CrusherPluginCacheService };
