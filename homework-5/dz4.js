function quotient(a, b){
    return a > b ? a % b : b % a;
}
//quotient();

function f(a, b, func){
    return func (a, b);
}

result = f(44,5,quotient);
console.log(result);


