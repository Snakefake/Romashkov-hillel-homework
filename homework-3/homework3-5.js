let arr = [];
let N = parseInt(prompt('Введите длину массива по оси X'));
let M = parseInt(prompt('Введите длину массива по оси Y'));
/* let K = parseInt(prompt('Введите значения числа K')); */
min = -50,
max = 50;
            
        for (let i = 0; i < M; i++) {
            arr[i] = [];
            for (let j = 0; j < N; j++) {
                arr[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
            }
        }
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) 
                 console.log(arr[i] + " ");
            }

            
