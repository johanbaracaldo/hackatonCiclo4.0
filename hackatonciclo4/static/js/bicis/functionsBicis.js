function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let brand = $("#brand").val();
    let type = $("#type").val();
    let rin = $("#rin").val();
    let serialNumber = $("#serialNumber").val();
    let description = $("#description").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(brand)) { 
        errores="brand Vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#brand").focus();
        return false;
    }else if( validaesVacio(type)) {
        errores="type vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#type").focus();
        return false;
    }else if( validaesVacio(rin)) {  
        errores="rin vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#rin").focus();
        return false;
    }else if( validaesVacio(serialNumber)) { 
        errores="serialNumber vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#serialNumber").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="description vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#description").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
}

function validarEditar(){
    let brand = $("#brandEdit").val();
    let type = $("#typeEdit").val();
    let rin = $("#rinEdit").val();
    let serialNumber = $("#serialNumberEdit").val();
    let description = $("#descriptionEdit").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(brand)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(type)) { 
        errores="type vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#typeEdit").focus();
        return false;
    }else if( validaesVacio(rin)) {
        errores="rin vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#rinEdit").focus();
        return false;
    }else if( validaesVacio(serialNumber)) {  
        errores="serialNumber vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#serialNumberEdit").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="description vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#descriptionEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        console.log("Validar Editar OK");
        return true;
    }
}
