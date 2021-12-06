$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://193.122.165.100:8080/api/user/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: 'json',
        xhrFields: {
            withCredentials: false
        },

        success: function (respuesta) {
            loadClients(respuesta);
        },

        error: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function (xhr, status) {
            $("#mensajes").show(1000);
            $("#mensajes").html("Obteniendo listado de Clientes...");
            $("#mensajes").hide(1000);
        }
    });
}

function loadClients(items){
    $("#tableDataClients").html("");
    const tableBody = document.getElementById("tableDataClients");
    let dataHtml = "";

    for (var i=0; i < items.length; i++) {
        dataHtml += `<tr>
                <td>${items[i].identification}</td>
                <td>${items[i].idtype}</td>
                <td>${items[i].name}</td>
                <td>${items[i].cellPhone}</td>
                <td>${items[i].email}</td>
                <td>${items[i].city}</td>
                <td>${items[i].location}</td>
                <td>${items[i].neighborhood}</td>
                <td>${items[i].address}</td>
                <td><button class="btn btn-success btn-sm" onclick="editarRegistro('${items[i].identification}')">Editar</button></td>
                <td><button class="btn btn-danger btn-sm" onclick="borrarRegistro('${items[i].identification}')">Borrar</button></td>
            </tr>`;
    }
    $("#tableDataClients").html(dataHtml);
}

function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500);

    $("#name").val();
    $("#email").val();
    $("#password").val();
    $("#cellPhone").val();
    $("#idtype").val();
    $("#identification").val();
    $("#city").val();
    $("#location").val();
    $("#neighborhood").val();
    $("#address").val();
}
