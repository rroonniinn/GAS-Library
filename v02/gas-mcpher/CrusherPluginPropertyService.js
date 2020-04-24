/* eslint-disable no-unused-vars */
/* eslint-disable max-params */
/* eslint-disable no-use-before-define */
// @ts-nocheck
/* eslint-disable max-lines-per-function */
import { Squeeze } from './Squeeze';
import { expBackoff } from './expBackoff';
import { isUndefined } from './isUndefined';

/**
 * Jak tego używać:
 * https://ramblings.mcpher.com/google-apps-scripts-snippets-2/squeezing-more-into-and-getting-more-out-of-cache-services/
 */

function CrusherPluginPropertyService() {
	// writing a plugin for the Squeeze service is pretty straighforward.
	// you need to provide an init function which sets up how to init/write/read/remove objects from the store
	// this example is for the Apps Script cache service
	const self = this;

	// these will be specific to your plugin
	let settings_;

	// standard function to check store is present and of the correct type
	function checkStore() {
		if (!settings_.store)
			throw new Error('You must provide a cache service to use');
		if (!settings_.chunkSize)
			throw new Error(
				'You must provide the maximum chunksize supported'
			);
		return self;
	}

	// start plugin by passing settings yiou'll need for operations
	/**
	 * @param {object} settings these will vary according to the type of store
	 */
	self.init = function(settings) {
		settings_ = settings || {};

		// set default chunkzise for cacheservice
		settings_.chunkSize = settings_.chunkSize || 9 * 1000; // 9 kb

		// respect digest can reduce the number of chunks read, but may return stale
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
			.setCompressMin(settings_.compressMin);

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

	/**
	 * remove an item
	 * @param {string} key the key to remove
	 * @return {object} whatever you  like
	 */
	const remove = (store, key) => {
		checkStore();
		return expBackoff(() => store.deleteProperty(key));
	};

	/**
	 * write an item
	 * @param {object} store whatever you initialized store with
	 * @param {string} key the key to write
	 * @param {string} str the string to write
	 * @return {object} whatever you like
	 */
	const write = (store, key, str) => {
		checkStore();
		return expBackoff(() => store.setProperty(key, str));
	};

	/**
	 * read an item
	 * @param {object} store whatever you initialized store with
	 * @param {string} key the key to write
	 * @return {object} whatever you like
	 */
	const read = (store, key) => {
		checkStore();
		return expBackoff(() => store.getProperty(key));
	};
}

export { CrusherPluginPropertyService };
