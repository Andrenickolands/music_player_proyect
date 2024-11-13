<?php
$servername = "localhost";
$username = "sebastianokt";
$password = "sebastianokt";
$dbname = "music";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $name = $_POST["name"];
    $celular = $_POST["celular"];
    $date = $_POST["date"];

    $sql = "INSERT INTO usuarios (email, password, name, celular, fecha_nacimiento) VALUES ('$username', '$password', '$name', '$celular', '$date')";

    if ($conn->query($sql) === TRUE) {
            header("Location: ..\..\Albums\Album.html");
            exit();  
        } else {
            header("Location: login.php?error=user");
            exit();    
        }
}

$conn->close();
?>