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
        tabla: 'solicitud_cita',
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        email: document.getElementById("email").value,
        marca: document.getElementById("marca").value,
        matricula: document.getElementById("matricula").value,
        km: document.getElementById("km").value,
        bastidor: document.getElementById("bastidor").value,
        cambioAceite: document.getElementById("cambioAceite").checked,
        correaDistribucion: document.getElementById("correaDistribucion").checked,
        mantenimiento: document.getElementById("mantenimiento").checked,
        mecGeneral: document.getElementById("mecGeneral").checked,
        frenos: document.getElementById("frenos").checked,
        preITV: document.getElementById("preITV").checked,
        electronica: document.getElementById("electronica").checked,
        electricidad: document.getElementById("electricidad").checked,
        inyecGasolina: document.getElementById("inyecGasolina").checked,
        inyecDiesel: document.getElementById("inyecDiesel").checked,
        diagnosis: document.getElementById("diagnosis").checked,
        climatizacion: document.getElementById("climatizacion").checked,
        escape: document.getElementById("escape").checked,
        neumaticos: document.getElementById("neumaticos").checked,
        amortiguadores: document.getElementById("amortiguadores").checked,
        carroceria: document.getElementById("carroceria").checked,
        pintura: document.getElementById("pintura").checked,
        lunas: document.getElementById("lunas").checked,
        audio: document.getElementById("audio").checked,
        tuning: document.getElementById("tuning").checked,
        descripcion: document.getElementById("descripcion").value,
        terminosPublicidad: document.getElementById("terminos-publi").checked
    };

    console.log(datos)

    var queryString = construirQueryString(datos);

    if (objeto) {
        objeto.open("POST", '../PHP/enviarSolicitud.php', true);
        objeto.onreadystatechange = function () {
            if (objeto.readyState == 4 &&
                objeto.status == 200) {

                console.log(objeto.responseText)

                // Llamada al método que ejecuta el plugin SweetAlert2
                // Se muestra un mensaje de confirmación cuando la comunicación se ha realizado con éxito.
                Swal.fire({
                    title: "Solicitud realizada con éxito!",
                    text: "Le estaremos esperando!",
                    icon: "success"
                });
            } else {
                console.log('Error: ' + objeto.status);
            }
        }
        objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        objeto.send(queryString);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('formSubmit').onclick = function () {
        // Llama a la función de validación
        if (validarCitaPrevia()) {
            // Si la validación es exitosa, ejecuta la función enviarDatos
            enviarDatos();
        }
    }
});