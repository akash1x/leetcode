/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1;
    let r = n;

    while(l<=r){
        let numPicked = Math.floor((l+r)/2)

        //Correct number picked
        if(guess(numPicked)===0){
            return numPicked;
        }
        //Greater then move right bound
        else if(guess(numPicked)===-1){
            r=numPicked-1;
        }
        //Lower then move left bound
        else{
            l=numPicked+1;
        }
    }
};