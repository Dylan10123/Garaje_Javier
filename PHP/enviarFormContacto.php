<?php

// Conexión con la base de datos
$servername = "localhost";
$username = "root";
$password = "sa";
$dbname = "Garaje_Javier";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recopilar los datos del POST
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];
$terminosPublicidad = $_POST["terminosPublicidad"];

// Insertar los datos en la base de datos
$sql = "INSERT INTO Contacto (nombre, apellidos, email, mensaje, terminosPublicidad ) VALUES ('$nombre', '$apellidos', '$email', '$mensaje', $terminosPublicidad)";

if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();