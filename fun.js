
//llamar a la base de datos de firabase
const db = firebase.firestore();
//llamar al formulario
const formulario = document.getElementById("formulario");
//eventos del formulario
formulario.addEventListener("submit",async e=>{
    e.preventDefault();
    const email = formulario["email_Usuario"].value;
    const mensaje = formulario["mensaje_Usuario"].value;
    
    const noticia = await db.collection('mensaje').doc().set((
        correo: email,
        mensajes: mensaje
    ))
    

});