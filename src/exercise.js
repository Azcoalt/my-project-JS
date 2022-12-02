document.querySelector("#but").addEventListener("click",lele);
document.querySelector("#bor").addEventListener("click", borrar);

function lele(){
    let cantidad = $("#cantidad").val();
    cantidad = parseInt(cantidad);

    if(cantidad == 0){
        let text1 = "Cerro"
        document.querySelector('#pun').innerHTML="es de: "+text1+" puntos";
    } 

    if((cantidad >= 1) && (cantidad<= 5)){
        let text2 = "Seis" 
        document.querySelector('#pun').innerHTML="es de: "+text2+" puntos";
    }

    if((cantidad >= 6) && (cantidad<= 8)){
        let text3 = "Ocho" 
        document.querySelector('#pun').innerHTML="es de: "+text3+" puntos";
    }

    if((cantidad >= 9) && (cantidad <= 10)){
        let text4 = "Diez" 
        document.querySelector('#pun').innerHTML="es de: "+text4+" puntos";
    }
}

function borrar(){
    marc=""
    document.querySelector('#pun').innerHTML=""
}

