//REQUEST #1: Chiedi all’utente il suo nome
var nome = prompt("Inserisci il tuo nome")

//REQUEST #1: Chiedi all’utente il suo cognome
var cognome = prompt("Inserisci il tuo cognome")

//REQUEST #1: Chiedi all’utente il suo colore preferito
var colorePreferito = prompt("Inserisci il tuo colore preferito")

//Visualizzare messaggio 
document.getElementById("message").innerHTML = "Hai creato un (insicurissimo) password generator! &#129488;"

//Creare e Visualizzare sulla pagina nomecognomecolorepreferito19
document.getElementById("password").innerHTML = nome + cognome + colorePreferito + 19

