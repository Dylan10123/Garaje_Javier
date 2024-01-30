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
$tabla = $_POST["tabla"];
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$email = $_POST["email"];
$marca = empty($_POST["marca"]) ? null : $_POST["marca"];
$matricula = $_POST["matricula"];
$km = empty($_POST["km"]) ? null : $_POST["km"];
$bastidor = empty($_POST["bastidor"]) ? null:  $_POST["bastidor"];
$cambioAceite = $_POST["cambioAceite"] == 'true' ? 1 : 0;
$correaDistribucion = $_POST["correaDistribucion"] == 'true' ? 1 : 0;
$mantenimiento = $_POST["mantenimiento"] == 'true' ? 1 : 0;
$mecGeneral = $_POST["mecGeneral"] == 'true' ? 1 : 0;
$frenos = $_POST["frenos"] == 'true' ? 1 : 0;
$preITV = $_POST["preITV"] == 'true' ? 1 : 0;
$electronica = $_POST["electronica"] == 'true' ? 1 : 0;
$electricidad = $_POST["electricidad"] == 'true' ? 1 : 0;
$inyecGasolina = $_POST["inyecGasolina"] == 'true' ? 1 : 0;
$inyecDiesel = $_POST["inyecDiesel"] == 'true' ? 1 : 0;
$diagnosis = $_POST["diagnosis"] == 'true' ? 1 : 0;
$climatizacion = $_POST["climatizacion"] == 'true' ? 1 : 0;
$escape = $_POST["escape"] == 'true' ? 1 : 0;
$neumaticos = $_POST["neumaticos"] == 'true' ? 1 : 0;
$amortiguadores = $_POST["amortiguadores"] == 'true' ? 1 : 0;
$carroceria = $_POST["carroceria"] == 'true' ? 1 : 0;
$pintura = $_POST["pintura"] == 'true' ? 1 : 0;
$lunas = $_POST["lunas"] == 'true' ? 1 : 0;
$audio = $_POST["audio"] == 'true' ? 1 : 0;
$tuning = $_POST["tuning"] == 'true' ? 1 : 0;
$descripcion = $_POST["descripcion"];
$terminosPublicidad = $_POST["terminosPublicidad"] == 'true' ? 1 : 0;

var_dump($tabla);

// // Preparar la consulta SQL
// $sql = "INSERT INTO $tabla (nombre, apellidos, email, marca, matricula, km, bastidor, acepta_privacidad, acepta_publicidad, cambio_aceite, diagnosis, correa_distribucion, climatizacion, mantenimiento, tubo_escape, mecanica_general, neumaticos, frenos, amortiguadores, pre_itv, carroceria, electronica, pintura, electricidad, lunas, inyeccion_gasolina, car_audio, inyeccion_diesel, tuning, descripcion) 
//         VALUES ($nombre, $apellidos, $email, $marca, $matricula, $km, $bastidor, 1, $terminosPublicidad, $cambioAceite, $diagnosis, $correaDistribucion, $climatizacion, $mantenimiento, $escape, $mecGeneral, $neumaticos, $frenos, $amortiguadores, $preITV, $carroceria, $electronica, $pintura, $electricidad, $lunas, $inyecGasolina, $audio, $inyecDiesel, $tuning, $descripcion)";


// if ($conn->query($sql) === TRUE) {
//     echo "Datos guardados correctamente";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// // Cerrar la declaración y la conexión
// $conn->close();

// Preparar la consulta SQL
$sql = "INSERT INTO $tabla (nombre, apellidos, email, marca, matricula, km, bastidor, acepta_privacidad, acepta_publicidad, cambio_aceite, diagnosis, correa_distribucion, climatizacion, mantenimiento, tubo_escape, mecanica_general, neumaticos, frenos, amortiguadores, pre_itv, carroceria, electronica, pintura, electricidad, lunas, inyeccion_gasolina, car_audio, inyeccion_diesel, tuning, descripcion) 
        VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// Preparar la sentencia
$stmt = $conn->prepare($sql);

// Vincular parámetros
$stmt->bind_param("sssssssiiiiiiiiiiiiiiiiiiiiis", $nombre, $apellidos, $email, $marca, $matricula, $km, $bastidor, $terminosPublicidad, $cambioAceite, $diagnosis, $correaDistribucion, $climatizacion, $mantenimiento, $escape, $mecGeneral, $neumaticos, $frenos, $amortiguadores, $preITV, $carroceria, $electronica, $pintura, $electricidad, $lunas, $inyecGasolina, $audio, $inyecDiesel, $tuning, $descripcion);

// Ejecutar la sentencia
if ($stmt->execute()) {
    echo "Datos guardados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la sentencia y la conexión
$stmt->close();
$conn->close();