//Рандомный генератор имён с выбором пола

/* let malename = new Array(
    "Allen","Bob","Carlton",
    "David","Ernie","Foster",
    "George","Howard","Ian",
    "Jeffery","Kenneth","Lawrence",
    "Michael","Nathen","Orson",
    "Peter","Quinten","Reginald",
    "Stephen","Thomas","Morris",
    "Victor","Walter","Xavier",
    "Charles","Anthony","Gordon",
    "Percy","Conrad","Quincey",
    "Armand","Jamal","Andrew",
    "Matthew","Mark","Gerald"
    )
    let femalename = new Array(
    "Alice","Bonnie","Cassie",
    "Donna","Ethel","Grace",
    "Heather","Jan","Katherine",
    "Julie","Marcia","Patricia",
    "Mabel","Jennifer","Dorthey",
    "Mary Ellen","Jacki","Jean",
    "Betty","Diane","Annette",
    "Dawn","Jody","Karen",
    "Mary Jane","Shannon","Stephanie",
    "Kathleen","Emily","Tiffany",
    "Angela","Christine","Debbie",
    "Karla","Sandy","Marilyn",
    "Brenda","Hayley","Linda"
    )
    let lastname = new Array(
    "Adams","Bowden","Conway",
    "Darden","Edwards","Flynn",
    "Gilliam","Holiday","Ingram",
    "Johnson","Kraemer","Hunter",
    "McDonald","Nichols","Pierce",
    "Sawyer","Saunders","Schmidt",
    "Schroeder","Smith","Douglas",
    "Ward","Watson","Williams",
    "Winters","Yeager","Ford",
    "Forman","Dixon","Clark",
    "Churchill","Brown","Blum",
    "Anderson","Black","Cavenaugh",
    "Hampton","Jenkins","Prichard"
    ) */


    /* let r = 0;
    let i = 0;

    function RandomName(nameform) {

    r = Math.floor(Math.random() * lastname.length);  

    if(nameform.gender.options[1].selected == true) {

    i = Math.floor(Math.random() * femalename.length);

    nameform.first.value=femalename[i] 

    nameform.last.value=lastname[r]
    } else { 

    i = Math.floor(Math.random() * malename.length);

    nameform.first.value=malename[i] 

    nameform.last.value=lastname[r]   

       }
    } */





    
