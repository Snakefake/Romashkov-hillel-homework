const cirillicPattern = /^[а-яА-Яїі]+$/

window.onload = () => {
    const surname = document.getElementsByName('surname')[0]
    const name = document.getElementsByName('name')[0]
    //const tel = document.getElementsByName('tel')[0]

    const validateCirillicInput = function() {
        if(!cirillicPattern.test(this.value)) {
            this.nextElementSibling.classList.remove('invisible');
            this.classList.remove('validation_type__error');
       } else {
        this.nextElementSibling.classList.add('invisible');
        this.classList.add('validation_type__error');
       }

    };
    surname.oninput = validateCirillicInput;
    name.oninput = validateCirillicInput;
    //tel.oninput = validateCirillicInput;
}