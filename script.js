// function mostrarMensaje() {
//     const Mensaje = document.getElementById('mensaje');
    
//     Mensaje.innerHTML = '¡Gracias por tu interes! Me pondre en contacto con vos pronto.';
//     Mensaje.classList.add('mensaje-exito');

//     document.querySelector('.form-contacto').reset();
    
//     setTimeout(function() {
//         Mensaje.classList.remove('mensaje-exito');
//         setTimeout(function() {
//             Mensaje.innerHTML = '';
//         }, 3000);
//     }, 3000);
// }

function mostrarMensaje() {
    const Mensaje = document.getElementById('mensaje');
    
    Mensaje.innerHTML = '¡Gracias por tu interés! Me pondré en contacto con vos pronto.';
    Mensaje.classList.add('mensaje-exito');

    // 🔁 Esperá 1 segundo antes de resetear el formulario
    setTimeout(function() {
        document.querySelector('.form-contacto').reset();
    }, 1000);

    // Ocultar el mensaje después de unos segundos
    setTimeout(function() {
        Mensaje.classList.remove('mensaje-exito');
        setTimeout(function() {
            Mensaje.innerHTML = '';
        }, 3000);
    }, 3000);
}

