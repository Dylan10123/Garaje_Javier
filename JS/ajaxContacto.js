var objeto = false;
if (window.XMLHttpRequest) {
    objeto = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    objeto = new ActiveXObject("Microsoft.XMLHTTP");
}

function construirQueryString(params) {
    return Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
}

function enviarDatos() {
    console.log('Enviando datos...');

    var datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("descripcion").value,
        terminosPublicidad: document.getElementById("terminos-publi").checked
    };

    var queryString = construirQueryString(datos);

    if (objeto) {
        // var contenedor = document.getElementById('contenedor');
        objeto.open("POST", '../PHP/enviarFormContacto.php', true);
        objeto.onreadystatechange = function () {
            if (objeto.readyState == 4 &&
                objeto.status == 200) {

                console.log(objeto.responseText)

                alert("¡Datos guardados correctamente!");
                window.location.href = "contacto.html";
            } else {
                console.log('Error: ' + objeto.status);
            }
        }
        objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        objeto.send(queryString);
    }
}

function limpiarFormularioContacto() {
    document.getElementById('form-contacto').reset();

    document.getElementById('nombre').classList.remove('class', 'invalid-input')
    document.getElementById('invalid-nombre').style.display = 'none';

    document.getElementById('email').classList.remove('class', 'invalid-input')
    document.getElementById('invalid-email').style.display = 'none';

    document.getElementById('descripcion').classList.remove('class', 'invalid-input')
    document.getElementById('invalid-mensaje').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM cargado')
    limpiarFormularioContacto()
    document.getElementById('contactoSubmit').onclick = function () {
        // Llama a la función de validación
        if (validarContacto()) {
            // Si la validación es exitosa, ejecuta la función enviarDatos
            enviarDatos();
            limpiarFormularioContacto()
        }
    }
});