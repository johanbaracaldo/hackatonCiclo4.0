function editarRegistro(llaveId) {
    let datos = {
        id: llaveId
    }
    
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://193.122.165.100:8080/api/user/" + llaveId,
        type: 'GET',
        contentType:"application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Información recuperada...");
            $("#mensajes").hide(1000);
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
    $("#identificationEdit").val(items.identification);
    $("#idtypeEdit").val(items.idtype);
    $("#nameEdit").val(items.name);
    $("#emailEdit").val(items.email);
    $("#cellPhoneEdit").val(items.cellPhone);
    $("#countryEdit").val(items.country);
    $("#cityEdit").val(items.city);
    $("#locationEdit").val(items.location);
    $("#neighborhoodEdit").val(items.neighborhood);
    $("#addressEdit").val(items.address);
    $("#twitterEdit").val(items.twitter);
    $("#facebookEdit").val(items.facebook);
    $("#googleEdit").val(items.google);
    $("#passwordEdit").val(items.password);
    $("#calificationOwnerEdit").val(items.calificationOwner);
    $("#calificationUserEdit").val(items.calificationUser);
    $("#tokensEdit").val(items.tokens);
}

function actualizar() {
    let datos = {
        identification: $("#identificationEdit").val(),
        idtype: $("#idtypeEdit").val(),
        name: $("#nameEdit").val(),
        email: $("#emailEdit").val(),
        cellPhone: $("#cellPhoneEdit").val(),
        country: $("#countryEdit").val(),
        city: $("#cityEdit").val(),
        location: $("#locationEdit").val(),
        neighborhood: $("#neighborhoodEdit").val(),
        address: $("#addressEdit").val(),
        twitter: $("#twitterEdit").val(),
        facebook: $("#facebookEdit").val(),
        google: $("#googleEdit").val(),
        password: $("#passwordEdit").val(),
        calificationOwner: $("#calificationOwnerEdit").val(),
        calificationUser: $("#calificationUserEdit").val(),
        tokens: $("#tokensEdit").val()
    }

    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion)

    if (validarEditar()) {
        $.ajax({
            url: "http://193.122.165.100:8080/api/user/update",
            type: 'PUT',
            contentType:"application/json",
            dataType: 'JSON',
            data : datosPeticion,

            success: function (respuesta) {
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
    $("#idEdit").hide();
    $("#editar").show(500);
    $("#idEdit").focus();
    $("#nuevo").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}
