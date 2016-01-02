function MostrarConsultaEmpresas() {
    var busqueda = $('#busqueda').val();
    var parametros = {
        search : busqueda
    };
    $.ajax({
            data:  parametros,
            url:   'scripts/mostrarEmpresas.php',
            type:  'GET',
            success:  function (response) {
                    $("#todasEmpresas").html(response);
            }
    });
}

function MostrarConsultaEventos() {
    var busqueda = $('#busqueda').val();
    var parametros = {
        search : busqueda
    };
    $.ajax({
            data:  parametros,
            url:   'scripts/mostrarEventos.php',
            type:  'GET',
            success:  function (response) {
                    $("#todosEventos").html(response);
            }
    });
}

function MostrarConsultaSalas() {
	var busqueda = $('#busqueda').val();
	var capacidadMin = $('#capacidadMin').val();
	var capacidadMax = $('#capacidadMax').val();
	var fechaEntrada = $('#fechaEntrada').val();
	var horaEntrada = $('#horaEntrada').val();
	var fechaSalida = $('#fechaSalida').val();
	var horaSalida = $('#horaSalida').val();
	var parametros = {
			search : busqueda,
			capacidadMin : capacidadMin,
			capacidadMax : capacidadMax,
			fechaEntrada : fechaEntrada,
			horaEntrada : horaEntrada,
			fechaSalida : fechaSalida,
			horaSalida : horaSalida
	};
	$.ajax({
					data:  parametros,
					url:   'scripts/mostrarSalas.php',
					type:  'GET',
					success:  function (response) {
									$("#resultadosSalas").html(response);
                  $('table').stacktable();
					}
	});
}

function MostrarSalasDisponiblesEmpresas(id) {
    var idEmpresa = id;
    var parametros = {
  			idEmpresa : idEmpresa
  	};
  	$.ajax({
  					data:  parametros,
  					url:   'scripts/asignarSalaEmpresa.php',
  					type:  'GET',
  					success:  function (response) {
                $("#modalBody").html(response);
                $("#salasEmpresa").stacktable();
                window.location.href = "#divModal";
  					}
  	});
}


function AsignarSalaEm(idSala, idEmpresa) {
  var parametros = {
      idSala : idSala,
      idEmpresa : idEmpresa
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/asignarSalaEm.php',
          type:  'GET',
          success:  function (response) {
              $("#resultado").html(response);
          }
  });
}

function MostrarSalasDisponiblesEventos(id) {
    var parametros = {
  			idEvento : id
  	};
  	$.ajax({
  					data:  parametros,
  					url:   'scripts/asignarSalaEventos.php',
  					type:  'GET',
  					success:  function (response) {
                $("#modalBody").html(response);
                $("#salasEmpresa").stacktable();
                window.location.href = "#divModal";
  					}
  	});
}

function AsignarSalaEv(idSala, idEvento) {
  var parametros = {
      idSala : idSala,
      idEvento : idEvento
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/asignarSalaEv.php',
          type:  'GET',
          success:  function (response) {
              $("#resultado").html(response);
          }
  });
}

function ConfirmarReservar(idSala){
  var fechaEntrada = $('#fechaEntrada').val();
  var horaEntrada = $('#horaEntrada').val();
  var fechaSalida = $('#fechaSalida').val();
  var horaSalida = $('#horaSalida').val();
  var parametros = {
  		idSala : idSala,
  		fechaEntrada : fechaEntrada,
  		horaEntrada : horaEntrada,
  		fechaSalida : fechaSalida,
  		horaSalida : horaSalida
  };
  $.ajax({
  				data:  parametros,
  				url:   'confirmarReserva.php',
  				type:  'GET',
  				success:  function (response) {
  								$("#modalBody").html(response);
                  window.location.href = "#divModal";
  				}
  });
}

function ConfirmarAlquilar(idSala){
  var fechaEntrada = $('#fechaEntrada').val();
  var horaEntrada = $('#horaEntrada').val();
  var fechaSalida = $('#fechaSalida').val();
  var horaSalida = $('#horaSalida').val();
  var parametros = {
  		idSala : idSala,
  		fechaEntrada : fechaEntrada,
  		horaEntrada : horaEntrada,
  		fechaSalida : fechaSalida,
  		horaSalida : horaSalida
  };
  $.ajax({
  				data:  parametros,
  				url:   'confirmarAlquilar.php',
  				type:  'GET',
  				success:  function (response) {
  								$("#modalBody").html(response);
                  window.location.href = "#divModal";
  				}
  });
}

function CambiarBoton(idUsuario){
  var permisosUsuario = document.getElementById("permisosUsuario"+idUsuario);
  var permisosAdmin = document.getElementById("permisosAdmin"+idUsuario);

  if(permisosUsuario.defaultChecked == permisosUsuario.checked && permisosAdmin.defaultChecked == permisosAdmin.checked){
    document.getElementById("btnModificar"+idUsuario).className="btn btn-default";
  }else{
    document.getElementById("btnModificar"+idUsuario).className="btn btn-warning";
  }
}

function ApuntarEvento(idEvento){
  var parametros = {
      i : idEvento
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/apuntarEvento.php',
          type:  'GET',
          success:  function (response) {
            $("#resultado").html(response);
          }
  });
}

function DesapuntarEvento(idEvento){
  var parametros = {
      i : idEvento
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/desapuntarEvento.php',
          type:  'GET',
          success:  function (response) {
                  $("#resultado").html(response);
          }
  });
}

function CambiarPermisos(idUsuario){
  $.ajax({
    data:  $("#formularioPermisos"+idUsuario).serialize(),
    url:   'scripts/gestionarPermisos.php',
    type:  'POST',
    success:  function (response) {
            $("#resultado").html(response);
    }
  });
}

function AltaEmpresa(idEmpresa){
  var parametros = {
      i : idEmpresa
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/altaEmpresa.php',
          type:  'GET',
          success:  function (response) {
            $("#resultado").html(response);
          }
  });
}

function BajaEmpresa(idEmpresa){
  var parametros = {
      i : idEmpresa
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/bajaEmpresa.php',
          type:  'GET',
          success:  function (response) {
            $("#resultado").html(response);
          }
  });
}

function PromocionarEmpresa(idEmpresa){
  var parametros = {
      i : idEmpresa
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/promocionarEmpresa.php',
          type:  'GET',
          success:  function (response) {
            $("#resultado").html(response);
          }
  });
}

function AltaSala(idSala){
  var parametros = {
      i : idSala
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/altaSala.php',
          type:  'GET',
          success:  function (response) {
            $("#resultado").html(response);
          }
  });
}

function BajaSala(idSala){
  var parametros = {
      i : idSala
  };
  $.ajax({
          data:  parametros,
          url:   'scripts/bajaSala.php',
          type:  'GET',
          success:  function (response) {
            $("#resultado").html(response);
          }
  });
}