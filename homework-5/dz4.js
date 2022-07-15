/* // Находит остаток от деления


function quotient(a, b){
    return a > b ? a % b : b % a;
}
//quotient();

function f(a, b, func){
    return func (a, b);
}

result = f(44,5,quotient);
console.log(result); */






// Находит неполный остаток от деления


function quotient(a, b){
    return Math.trunc(Math.floor(a / b));
}

function f(a, b, func){
    return func (a, b);
}

result = f(44,5,quotient);
console.log(result);


