//Mail
//1. Creo una lista di Email

const email = ['fede27@gmail.com', 'sara24@gmail.com', 'giuseppee28@gmail.com', 'cristina20@gmail.com'];

//2. Chiedo la email

const useremail = prompt('Dimmi la tua Email');

//3. Scorro l'array con il ciclo for
// Creo una variabile userFound = false con cui vedo se l'utente tramite l'email può accedere o no
// Per ogni elemento :
  //Controllo se l'email si trova nell'array
  //userFound = true

let userFound = false ;
for(let i = 0; i < email.length; i++){
    const thisEmail=email[i];

    if(thisEmail === useremail){
        userFound = true;
    }

}

// UserFound = true allora dico all'utente che può accedere
// Altrimenti non può accedere

if(userFound === true){
    alert('Puoi accedere: email esistente ')
}
else{
    alert('Non puoi accedere: email inesistente')
}