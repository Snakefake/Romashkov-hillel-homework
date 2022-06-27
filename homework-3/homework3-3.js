/* function arrAdd() {
    let arr = [];
    let amount = +prompt("Введите количество массивов в первом массиве");

    for(let i = 0; i < amount; i++) {
        arr.push([]);

        let amount2 = prompt("Введите количество елементов" + (i + 1));

        for(let j = 0; j < amount2; j++) {
            let elem = prompt("Введите текст" + (j + 1));
            arr[i].push(elem);
        }
    }

    console.log(arr);
}

let functionResult = arrAdd(); */




let lenghtNumber = prompt('Введите длину массива');
let arrayValues = prompt('Введите значения массива');

document.querySelector('button').onclick = function () {
    let l = lenghtNumber;
    let result = [];
    result.length = arrayValues;

    for ( let i = 0; i < l; i++) {
        let arrayValues = result.push([arrayValues]);
        
    }
    

    alert(result);
    return result;
  }