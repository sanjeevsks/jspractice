/**
 * 
 * @author: Sanjeev Shukla
 * @Program: To check till the given number is odd or even. 
 * 
 */

function odd_even(x) {
    let i;
    for (i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            console.log("EVEN");
        }
        else {
            console.log("ODD");
        }
    }
}

let x = 100;
odd_even(x);
