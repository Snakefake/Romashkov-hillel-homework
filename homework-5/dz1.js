/* let arr = [];
let max = findMax(arr);

function findMax(arr) {

    let max = -Infinity
    let i = 0;
        i++;
        let el = arr[i];
        if (i >= arr.length) return arr[0];
        if (arr[i] > max) return Math.max(...arr);


        if ( el > max )
        {
            max = el;
            el = findMax( el );
        } 
           

    return max;
}
console.log(findMax([8]), 'one element test, must return 8');
console.log(findMax([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(findMax([8, 17]), '2 elements test, must return 17'); */
