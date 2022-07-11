/* function sum(num) {
    let result = num;
    function f(s) {
        result += s;
        console.log(result);
        return f;
    }
    console.log(result);
    return f;
} */



//Верное решение

/* let accum = 0

function sum (num) {

    function f() {
        accum += num;
        return accum;
    }

    return f();
} */