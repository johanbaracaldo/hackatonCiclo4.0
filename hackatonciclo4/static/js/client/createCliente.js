function registrar() {
    let datos={
        name: $("#name").val(),
        email: $("#email").val(),
        cellPhone: $("#cellPhone").val(),
        idtype: $("#idtype").val(),
        identification: $("#identification").val(),
        country: $("#country").val(),
        city: $("#city").val(),
        location: $("#location").val(),
        neighborhood: $("#neighborhood").val(),
        address: $("#address").val(),
        facebook: $("#facebook").val(),
        twitter: $("#twitter").val(),
        google: $("#google").val(),
        instagram: $("#instagram").val(),
        password: $("#password").val(),
        password2: $("#password2").val()
    }

    let datosPeticion = JSON.stringify(datos);
    console.log(datos)

    if (validar()){
        console.log("Valido")
        $.ajax({
            url: "http://193.122.165.100:8080/api/user/new",
            type: 'POST',
            contentType:"application/json",
            dataType: 'JSON',
            data : datosPeticion,
            xhrFields: {
                withCredentials: false
            },

            success: function (respuesta) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },
    
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion POST..." + status );
            }
        });
    }
}

function activaNuevo(){
    $("#nuevo").show(500);
    $("#serialNumber").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
}
