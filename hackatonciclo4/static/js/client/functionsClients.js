function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let name= $("#name").val();
    let email= $("#email").val();
    let cellPhone= $("#cellPhone").val();
    let idtype= $("#idtype").val();
    let identification= $("#identification").val();
    let country= $("#country").val();
    let city= $("#city").val();
    let location= $("#location").val();
    let neighborhood= $("#neighborhood").val();
    let address= $("#address").val();
    let password= $("#password").val();
    let password2= $("#password2").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(identification)) {
        errores="identification vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#identification").focus();
        return false;
    }else if( validaesVacio(idtype)) {
        errores="idtype vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#idtype").focus();
        return false;
    }else if( validaesVacio(name)) {  
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(cellPhone)) { 
        errores="cellPhone vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#cellPhone").focus();
        return false;
    }else if( validaesVacio(email)) { 
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#email").focus();
        return false;
    }else if( validaesVacio(country)) { 
        errores="country vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#country").focus();
        return false;
    }else if( validaesVacio(city)) { 
        errores="city vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#city").focus();
        return false;
    }else if( validaesVacio(location)) { 
        errores="location vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#location").focus();
        return false;
    }else if( validaesVacio(neighborhood)) { 
        errores="neighborhood vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#neighborhood").focus();
        return false;
    }else if( validaesVacio(address)) { 
        errores="address vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#address").focus();
        return false;
    }else if( validaesVacio(password)) { 
        errores="password vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#password").focus();
        return false;
    }else if( validaesVacio(password2)) { 
        errores="password2 vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#password2").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
    return true;
}

function validarEditar(){
    let name= $("#nameEdit").val();
    let email= $("#emailEdit").val();
    let cellPhone= $("#cellPhoneEdit").val();
    let idtype= $("#idtypeEdit").val();
    let city= $("#cityEdit").val();
    let location= $("#locationEdit").val();
    let neighborhood= $("#neighborhoodEdit").val();
    let address= $("#addressEdit").val();
    let google= $("#googleEdit").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(idtype)) {
        errores="idtype vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#idtypeEdit").focus();
        return false;
    }else if( validaesVacio(name)) {  
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(cellPhone)) { 
        errores="cellPhone vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#cellPhoneEdit").focus();
        return false;
    }else if( validaesVacio(email)) { 
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#emailEdit").focus();
        return false;
    }else if( validaesVacio(city)) { 
        errores="city vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#cityEdit").focus();
        return false;
    }else if( validaesVacio(location)) { 
        errores="location vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#locationEdit").focus();
        return false;
    }else if( validaesVacio(neighborhood)) { 
        errores="neighborhood vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#neighborhoodEdit").focus();
        return false;
    }else if( validaesVacio(address)) { 
        errores="address vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#addressEdit").focus();
        return false;
    }else if( validaesVacio(google)) { 
        errores="google vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#mensajes").hide(1500);
        $("#googleEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
    return true;
}
