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
    )


    let r = 0;
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