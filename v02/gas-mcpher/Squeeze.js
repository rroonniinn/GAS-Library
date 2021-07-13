/* eslint-disable max-lines */
/* eslint-disable no-throw-literal */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable complexity */
/* eslint-disable max-lines */
/* eslint-disable no-param-reassign */
import { expBackoff } from './expBackoff';
import { generateUniqueString } from './generateUniqueString';
import { isBlob } from './isBlob';
import { isDateObject } from './isDateObject';
import { isUndefined } from './isUndefined';
import { keyDigest } from './keyDigest';

/* eslint-disable max-params */
/* eslint-disable max-lines-per-function */
/**
 * utils for squeezing more out of Apps Script quotas
 * @namespace Squeeze
 */

/**
 * utilities for zipping and chunking data for property stores and cache
 * @constructor ChunkingUtils
 */

const Chunking = function() {
	// the default maximum chunksize
	const self = this;
	let chunkSize_ = 9 * 1024;
	let store_;
	let prefix_ = 'chunking_';
	const overhead_ = 12;
	const digestOverhead_ = 40 + 10;
	let respectDigest_ = true;
	let compressMin_ = 300;

	// --default functions for these operations

	// how to read a string
	let readFromStore_ = (store, key) =>
		expBackoff(() => store.getProperty(key));

	// how to write a string
	let writeToStore_ = (store, key, str) =>
		expBackoff(() => store.setProperty(key, str));

	// how to get an object
	let getObject_ = (store, key) => {
		const result = readFromStore_(store, key);
		return result ? JSON.parse(result) : null;
	};

	// how to set an object
	let setObject_ = (store, key, ob, expire) => {
		const s = JSON.stringify(ob || {});
		writeToStore_(store, key, s, expire);
		return s.length;
	};

	// how to remove an object
	let removeObject_ = (store, key) =>
		expBackoff(() => store.deleteProperty(key));

	/**
	 * check that a variable is a function and throw if not
	 * @param {function} [func] optional function to check
	 * @return {function} the func
	 */
	const checkAFunc = func => {
		if (func && typeof func !== 'function') {
			throw new Error('argument should be a function');
		}
		return func;
	};

	/**
	 * set the max chunksize
	 * @param {number} chunkSize the max size
	 * @return {Chunking} self
	 */
	self.setChunkSize = function(chunkSize) {
		chunkSize_ = chunkSize;
		return self;
	};

	/**
	 * minimum size over which to compress
	 * @return {boolean} respectDigest the max size
	 */
	self.getCompressMin = function() {
		return compressMin_;
	};

	/**
	 * whether to respect digest to avoid rewriting unchanged records
	 * @param {boolean} compressMin the min size
	 * @return {Chunking} self
	 */
	self.setCompressMin = function(compressMin) {
		if (!isUndefined(compressMin)) compressMin_ = compressMin;
		return self;
	};

	/**
	 * whether to respect digest to avoid rewriting unchanged records
	 * @return {boolean} respectDigest
	 */
	self.getRespectDigest = function() {
		return respectDigest_;
	};

	/**
	 * whether to respect digest to avoid rewriting unchanged records
	 * @param {boolean} respectDigest the max size
	 * @return {Chunking} self
	 */
	self.setRespectDigest = function(respectDigest) {
		if (!isUndefined(respectDigest_)) respectDigest_ = respectDigest;
		return self;
	};

	/**
	 * get the max chunksize
	 * @return {number} chunkSize the max size
	 */
	self.getChunkSize = function() {
		return chunkSize_;
	};

	/**
	 * set the key prefix
	 * @param {string} prefix the key prefix
	 * @return {Chunking} self
	 */
	self.setPrefix = function(prefix) {
		if (!isUndefined(prefix)) prefix_ = prefix.toString();
		return self;
	};

	/**
	 * get the prefix
	 * @return {string} prefix the prefix
	 */
	self.getPrefix = function() {
		return prefix_;
	};
	/**
	 * set the store
	 * @param {object} store the store
	 * @return {Chunking} self
	 */
	self.setStore = function(store) {
		store_ = store;
		return self;
	};

	/**
	 * get the store
	 * @return {object} the store
	 */
	self.getStore = function() {
		return store_;
	};

	/**
	 * set how to get an object
	 * @param {function} func how to get an object
	 * @return {Chunking} self
	 */
	self.funcGetObject = function(func) {
		// func should take a store, key and return an object
		getObject_ = checkAFunc(func);
		return self;
	};

	/**
	 * set how to get an object
	 * @param {function} func how to set an object
	 * @return {Chunking} self
	 */
	self.funcSetObject = function(func) {
		// func should take a store, key and an object,
		// and return the size of the stringified object
		setObject_ = checkAFunc(func);
		return self;
	};

	/**
	 * set how to read from store
	 * @param {function} func how to read from store
	 * @return {Chunking} self
	 */
	self.funcReadFromStore = function(func) {
		// func should take a store key, and return a string
		readFromStore_ = checkAFunc(func);
		return self;
	};

	/**
	 * set how to write to store
	 * @param {function} func how to set an object
	 * @return {Chunking} self
	 */
	self.funcWriteToStore = function(func) {
		// func should take a store key and a string to write
		writeToStore_ = checkAFunc(func);
		return self;
	};

	/**
	 * set how to remove an object
	 * @param {function} func how to remove an object
	 * @return {Chunking} self
	 */
	self.funcRemoveObject = function(func) {
		// func should take a store, key
		removeObject_ = checkAFunc(func);
		return self;
	};

	const payloadSize_ = () => {
		if (chunkSize_ <= overhead_) {
			// eslint-disable-next-line no-throw-literal
			throw `chunksize must be at least ${overhead_ + 1}`;
		}
		return chunkSize_ - overhead_;
	};

	const digest_ = what => keyDigest(what);

	const uid_ = () => generateUniqueString();

	const getChunkKey_ = key => `${key}_${uid_()}`;

	const fudgeKey_ = key => {
		if (isUndefined(key) || key === null)
			// eslint-disable-next-line no-throw-literal
			throw 'property key must have a value';
		return typeof key === 'object' ? digest_(key) : key;
	};

	/**
	 * sets a property using multiple entries if its going to be too big
	 *  use self.setBigProperty() from outside, which first deletes
	 * existing stuff
	 *  as well as checking the digest
	 * @param {object} propKey the key
	 * @param {string} sob the thing to write
	 * @return {number} total length of everything written
	 */
	const setBigProperty_ = (propKey, sob, expire) => {
		// always crush big properties
		let size = 0;

		// crush the object
		const skipZip = sob.length < compressMin_;
		let chunks;
		let crushed = skipZip ? sob : self.zip(sob);

		// get the digest
		// the digest is used to avoid updates when theres no change
		const digest = digest_(sob);

		// if we have an overflow, then need to write multiple properties
		if (crushed.length > payloadSize_() - digestOverhead_) {
			chunks = [];
		}

		// now split up the big thing if needed
		// expire should be a little bigger for the chunks
		// to make sure they dont go away

		do {
			// peel off a piece
			const chunk = crushed.slice(0, payloadSize_());
			crushed = crushed.slice(chunk.length);

			if (chunks) {
				// make a new entry for the key
				const key = getChunkKey_(propKey);
				size += setObject_(
					self.getStore(),
					key,
					{
						chunk,
					},
					expire ? expire + 1 : expire
				);

				// remember the key
				chunks.push(key);
			} else {
				size += setObject_(
					self.getStore(),
					propKey,
					{
						chunk,
						digest,
						skipZip,
					},
					expire
				);
			}
		} while (crushed.length);

		// now write the index if there were chunks
		if (chunks) {
			size += setObject_(
				self.getStore(),
				propKey,
				{
					chunks,
					digest,
					skipZip,
				},
				expire
			);
		}

		return size;
	};

	/**
	 * get the keys of multiple entries if it was too big
	 * @param {PropertiesService} props the service to use
	 * @param {object} propKey the key
	 * @return {object} the result {chunks:[],data:{}} - an array of keys,
	 * or some actual data
	 */
	self.getChunkKeys = function(propKey) {
		// in case the key is an object
		// eslint-disable-next-line no-param-reassign
		propKey = fudgeKey_(propKey);

		let data;
		const crushed = getObject_(self.getStore(), propKey);

		// at this point, crushed is an object with either
		// a .chunk property with a zipped version of the data, or
		// a .chunks property with an array of other entries to get
		// a .digest property with the digest of all the data which
		// identifies it as a master

		// its a non split item
		if (crushed && crushed.chunk && crushed.digest) {
			// uncrush the data and parse it back to an object
			// if there are no associated records

			data = crushed.chunk
				? JSON.parse(
					crushed.skipZip
						? crushed.chunk
						: self.unzip(crushed.chunk)
				  )
				: null;
		}

		// return either the data or where to find the data
		return {
			chunks: crushed && crushed.chunks ? crushed.chunks : null,
			data,
			digest: crushed ? crushed.digest : '',
			skipZip: crushed && crushed.skipZip,
		};
	};

	/**
	 * remove an entry and its associated stuff
	 * @param {object} propKey the key
	 * @return {Props} self
	 */
	self.removeBigProperty = function(propKey) {
		// in case the key is an object
		propKey = fudgeKey_(propKey);
		let removed = 0;

		// always big properties are always crushed
		const chunky = self.getChunkKeys(prefix_ + propKey);

		// now remove the properties entries
		if (chunky && chunky.chunks) {
			chunky.chunks.forEach(function(d) {
				removeObject_(self.getStore(), d);
				removed++;
			});
		}
		// now remove the master property
		if (chunky.digest) {
			removeObject_(self.getStore(), prefix_ + propKey);
			removed++;
		}

		return removed;
	};

	/**
	 * updates a property using multiple entries if its going to be too big
	 * @param {object} propKey the key
	 * @param {object} ob the thing to write
	 * @param {number} expire secs to expire
	 * @return {size} of data written - if nothing done, size is 0
	 */
	self.setBigProperty = function(propKey, ob, expire) {
		// in case the key is an object
		propKey = fudgeKey_(propKey);

		let slob;

		// don't allow undefined
		if (isUndefined(ob)) {
			throw 'cant write undefined to store';
		}

		// blob pulls it out
		if (isBlob(ob)) {
			slob = {
				contentType: ob.getContentType(),
				name: ob.getName(),
				content: Utilities.base64Encode(ob.getBytes()),
				blob: true,
			};
		} else if (isDateObject(ob)) {
			// convert to timestamp
			slob = {
				date: true,
				content: ob.getTime(),
			};
		} else if (typeof ob === 'object') {
			// stringify
			slob = {
				content: JSON.stringify(ob),
				parse: true,
			};
		} else {
			slob = {
				content: ob,
			};
		}

		// pack all that up to write to the store
		const sob = JSON.stringify(slob);

		// get the digest
		const digest = keyDigest(sob);

		// now get the master if there is one
		const master = getObject_(self.getStore(), prefix_ + propKey);

		if (
			master &&
			master.digest &&
			master.digest === digest &&
			respectDigest_ &&
			!expire
		) {
			// nothing to do
			return 0;
		}

		// need to remove the previous entries and add this new one
		self.removeBigProperty(propKey);
		return setBigProperty_(prefix_ + propKey, sob, expire);
	};

	/**
	 * gets a property using multiple entries if its going to be too big
	 * @param {object} propKey the key
	 * @return {object} what was retrieved
	 */
	self.getBigProperty = function(propKey) {
		let myPackage;
		// in case the key is an object
		propKey = fudgeKey_(propKey);

		// always big properties are always crushed
		const chunky = self.getChunkKeys(prefix_ + propKey);

		// that'll return either some data, or a list of keys
		if (chunky && chunky.chunks) {
			const p = chunky.chunks.reduce((p, c) => {
				const r = getObject_(self.getStore(), c);

				// should always be available
				if (!r) {
					throw `missing chunked property ${c} for key ${propKey}`;
				}

				// rebuild the crushed string
				return p + r.chunk;
			}, '');

			// now uncrush the result
			myPackage = JSON.parse(chunky.skipZip ? p : self.unzip(p));
		} else {
			// it was just some data
			myPackage = chunky ? chunky.data : null;
		}

		// now need to unpack;
		if (myPackage) {
			if (myPackage.parse) {
				return JSON.parse(myPackage.content);
			}
			if (myPackage.date) {
				return new Date(myPackage.content);
			}
			if (myPackage.blob) {
				return Utilities.newBlob(
					Utilities.base64Decode(myPackage.content),
					myPackage.contentType,
					myPackage.name
				);
			}

			return myPackage.content;
		}

		return null;
	};

	/**
	 * crush for writing to cache.props
	 * @param {string} crushThis the string to crush
	 * @return {string} the b64 zipped version
	 */
	self.zip = function(crushThis) {
		return Utilities.base64Encode(
			Utilities.zip([Utilities.newBlob(crushThis)]).getBytes()
		);
	};

	/**
	 * uncrush for writing to cache.props
	 * @param {string} crushed the crushed string
	 * @return {string} the uncrushed string
	 */
	self.unzip = function(crushed) {
		return Utilities.unzip(
			Utilities.newBlob(
				Utilities.base64Decode(crushed),
				'application/zip'
			)
		)[0].getDataAsString();
	};
};

const Squeeze = {
	Chunking,
};

export { Squeeze };
