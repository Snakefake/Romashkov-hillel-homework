/*   let lenghtNumber = prompt('Введите длину массива');
  let minNumber = prompt('Введите минимальное число');
  let maxNumber = prompt('Введите максимальное число');


  document.querySelector('button').onclick = function () {
    let l = lenghtNumber;
    let min = minNumber;
    let max = maxNumber;
    let result = [];

    for (let i = 0; i < l; i++) {
        result.push(randonInteger(min, max));
    }
    alert(result);
    alert(getAverage(result));
    return result;
  }


  let getAverage = (result) => {
    let sum = result.reduce((acc, number) => acc + number, 0);
    let length = result.length;
    return sum / length;
  };


  function randonInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  } */