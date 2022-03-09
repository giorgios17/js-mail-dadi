/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

const registeredUsers = ['luigi@live.it', 'paolo@live.it', 'giuseppe@live.it']

const email = prompt('Digita la tua email').toLowerCase();

console.log('Email inserita: ' + email)

let controllo = false;

for (let i = 0; i < registeredUsers.length && controllo === false; i++) {

    if (email === registeredUsers[i]) {
        console.log('Accesso effettuato');
        controllo = true;
    }
}

if (controllo === false) {
    console.log('Account inesistente.')
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
