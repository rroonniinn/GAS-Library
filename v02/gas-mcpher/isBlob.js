/**
 * check something is a blob
 * not a comprehensive test
 */
const isBlob = blob =>
	blob &&
	typeof blob === 'object' &&
	typeof blob.setContentTypeFromExtension === 'function' &&
	typeof blob.getBytes === 'function';

export { isBlob };