// Через ключи


  function getLetter(type) {

  let letterCheck = prompt(`Enter the first letter of the ${type}`);
  return letterCheck;

  }
   
  function getGender() {

      let genderCheck = prompt('Enter the gender please, \'male\' or \'female\'');
      return genderCheck;
  }
  
  nameFirstLetter = getLetter('name');
  nameFirstLetter = nameFirstLetter.toUpperCase();
  surnameFirstLetter = getLetter('surname');
  surnameFirstLetter = surnameFirstLetter.toUpperCase();
  
  
  
  chosenGender = getGender();
  
  function getRandomName(letter1, letter2, gender) {
      let givenName = '';
      let randomIndex = 0;
  
      if (gender === 'male') {
          randomIndex = getRandomIndex(maleNames[letter1]);
          givenName = maleNames[letter1][randomIndex];
      } else {
          randomIndex = getRandomIndex(femaleNames[letter1]);
          givenName = femaleNames[letter1][randomIndex];
      }
  
      randomIndex = getRandomIndex(surnames[letter2]);
      let givenSurname = surnames[letter2][randomIndex];
  
  
      return (givenName + ' ' + givenSurname);
  
  }
  
  function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
  }
  
  
  
  const maleNames = {
      'A': ['Adam','Alex','Arnold','Alan'],
      'B': ['Benjamin','Brendon','Bruce','Bryan'],
      'C': ['Carl','Charles','Chris','Carlos'],
      'D': ['Dereck','Daniel','Dwayne','Diego'],
      'E': ['Ethan','Elijah','Eliot','Erick'],
      'F': ['Fred','Finn','Franklin','Felix'],
      'G': ['George','Graham','Gabriel','Gary'],
      'H': ['Henry','Harvey','Harry','Houson'],
      'I': ['Isaac','Ibrahim','Iker','Ismael'],
      'J': ['Jeff','Jerome','James','Joshua'],
      'K': ['Keith','Keanu','Kendrick','Kurt'],
      'L': ['Luke','Lee','Liam','Lloyd'],
      'M': ['Max','Michael','Marcellus','Milton'],
      'N': ['Nick','Nathan','Noah','Norman'],
      'O': ['Oliver','Oscar','Ozzy','Orlando'],
      'P': ['Paul','Peter','Preston','Phillip'],
      'Q': ['Quentin','Quinn','Quincy'],
      'R': ['Ron','Ryan','Ray','Richard'],
      'S': ['Sean','Simon','Scott','Stephen'],
      'T': ['Thomas','Terrence','Tim','Tucker'],
      'U': ['Ulysses','Uriah','Uziel'],
      'V': ['Vance','Victor','Vince','Virgil'],
      'W': ['William','Wayne','Winston','Walter'],
      'X': ['Xavier','Xaiden','Xander'],
      'Y': ['Yousef','Yahir','Yeshua','Yunus'],
      'Z': ['Zack','Zayn','Zaiden']
  }
  const femaleNames = {
   'A': ['Ariana','Alice','Anabelle','Aubrie'],
   'B': ['Bella','Bonnie','Breanna','Brigitte'],
   'C': ['Cara', 'Candace','Camella','Cindy'],
   'D': ['Daisy','Danielle','Dora','Dixie'],
   'E': ['Erica','Elisabeth','Ellen','Elsa'],
   'F': ['Faith','Flora','Fiona','Felicity'],
   'G': ['Grace','Giovanna','Grace','Gwen'],
   'H': ['Holly','Hailey','Heidy','Helen'],
   'I': ['Irene','Ingrid','Isabelle','Ivy'],
   'J': ['Julia','Jacquelyn','Jade','Janett'],
   'K': ['Kylie','Kaia','Kamila','Kate'],
   'L': ['Layla','Lara','Lena','Lexa'],
   'M': ['Martha','Maia','Mariah','May'],
   'N': ['Nelly','Nancy','Nataly','Norah'],
   'O': ['Olivia','Octavia','Odette','Oakley'],
   'P': ['Penelopy','Prudence','Petra','Phoebe'],
   'Q': ['Quinncy','Queen','Quinn'],
   'R': ['Rebecca','Reagan','Renata','Rita'],
   'S': ['Sofia','Sandra','Sarah','Selena'],
   'T': ['Theresa','Taylor','Tiffany','Tina'],
   'U': ['Ursula','Uma','Unique'],
   'V': ['Victoria','Venice','Valerie','Violett'],
   'W': ['Wendy','Whitney','Wynter'],
   'X': ['Xandra','Xena','Ximena'],
   'Y': ['Yara','Yasmine','Yuliana','Yuna'],
   'Z': ['Zoey','Zia','Zella','Zelda']
}

const surnames = {
   'A': ['Allister','Ackerman','Anders','Anderson'],
   'B': ['Boyd','Briscoe','Boone','Barton'],
   'C': ['Crenshaw', 'Crocker','Cutting','Crawford','Cassidy'],
   'D': ['Dornan','Dallian','De Armas','Dorsia'],
   'E': ['Erwin','Erfinder','Erder','Ehrmann'],
   'F': ['Frenzal','Farkas','Friedman','Felicity'],
   'G': ['Gannon','Garret','Grant','Gunderson'],
   'H': ['Hostetler','Hardin','Horowitz','Hughes','House'],
   'I': ['Irwing','Innerberg','Ingram','Illinois'],
   'J': ['Johnson','Jamison','Jackson','Jacobs'],
   'K': ['Kimball','Kowalski','Kieran','Krueger'],
   'L': ['Lewis','Lawson','Lineholm','Lancer'],
   'M': ['McLafferty','Morales','Martimer','Moore'],
   'N': ['Nash','Noonan','Notch','Nattler'],
   'O': ['Ortal','Orwell','Overson','O\'Brien'],
   'P': ['Parry','Parker','Phebus','Powell'],
   'Q': ['Quade','Quarry','Quarterman','Quello'],
   'R': ['Ronte','Rivas','Robinson','Rogers'],
   'S': ['Straus','Smith','Schuler','Stone'],
   'T': ['Thorn','Torini','Thomson','Turner'],
   'U': ['Ulrich','Ulmer','Upchurch','Underhill'],
   'V': ['Valentine','Vargas','Velasco','Venido'],
   'W': ['Whitman','Weathers','Wilkins','Watson'],
   'X': ['Xenakis','Xinos','Xanthos'],
   'Y': ['Yates','York','Yeager','Youngs'],
   'Z': ['Zappa','Zoeller','Ziegler','Zimmer']
}

let randomName = getRandomName(nameFirstLetter,surnameFirstLetter,chosenGender);
alert (randomName); 