<?php

include_once "../libs/myLib.php";

if (!isset($_SESSION['login'])) {
    session_start();
}

$login = $_SESSION['login'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$sexo = "";
if (!empty($_POST['sexo'])) {
  $sexo = $_POST['sexo'];
}
$pais = $_POST['pais'];
$localidad = $_POST['localizacion'];
$direccion = $_POST['direccion'];
$codigoPostal = $_POST['codigoPostal'];
$imagen = "";

$subidaCorrecta = false;
if (isset($_FILES['imagen']) && $_FILES['imagen']['name']) {
  if ($_FILES['imagen']['error'] > 0) {
    salir2("Ha ocurrido un error en la carga de la imagen", -1, "miCuenta.php");
  } else {
    $extensiones = array("image/jpg", "image/jpeg", "image/png");
    $limite = 4096;
    if (in_array($_FILES['imagen']['type'], $extensiones) && $_FILES['imagen']['size'] < $limite * 1024) {
      $foldername = "assets/img/users";
      $foldermkdir = "../" . $foldername;
      if (!is_dir($foldermkdir)) {
        mkdir($foldermkdir, 0777, true);
      }
      $extension = "." . split("/", $_FILES['imagen']['type'])[1];
      $filename = $login . $extension;
      $ruta = $foldername . "/" . $filename;
      $rutacrear = $foldermkdir . "/" . $filename;
      if (!file_exists($rutacrear)) {
        $subidaCorrecta = @move_uploaded_file($_FILES['imagen']['tmp_name'], $rutacrear);
      } else {
        unlink($rutacrear);
        $subidaCorrecta = @move_uploaded_file($_FILES['imagen']['tmp_name'], $rutacrear);
      }
      if ($subidaCorrecta) {
        $imagen = $ruta;
      }
    }
  }
}

$conexion = dbConnect();
$sql="";
if ($imagen != "") {
  $sql = "UPDATE usuario SET nombre='" . $nombre . "', telefono='" . $telefono . "', sexo='" . $sexo . "', pais='" . $pais . "', localidad='" . $localidad . "', direccion='" . $direccion . "', codigoPostal='" . $codigoPostal . "', imagen='" . $imagen . "' WHERE login='" . $login . "'";
}else {
  $sql = "UPDATE usuario SET nombre='" . $nombre . "', telefono='" . $telefono . "', sexo='" . $sexo . "', pais='" . $pais . "', localidad='" . $localidad . "', direccion='" . $direccion . "', codigoPostal='" . $codigoPostal . "' WHERE login='" . $login . "'";
}
$resultado = mysqli_query($conexion, $sql);
mysqli_close($conexion);

if (!$resultado) {
  if ($subidaCorrecta) {
    unlink($rutacrear);
  }
  salir2("Error al modificar el perfil", -1, "miCuenta.php");
} else {
  salir2("Se ha editado correctamente", 0, "miCuenta.php");
}

?>
