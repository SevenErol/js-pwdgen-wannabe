let firstName = prompt("Ciao utente! Come ti chiami?");

let lastName = prompt("Qual'è il tuo cognome?");

let favoriteColor = prompt("E qual'è il tuo colore preferito?")

const currentYear = "22";

let password = document.getElementById("password");

password.innerHTML = (`La password per te generata è: ${firstName + lastName + favoriteColor + currentYear}`)