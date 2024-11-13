<?php
include '../../../../config_db.php';

header("Content-Type: application/json");

// Conectar a la base de datos
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Error de conexión a la base de datos: " . $conn->connect_error]);
    exit();
}

// Recibir y sanitizar los datos
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$celular = $conn->real_escape_string($_POST['celular']);
$fecha_nacimiento = $conn->real_escape_string($_POST['date']);
$password = $_POST['password'];
$confirmPassword = $_POST['confirmPassword'];

// Verificar que las contraseñas coincidan
if ($password !== $confirmPassword) {
    echo json_encode(["status" => "error", "message" => "Las contraseñas no coinciden"]);
    exit();
}

// Verificar si el email ya está registrado
$sql_check = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql_check);

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "El correo electrónico ya está registrado"]);
    exit();
}

// Encriptar la contraseña y guardar el usuario
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$sql = "INSERT INTO usuarios (name, email, celular, fecha_nacimiento, password) VALUES ('$name', '$email', '$celular', '$fecha_nacimiento', '$hashedPassword')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Registro exitoso"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error al registrar usuario: " . $conn->error]);
}

$conn->close();
?>
