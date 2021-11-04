// alert("Hello World!");

const nome = prompt("Inserisci il tuo nome");
document.getElementById("name").innerHTML = nome;

const cognome = prompt("Inserisci il tuo cognome");
document.getElementById("surname").innerHTML = cognome;

const colorePref = prompt("Inserisci il tuo colore preferito");
document.getElementById("fav-color").innerHTML = colorePref;

if (nome == "" || nome == null || cognome == "" || cognome == null || colorePref == "" || colorePref == null) {
    document.getElementById("pwd-title").innerHTML = "ATTENZIONE";
    document.getElementById("pwd").innerHTML = "non hai inserito tutti i dati correttamente";
}
else {
    document.getElementById("pwd-title").innerHTML = "La tua nuova password è:";
    let pwd = nome + cognome + colorePref + '21'
    document.getElementById("pwd").innerHTML = pwd;
}