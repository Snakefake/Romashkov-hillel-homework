/*   let lenghtNumber = prompt('Введите длину массива');
  let minNumber = prompt('Введите минимальное число');
  let maxNumber = prompt('Введите максимальное число');


  function something() {
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
  something();

  function getAverage(result) {
    let sum = 0;
    result.forEach(elem => {
      sum += elem;
    })
    let length = result.length;
    return sum / length;
  };


  function randonInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  } */




  //reduce делает callback для каждого исходного элемента массива и в результате вернет 1 значение которое является суммой всех элементов массива
  // acc это аккумулирующее значение,изначально оно равно нулю,потом к нему прибавляется 1 элемент массива и сохраняется,потом 2 и т.д. до конца,в конце выведет сумму всех элементов массива
  // number это элемент массива
  // так же значение аккумулятора можна задать,изначально оно всегда 0 но можно задать например 10 и тогда будет (10+все значения массива в сумме),всё что впринципе знаю про reduce,этого мало чтобы его использовать?



  /* function getAverage(result) {
    let sum = result.reduce((acc, number) => acc + number, 0);
    let length = result.length;
    return sum / length;
  }; */
