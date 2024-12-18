const inputNombre= document.getElementById('nombre');

const inputApellido= document.getElementById('apellido');
const inputEnviarFormulario= document.getElementById('enviarFormulario');
const inputTelefono= document.getElementById('telefono');
const inputMail= document.getElementById('correo');
// formulario de contacto
inputEnviarFormulario.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (!inputNombre.value) {
        alert('Debes ingresar tu nombre.');
        return;
    }
    if (!inputApellido.value) {
        alert('Debes ingresar tu apellido.');
        return;
    }
    if (!inputTelefono.value) {
        alert('Debes ingresar un número de teléfono.');
        return;
    }
    if (!inputMail.value) {
        alert('Debes ingresar un correo electrónico.');
        return;
    }
    
    alert('Formulario enviado correctamente!');
});


