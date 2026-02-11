/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=1;
        let r=n;
        let currentBadVersion=0;

        while(l<=r){
            let mid = l+ Math.floor((r-l)/2);
            if(isBadVersion(mid)){
                currentBadVersion=mid;
                // continue checking previous versions
                r=mid-1
            }else{
                //Not a bad version means bad version exists ahead
                l=mid+1;
            }
        }
        return currentBadVersion
    };
};