<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/b4ef05319a.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https: //fonts.googleapis.com/css2?family=Abhaya+Libre:wght@500&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="../../styles.css">
    <title>login</title>
</head>

<body>
    <?php
    if (isset($_GET['error'])) {
        if ($_GET['error'] == 'password') {
            echo "<script>alert('Contraseña incorrecta');</script>";
        } else if ($_GET['error'] == 'user') {
            echo "<script>alert('Usuario no encontrado');</script>";
        }
    }
    ?>
    <div class="container">
        <div class="fondo fondoDesign">
            <div class="container-logo">
                <img src="../../../assets/logo/logoExplorify.svg" alt="logoExplorify">
            </div>
            <div class="container-login">
                <form action="logica.php" method="post">
                    <input class="input input-position" placeholder="Ingresa tu email" type="text" id="email"
                        name="email"><br><br>
                    <input class="input input-position" type="password" placeholder="Ingresa tu contraseña"
                        id="password" name="password"><br><br>
                    <input type="submit" class="btn btn-primary btn-position" id="signIn" value="iniciar sesion">
                </form>
                <a href="#">
                    <h4 class="PasswordReset">Olvide mi contraseña</h4>
                </a>
                <svg width="270" height="4" viewBox="0 0 270 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L268 1.99998" stroke="#BFC5C8" stroke-width="4" stroke-linecap="round" />
                </svg>
                <button type="submit" class="btn btn-primary btn-position-2" id="signUp">Regístrate</button>
            </div>

        </div>
    </div>

    <script src="login.js"></script>
</body>

</html>