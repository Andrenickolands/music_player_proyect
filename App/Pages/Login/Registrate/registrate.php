<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/b4ef05319a.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@500&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="../../../styles.css">
    <title>Registrate</title>
</head>
<?php
    if (isset($_GET['error'])) {
        if ($_GET['error'] == 'password') {
            echo "<script>alert('Contraseña incorrecta');</script>";
        } else if ($_GET['error'] == 'user') {
            echo "<script>alert('Usuario no encontrado');</script>";
        }
    }
    ?>
<body>
<form action="register.php" method="post" id="registration-form">
    <div class="container">
        <div class="fondo fondoDesign">
            <div class="container-regis">
                <h1 class="regis_title">REGISTRATE</h1>
                <input class="input input-position2" type="text" placeholder="Ingresa tu nombre" name="name" id="name" required>
          <input class="input input-position2" type="email" placeholder="Ingresa tu email" name="email" id="email" required>
          <input class="input input-position2" type="text" placeholder="Ingresa tu celular" name="celular" id="celular" required>
          <input class="input input-position2" type="date" placeholder="Ingresa tu fecha de nacimiento" name="date" id="date" required>
          <input class="input input-position2" type="password" placeholder="Ingresa tu contraseña" name="password" id="password" required>
          <input class="input input-position2" type="password" placeholder="Confirma tu contraseña" name="confirmPassword" id="confirmPassword" required>
          <button type="submit" class="btn btn-primary btn-position-2" id="registrate">Registrarse</button>

                </form>
            </div>
        </div>
    </div>
</body>

</html>
