function login(usuario,contraseña){
    if(usuario=="admin" && contraseña=="1234"){
        return "acceso denegado";
    }
}

console.log(login("admin","1234"))