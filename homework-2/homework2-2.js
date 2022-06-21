let age = +prompt('Введіть дату народження');
        let needForm;
        let form1 = "рік", form2 = "роки", form3 = "років";
        let n = Math.trunc(Math.abs(age)) % 100,
            n1 = n % 10;
 
        if (n > 4 && n < 21) needForm = form3;
        else if (n1 === 1) needForm = form1;
        else if (n1 > 1 && n1 < 5) needForm = form2;
        else needForm = form3;
        alert('Вам ' + age + ' ' + needForm);