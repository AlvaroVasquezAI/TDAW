<?php
//Llamada al modelo
require_once("model/Casa.php");
$casa = new Casa();
$listaCasas = $casa->getCasas();
//Llamada a la vista
require_once("view/CasaView.php");

?>