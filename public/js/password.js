function mostrarContrasena(){
    var tipo = document.getElementById("password");
    let eye = document.querySelector(".icon");

    if(tipo.type == "password"){
        tipo.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }else{
        tipo.type = "password";
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");

       
    }
}
function ocultarContrasena(){
    var tipo = document.getElementById("password");
    let eye = document.querySelector(".icon");

    if(tipo.type == "password"){
        tipo.type = "text";
        eye.classList.add("fa-eye-slash");
    }else{
        tipo.type = "password";
        eye.classList.remove("fa-eye-slash");
       
    }
}