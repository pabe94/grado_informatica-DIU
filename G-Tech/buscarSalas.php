<?php include 'header.php'; ?>
<section>
<h1>Buscador de salas<hr></h1>
<article>
<?php
include 'libs/myLib.php';
$conn = dbConnect();
?>
<div id="divModal" class="modalDialog">
  <div>
		<a href="#close" title="Close" class="close">X</a>
    <div id="modalBody">
  		<h2>Modal Box</h2>
  		<p>This is a sample modal box that can be created using the powers of CSS3.</p>
  		<p>You could do a lot of things here like have a pop-up ad that shows when your website loads, or create a login/register form for users.</p>
	</div>
</div>
</div>

<form role="search" class="buscarSalas">
  <div class="row">
  <div class="col-md-6 col-lg-6">
    <div class="form-group">
    <label>Nombre</label>
    <input type="text" id="busqueda" name="busqueda" onkeyup="MostrarConsultaSalas();" class="form-control" placeholder="Buscar...">
    </div>
    <div class="form-group">
    <label>Capacidad mínima</label>
    <input type="number" id="capacidadMin" min="1" max="1000" name="capacidadMin" onkeyup="MostrarConsultaSalas();" class="form-control" value="1">
    </div>
    <div class="form-group">
    <label>Capacidad máxima</label>
    <input type="number" id="capacidadMax" min="1" max="1000" name="capacidadMax" onkeyup="MostrarConsultaSalas();" class="form-control" value="1000">
    </div>
  </div>
  <div class="col-md-6 col-lg-6">
    <div class="row">
    <div class="col-md-6 col-lg-6">
      <div class="form-group">
      <label>Fecha de entrada</label>
      <input type="date" id="fechaEntrada" name="fechaEntrada" onkeyup="MostrarConsultaSalas();" class="form-control" placeholder="20-08-2016">
      </div>
    </div>
    <div class="col-md-6 col-lg-6">
    <div class="form-group">
    <label>Hora de entrada</label>
    <input type="date" id="horaEntrada" name="horaEntrada" onkeyup="MostrarConsultaSalas();" class="form-control" placeholder="10:00">
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-6 col-lg-6">
    <div class="form-group">
    <label>Fecha de salida</label>
    <input type="date" id="fechaSalida" name="fechaSalida" onkeyup="MostrarConsultaSalas();" class="form-control" placeholder="28-08-2016">
    </div>
    </div>
    <div class="col-md-6 col-lg-6">
    <div class="form-group">
    <label>Hora de salida</label>
    <input type="date" id="horaSalida" name="horaSalida" onkeyup="MostrarConsultaSalas();" class="form-control" placeholder="12:00">
    </div>
    </div>
    </div>

  </div>
  </div>
</form>
<h2>Resultados</h2>
<div id="resultadosSalas" class="row">
</div>
</article>
</section>
<script type="text/javascript">
window.onload = function()
{
		document.getElementById("salas").className = "active menu";
    $('table').stacktable();
}
</script>
<?php include 'footer.php'; ?>
