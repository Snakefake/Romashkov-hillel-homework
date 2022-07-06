let codeLength = 0;

let observedCode = getCorrectCode();

let possibleCombinations = getCodes(observedCode);

function getNumbers(code,index) {

    let num = Number(code[index]);

    switch (num){

        case 1:

            return ['1','2','4'];

        case 2:

            return ['1','2','3','5'];

        case 3:

            return ['2','3','6'];

        case 4:

            return ['1','4','5','7'];

        case 5:

            return ['2','4','5','6','8'];

        case 6:

            return ['3','5','6','9'];

        case 7:

            return ['4','7','8'];

        case 8:

            return ['5','7','8','9','0'];

        case 9:

            return ['6','8','9'];

        default:

            return ['0','8'];
    }

}

function getCorrectCode() {

    let code = prompt("Введіть код довжиною максимум у 4 цифри");

    let wrongCode = code === false || code.length > 4;

    while (wrongCode) {

        alert('Неправильний код');

        code = prompt("Введіть код довжиною максимум у 4 цифри");

        wrongCode = code === false || code.length > 4;

    }

    switch (code.length) {

        case 1:

            code = '000' + code;

            codeLength = 1;

            break;

        case 2:

            code = '00' + code;

            codeLength = 2;

            break;

        case 3:

            code = '0' + code;

            codeLength = 3;

            break;

        default:

            codeLength = 4;

            return code;

    }
    return code;
}

function getCodes(code) {

    let array1 = getNumbers(code,0);

    let array2 = getNumbers(code,1);

    let array3 = getNumbers(code,2);

    let array4 = getNumbers(code,3);

    let possibleCombinations = array3.flatMap(el3 => array4.map(el4 => el3 + el4));

    let possibleCombinationsThreeLong = array2.flatMap(el2 => possibleCombinations.map(el3and4 => el2 + el3and4));

    let possibleCombinationsFourLong = array1.flatMap(el1 => possibleCombinationsThreeLong.map(el23and4 => el1 + el23and4));

    
    switch (codeLength){

        case 1:

            return array4;

        case 2:

            return possibleCombinations;

        case 3:

            return possibleCombinationsThreeLong;

        default:

            return possibleCombinationsFourLong;
    }

}

console.log(possibleCombinations);
alert(possibleCombinations);