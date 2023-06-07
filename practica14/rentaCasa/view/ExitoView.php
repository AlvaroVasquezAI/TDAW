<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSS de Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
 
    </head>
    <body class="container-fluid" style="background-color: #555555">
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="card" style="width: 50rem;">
                <div class="card-body text-center">
                    <h1 class="card-title">RESERVACIÓN CREADA</h1>
                    <p class="card-text">Tu reservación fué exitosa, gracias por la compra. Disfruta del servicio.</p>
                </div>
                <ul class="list-group list-group-flush text-center">                
                    <li class="list-group-item">FOLIO: <?php echo $nuevareservacion['idreservacion']; ?> </li>
                    <li class="list-group-item">ANFITRIÓN: <?php echo $nuevareservacion['f_nombre']; ?> </li>
                    <li class="list-group-item">DIRECCIÓN DE LA CASA: <?php echo $nuevareservacion['c_direccion']; ?> </li>
                    <li class="list-group-item">HUESPED: <?php echo $nuevareservacion['p_nombre']; ?> </li>
                    <li class="list-group-item">FECHA DE ENTRADA: <?php echo $nuevareservacion['ingreso']; ?> </li>
                    <li class="list-group-item">FECHA DE SALIDA: <?php echo $nuevareservacion['salida']; ?> </li>
                    <li class="list-group-item">COSTO: <?php echo $nuevareservacion['costo']; ?> </li>
                </ul>
                <div class="card-body">
                    <a href="../index.php" class="card-link">Regresar al inicio</a>
                </div>
            </div>
        </div>
        
        <script src="../js/jquery-3.4.1.min.js"></script>

        <script src="../js/bootstrap.min.js"></script>

    </body>
</html>
