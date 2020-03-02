import { EnhancedCache } from './EnhancedCache';

/**
 * Wrap an existing cache as an enhanced cache. Usage example:
 * <pre>
 * var cache = EnhancedCacheService.wrap(CacheService.getUserCache());
 * cache.putObject('p1',{name: 'John', age: 30});
 * var person = cache.getObject('p1');
 * //person.name == 'John' && person.age == 30
 * </pre>
 * @param {Cache} cache the cache to wrap
 * @return {EnhancedCache} the enhanced cache
 */
const wrap = cache => new EnhancedCache(cache);

export { wrap };
