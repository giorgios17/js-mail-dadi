/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

const registeredUsers = ['luigi@live.it', 'paolo@live.it', 'giuseppe@live.it']

const email = prompt('Digita la tua email').toLowerCase();

console.log('La tua email è ' + email)

if (email == registeredUsers[0]) {
    console.log('Accesso effettuato')
}
else if (email == registeredUsers[1]) {
    console.log('Accesso effettuato')
}
else if (email == registeredUsers[2]) {
    console.log('Accesso effettuato')
}
else {
    console.log('Non risulta nessun account registrato con questa email')
}


/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


const player = Math.floor((Math.random() * 6) + 1)
const computer = Math.floor((Math.random() * 6) + 1)

console.log('Hai lanciato il dado ed è uscito ' + player);
console.log('Il computer ha lanciato il dado ed è uscito ' + computer);

if (player > computer) {
    console.log('Complimenti hai vinto!')
}
else if (computer > player) {
    console.log('Hai perso! Riprova, sarai più fortunato.')
}
else {
    console.log('Hai pareggiato!')
}
