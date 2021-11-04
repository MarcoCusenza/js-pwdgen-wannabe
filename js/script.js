alert("Hello World!");

const nome = prompt("Inserisci il tuo nome");
document.getElementById("name").innerHTML = nome;

const cognome = prompt("Inserisci il tuo cognome");
document.getElementById("surname").innerHTML = cognome;

const colorePref = prompt("Inserisci il tuo colore preferito");
document.getElementById("fav-color").innerHTML = colorePref;

let pwd = nome + cognome + colorePref + '21'
document.getElementById("pwd").innerHTML = pwd;