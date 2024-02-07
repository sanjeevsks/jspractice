/**
 * 
 * @author: Sanjeev Shukla
 * @program: To find if the rectangle is portrait or landscape
 * 
 */

function is_landscape(l, b) {
    let rectangle;
    if (l > b) {
        rectangle = "landscape";
    }
    else {
        rectangle = "Portrait";
    }
    return (rectangle);
}

let l = 20;
let b = 30;
let rectangle = is_landscape(l, b);
console.log(rectangle);
