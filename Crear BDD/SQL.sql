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