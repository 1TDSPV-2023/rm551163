"use strict";

        //Criando Objetos

const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario : "00000"

}
const usuario2 = {
    nomeUsuario : "ptt01",
    senhaUsuario : "12345"

}

usuario2.nomeUsuario = "Juquinha";


        //Lista de usuarios
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

addEventListener("click", (evento)=>{

    let userInput = document.querySelector("#idUser");
    let passInput = document.querySelector("#idUser");
    console.log(evento.target)
    //console.log(evento);
    if(evento.target.id == "btnSubmit"){

    try{
            listaDeUsuarios.forEach((usuario)=>{

            if (userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
            
                throw "Usuario validado";
            }else   {
                
                }
            });

            throw "Usuario ou senha incorretos";

    }catch(msg){
        if(msg =="Usuario validado"){
            console.log("Usuario validado");

        }else{
            console.log("Usuario ou senha incorretos");
        }
    }


  }
});