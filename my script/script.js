function validarFormulario() {
    const nombre = document.getElementById('nombreInput').value;
    const email = document.getElementById('emailImput').value;
    const telefono = document.getElementById('telefonoInput').value;
    const mensaje = document.getElementById('areaMensajeInput').value;
    const motivo = document.getElementById('inputMotivoSelect').value;

    if (nombre === '' || email === '' || telefono === '' || mensaje === '' || motivo === '') {
        mostrarAlerta('Por favor, completa todos los campos del formulario.');
        return false;
    }
        return true;
    
    function mostrarAlerta(mensaje) {
        let alerta = document.createElement('div');
        alerta.className = 'alert-custom';
        alerta.appendChild(document.createTextNode(mensaje));
        let formulario = document.querySelector('form');
        formulario.parentNode.insertBefore(alerta, formulario);
        setTimeout(function() {
            alerta.parentNode.removeChild(alerta);
        }, 3000);
    }
}
