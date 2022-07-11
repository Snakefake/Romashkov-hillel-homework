/* let arr = [];
let max = findMax(arr);

function findMax(arr) {
    let max = -Infinity
    let i = 0;
    function f2() {
        i++;
        let el = arr[i];
        if (i >= arr.length) return;
        if (arr[i] >= max) return max;


        if ( el > max )
        {
            max = el;
            el = findMax( el );
        } 
           
    }
    f2();
    return max;
}
console.log(findMax([8]), 'one element test, must return 8');
console.log(findMax([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(findMax([8, 17]), '2 elements test, must return 17');
 */



//for(let i = 0; i < arr.length; i++);
//max = max >= arr ? max : arr;
