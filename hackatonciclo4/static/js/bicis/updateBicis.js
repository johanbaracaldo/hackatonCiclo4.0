function editarRegistro(llaveId) {
    let datos = {
        serialNumber: llaveId
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://193.122.165.100:8080/api/bike/" + llaveId,
        type: 'GET',
        contentType:"application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            editarRespuesta(respuesta);
            activaEditar();
        },

        error: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Error peticion PUT..." + status);
        }
    });
}

function editarRespuesta(items) {
    $("#brandEdit").val(items.brand);
    $("#typeEdit").val(items.type);
    $("#rinEdit").val(items.rin);
    $("#serialNumberEdit").val(items.serialNumber);
    $("#descriptionEdit").val(items.description);
}

function actualizar() {
    let datos = {
        brand: $("#brandEdit").val(),
        type: $("#typeEdit").val(),
        rin: $("#rinEdit").val(),
        serial: $("#serialNumberEdit").val(),
        description: $("#descriptionEdit").val()
    }
    console.log($("#serialNumberEdit").val());
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        $.ajax({
            url: "http://193.122.165.100:8080/api/bike/update",
            type: 'PUT',
            contentType:"application/json",
            dataType: 'JSON',
            data : datosPeticion,

            success: function (respuesta) {
                console.log("EXITO");
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro actualizado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },

            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion Post..." + status);
            }
        });
    }
}

function activaEditar() {
    $("#editar").show(500);
    $("#nuevo").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}
