function mostrarMensaje() {
    const Mensaje = document.getElementById('mensaje');
    
    Mensaje.innerHTML = '¡Gracias por tu interes! Me pondre en contacto con vos pronto.';
    Mensaje.classList.add('mensaje-exito');

    document.querySelector('.form-contacto').reset();
    
    setTimeout(function() {
        Mensaje.classList.remove('mensaje-exito');
        setTimeout(function() {
            Mensaje.innerHTML = '';
        }, 3000);
    }, 3000);
}
