$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://193.122.165.100:8080/api/bike/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: 'json',
        xhrFields: {
            withCredentials: false
        },

        success: function (items) {
            loadProducts(items);
        },

        error: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Obteniendo listado de Productos...");
            $("#mensajes").hide(1500);
        }
    });
}

function loadProducts(items){
    $("#tableDataProducts").html("");
    const tableBody = document.getElementById("tableDataProducts");
    let dataHtml = "";

    for (var i=0; i < items.length; i++) {
        dataHtml += `<tr>
                <td>${items[i].brand}</td>
                <td>${items[i].type}</td>
                <td>${items[i].rin}</td>
                <td>${items[i].serialNumber}</td>
                <td>${items[i].description}</td>
                <td><button class="btn btn-success btn-sm" onclick="editarRegistro('${items[i].serialNumber}')">Editar</button></td>
                <td><button class="btn btn-danger btn-sm" onclick="borrarRegistro('${items[i].serialNumber}')">Borrar</button></td>
            </tr>`;
    }
    $("#tableDataProducts").html(dataHtml);
}

function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)

    $("#brand").val(),
    $("#type").val(),
    $("#rin").val(),
    $("#serialNumber").val(),
    $("#description").val()
}
