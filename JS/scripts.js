window.onload = function () {
    // showSlides();

    // Si no estamos en la página de inicio no se cargan los servicios aleatorios
    var url = window.location.href;     // Obtener la URL actual
    var partesUrl = url.split('/');    // Extraer el nombre del archivo HTML actual
    var nombreArchivo = partesUrl[partesUrl.length - 1];
    if (nombreArchivo == 'index.html' || nombreArchivo == 'index.html#') {
        randServicios();
    }

    // Asociar evento a todos los botones de la web
    var botones = document.getElementsByTagName('button');
    for (let i = 0; i < botones.length; i++) {
        if (botones[i].id != 'dropbtn' && botones[i].id != 'contactoSubmit' && botones[i].id != 'formSubmit' ) {
            botones[i].onclick = redireccionar
        }
    }

    // Asociar evento a todos los input de la web
    var inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        if (element.type === 'text') {
            element.onchange = comprobarContenido
        }
    }

    // Asociar evento a el envio del formulario de contacto
    // if (nombreArchivo == 'contacto.html') {
    //     document.getElementById('contactoSubmit').onclick = validarContacto;
    // }

    // Asociar evento al formulario de solicitud de cita previa o presupuesto
    if (nombreArchivo == 'CitaPrevia.html' || nombreArchivo == 'presupuesto.html' || nombreArchivo == 'contacto.html') {
        // document.getElementById('formSubmit').onclick = validarCitaPrevia;
        document.getElementById('privacidad').onmouseover = overlibPrivacidad
        document.getElementById('publicidad').onmouseover = overlibPublicidad
    }

    // if (nombreArchivo == 'contacto.html') {
    //     document.getElementById('privacidad').onmouseover = overlibPrivacidad
    //     document.getElementById('publicidad').onmouseover = overlibPublicidad
    // }

}

/* Esto establece la función onClick al boton desplegable,
de esta forma no dependo de otro evento como el "window.onload" para asociar esta propiedad 
esto me ahorra problemas con el funcionamiento de este botón*/
document.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.dropbtn')) {
        desplegar();
    }
});

function redireccionar() {
    location.href = this.value;
}


/* Esta función se ejecuta al cargar la página y va mostrando diferentes imágenes en el banner */
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos (5000 ms)
}

/* Cuando el usuario pulsa en el botón, 
cambia entre establecer y quitar la clase show para que se muestre o se esconda el desplegable */
function desplegar() {
    document.getElementById("desplegar").classList.toggle("show");
}

// Esta función cierra el desplegable si se pulsa en cualquier otra parte de la ventana
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var desplegar = document.getElementById("desplegar");
        if (desplegar.classList.contains('show')) {
            desplegar.classList.remove('show');
        }
    }
}


// Esta función muestra una serie de servicios aleatorios en la página de inicio
function randServicios() {
    var contenedor = document.getElementById('tg-index');
    var servicios = contenedor.getElementsByClassName('servicio');
    var mostrados = [];

    // Elije 4 servicios aleatorios de un conjunto con todos los servicios
    while (mostrados.length < 4) {
        var rand = Math.floor(Math.random() * (18 - 1)) + 1;
        var divAleatorio = servicios[rand];

        if (!mostrados.includes(divAleatorio)) {
            mostrados.push(divAleatorio);
            divAleatorio.style.display = 'flex'; // Muestra el div en la página
        }
    }
}

// Función que comprueba si en un input hay texto para saber si puede hacer que el label baje o no. 
//De esta forma evito que se solape el texto
function comprobarContenido() {
    var valor = this.value;

    if (valor.trim() !== "") {
        this.classList.add("filed-input");
    } else {
        this.classList.remove("filed-input");
    }
}

// Esta es la función que se encarga de la validación del formulario de cita previa
function validarCitaPrevia(e) {
    var nombre = document.getElementsByName('nombre')[0].value;
    var apellidos = document.getElementsByName('apellidos')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var matricula = document.getElementsByName('matricula')[0].value;
    var priv = document.getElementById('terminos-priv');
    var publi = document.getElementById('terminos-publi');

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar el formato de la matrícula
    var matriculaViejaRegex = /^[A-Za-z]-\d{4}-[A-Za-z]{2}$/;
    var matriculaNuevaRegex = /^\d{4}\s?[A-Za-z]{3}$/;

    var isValid = true;

    // Validar el campo Nombre
    if (nombre.trim() === '') {
        isValid = false;
        document.getElementById('nombre').classList.add('class', 'invalid-input')
        document.getElementById('invalid-nombre').style.display = 'block';
    }

    // Validar el campo Apellidos
    if (apellidos.trim() === '') {
        isValid = false;
        document.getElementById('apellidos').classList.add('class', 'invalid-input')
        document.getElementById('invalid-apellidos').style.display = 'block';
    }

    // Validar el campo Email
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('email').classList.add('class', 'invalid-input')
        document.getElementById('invalid-email').style.display = 'block';
    }

    // Validar el campo Matrícula
    if (!matriculaViejaRegex.test(matricula) && !matriculaNuevaRegex.test(matricula)) {
        isValid = false;
        document.getElementById('matricula').classList.add('class', 'invalid-input')
        document.getElementById('invalid-matricula').style.display = 'block';
    }

    if (!priv.checked && !publi.checked) {
        isValid = false;
        document.getElementById('invalid-terminos').style.display = 'block';
    }

    // Evitar que el formulario se envíe si hay campos no válidos
    if (!isValid) {
        e.preventDefault()
    }

    return isValid;
}

// Función que valida los datos del formulario de contacto
function validarContacto() {
    var nombre = document.getElementsByName('nombre')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var descripcion = document.getElementById('descripcion').value;
    var priv = document.getElementById('terminos-priv');

    var isValid = true;

    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar el campo Nombre
    if (nombre.trim() === '') {
        isValid = false;
        document.getElementById('nombre').classList.add('class', 'invalid-input')
        document.getElementById('invalid-nombre').style.display = 'block';
    }

    // Validar el campo Email
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('email').classList.add('class', 'invalid-input')
        document.getElementById('invalid-email').style.display = 'block';
    }

    if (descripcion.trim() === '') {
        isValid = false;
        document.getElementById('descripcion').classList.add('class', 'invalid-input')
        document.getElementById('invalid-mensaje').style.display = 'block';
    }

    if (!priv.checked) {
        isValid = false;
        document.getElementById('invalid-terminos').style.display = 'block';
    }

    return isValid;
}

function overlibPrivacidad() {
    return overlib('He leído y acepto que mis datos sean tratados por TALLERES JAVIER BLASCO,S.L.U., con la finalidad de que me faciliten un presupuesto de los productos y/o servicios solicitados, pulsando sobre la casilla de verificación, de conformidad con la política de privacidad.');
}

function overlibPublicidad() {
    return overlib('He leído y acepto que mis datos sean tratados por TALLERES JAVIER BLASCO,S.L.U., con la finalidad de recibir publicidad o información promocional sobre los productos y/o servicios que ofrecen, así como suscribirme a su Newsletter, pulsando sobre la casilla de verificación, de conformidad con la política de publicidad.');
}