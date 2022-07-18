// 1 Вариант
/* function sum(num) {
    let result = num;
    function f(s) {
        result += s;
        return result;
    }
    return f;
}
let s = sum(0); */



// 2 Вариант

/* let accum = 0

function sum (num) {
    function f() {
        accum += num;
        return accum;
    }
    return f();
} */