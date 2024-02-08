-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS Garaje_Javier;

-- Seleccionar la base de datos recién creada
USE Garaje_Javier;

-- Crear la tabla en la base de datos
CREATE TABLE IF NOT EXISTS Contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    mensaje TEXT NOT NULL,
    terminosPublicidad BOOLEAN NOT NULL
);

-- Crear la tabla para guardar las solicitudes de cita previa

CREATE TABLE solicitud_cita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    marca VARCHAR(255),
    matricula VARCHAR(255) NOT NULL,
    km INT,
    bastidor VARCHAR(255),
    acepta_privacidad BOOLEAN NOT NULL,
    acepta_publicidad BOOLEAN,
    cambio_aceite BOOLEAN,
    diagnosis BOOLEAN,
    correa_distribucion BOOLEAN,
    climatizacion BOOLEAN,
    mantenimiento BOOLEAN,
    tubo_escape BOOLEAN,
    mecanica_general BOOLEAN,
    neumaticos BOOLEAN,
    frenos BOOLEAN,
    amortiguadores BOOLEAN,
    pre_itv BOOLEAN,
    carroceria BOOLEAN,
    electronica BOOLEAN,
    pintura BOOLEAN,
    electricidad BOOLEAN,
    lunas BOOLEAN,
    inyeccion_gasolina BOOLEAN,
    car_audio BOOLEAN,
    inyeccion_diesel BOOLEAN,
    tuning BOOLEAN,
    descripcion TEXT
);

-- Crear la tabla para guardar las solicitudes de presupuesto

CREATE TABLE solicitud_presupuesto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    marca VARCHAR(255),
    matricula VARCHAR(255) NOT NULL,
    km INT,
    bastidor VARCHAR(255),
    acepta_privacidad BOOLEAN NOT NULL,
    acepta_publicidad BOOLEAN,
    cambio_aceite BOOLEAN,
    diagnosis BOOLEAN,
    correa_distribucion BOOLEAN,
    climatizacion BOOLEAN,
    mantenimiento BOOLEAN,
    tubo_escape BOOLEAN,
    mecanica_general BOOLEAN,
    neumaticos BOOLEAN,
    frenos BOOLEAN,
    amortiguadores BOOLEAN,
    pre_itv BOOLEAN,
    carroceria BOOLEAN,
    electronica BOOLEAN,
    pintura BOOLEAN,
    electricidad BOOLEAN,
    lunas BOOLEAN,
    inyeccion_gasolina BOOLEAN,
    car_audio BOOLEAN,
    inyeccion_diesel BOOLEAN,
    tuning BOOLEAN,
    descripcion TEXT
);