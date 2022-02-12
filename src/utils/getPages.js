import _ from 'lodash';

/**
 * Get all the pages located under the provided `urlPath`, not including the
 * index page. I.e.: All pages having their URLs start with `urlPath` excluding
 * the page having its URL equal to `urlPath`.
 *
 * @example
 * pages => [
 *   {url: '/'},
 *   {url: '/about'},
 *   {url: '/posts'},
 *   {url: '/posts/hello'},
 *   {url: '/posts/world'}
 * ]
 *
 * getPages(pages, /posts')
 * => [
 *   {url: '/posts/hello'},
 *   {url: '/posts/world'}
 * ]
 *
 *
 * @param {Array} pages Array of page objects. All pages must have 'url' field.
 * @param {string} urlPath The url path to filter pages by
 * @return {Array}
 */
export default function getPages(pages, urlPath, firstLevel) {    
    urlPath = _.trim(urlPath, '/');
    const urlPathParts = _.split(urlPath, '/');
    return _.filter(pages, page => {
        const pageUrlPath = _.trim(page.url, '/');
        const pageUrlParts = _.split(pageUrlPath, '/');
        if (firstLevel) {            
            if (urlPath === "") {
                return pageUrlParts.length === 1 && pageUrlParts[0] !== '' && urlPath !== pageUrlPath;
            } else {
                return pageUrlParts.length === 2 && pageUrlParts[0] === urlPath && urlPath !== pageUrlPath;
            }
            
        }
        return pageUrlParts.length > urlPathParts.length && _.isEqual(pageUrlParts.slice(0, urlPathParts.length), urlPathParts);
    });
}
