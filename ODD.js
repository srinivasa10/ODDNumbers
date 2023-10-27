/*
This program is for checking how many ODD numbers from 0 to 10 million
for example,Take this number 345456.
Each pair of consecutive digits of 345456 has a difference of one.
 Let's call these numbers one-digit-difference numbers.so this ODD Number
*/

/**this function is used for checking whether the number is ODD or not
 * 
 * @param {number} number 
 * @returns {boolean} true or false
 */
let ODDlist = [];
function checkOdd(number){
    if (number<10){
        return false
    }
    let Numberstr=number.toString()
    for(let i=0;i<Numberstr.length-1;i++){
        
        if(Math.abs(Number(Numberstr[i] - Numberstr[i+1])) != 1){
            return false
        }
    }
    return true
}

function toCheckPrime(n){
            if (n <= 1) 
            return false; 
  
        // Check from 2 to n-1 
        for (let i = 2; i < n; i++) 
            if (n % i == 0) 
                return false; 
  
        return true; 
    } 
  
/**
 * This is the helper test function to find and count one-digit-difference odd numbers
 * and count how many of them.
 */
function test() {
    let count = 0;  
    for (let i = 0; i <= 10000000; i++) {
        if (checkOdd(i)) {
            ODDlist.push(i);
            count++;
        }
    }
    
    console.log("Total ODD numbers :", count)
}
/**
 * this is hepler function to check that ODDList number  prime or not
 */
function testprime(){
    let primecount = 0; 
    for (let i = 0; i < ODDlist.length; i++) {
        if (toCheckPrime(ODDlist[i])) {
            primecount++;
        }
    }
    console.log("Total prime numbers in ODD list:", primecount)
} 
/**
 * this main function to call the helping functions
 */
function main(){

    test()
    testprime()

}

main()
