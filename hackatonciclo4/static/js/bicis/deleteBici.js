function borrarRegistro(serialNumber) {
    console.log("borrar", serialNumber)
    let datos={
        id: serialNumber
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://193.122.165.100:8080/api/bike/" + serialNumber,
        data : datosPeticion,
        type: 'DELETE',
        contentType:"application/JSON",
        dataType: 'json',

        success: function () {
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro eliminado...");
            $("#mensajes").hide(1000);
            listar();
        },

        error: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        }
    });
}
