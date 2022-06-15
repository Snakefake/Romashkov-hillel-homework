let person;
if(confirm("Are you sure?")) {
        person = prompt("Hi, what's your name?");
        personLastName = prompt("What's your LastName?");
        personHobbi = prompt("What's your Hobbi?");
        personAge = prompt("How old are you?");
        alert("Hello, " + person + " " + personLastName + " " + "Your hobbi is " + personHobbi + " " + "And you are " + personAge + " " + "years old" + " ! " + "How Are You?");
        console.log(person, personLastName, personHobbi, personAge);
    } else
        alert("Person not sure");