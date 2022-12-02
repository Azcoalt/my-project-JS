document.querySelector("#btncalc").addEventListener("click",calcular);
document.querySelector("#bor").addEventListener("click", borrar);

function calcular(){

    let producto = document.getElementById("validationCustom04").value;
    let cantidad = $("#cantidad").val();
    cantidad = parseFloat(cantidad);
    let button =document.getElementById("but");
    let p = document.getElementById("card-text");
    let preciodes;
    let neto;
    let total;

    if(producto == "SONY"){
        neto = cantidad*1.50
        preciodes = ((cantidad*1.50)*0.15);
        total = ((cantidad*1.50))-preciodes;
        document.querySelector('#totB').innerHTML="$"+neto;
        document.querySelector('#desc').innerHTML="-$"+preciodes.toFixed(2)+" ("+1.50+"%)";
        document.querySelector('#tot').innerHTML="$"+total.toFixed(2);
         
    }

    if(producto == "ACER"){
        neto = cantidad*3.00
        preciodes = ((cantidad*3.00)*0.12);
        total = ((cantidad*3.00))-preciodes;
        document.querySelector('#totB').innerHTML="$"+neto;
        document.querySelector('#desc').innerHTML="-$"+preciodes.toFixed(2)+" ("+3.00+"%)";
        document.querySelector('#tot').innerHTML="$"+total.toFixed(2);
    }

    if(producto == "PRINCO"){
        neto = cantidad*1.50
        preciodes = ((cantidad*1.50)*0.10);
        total = ((cantidad*1.50))-preciodes;
        document.querySelector('#totB').innerHTML="$"+neto;
        document.querySelector('#desc').innerHTML="-$"+preciodes.toFixed(2)+" ("+1.50+"%)";
        document.querySelector('#tot').innerHTML="$"+total.toFixed(2);
    }
    

    if(producto == "IBM"){
        neto = cantidad*3.00
        preciodes = ((cantidad*3.00)*0.20);
        total = ((cantidad*3.00))-preciodes;
        document.querySelector('#totB').innerHTML="$"+neto;
        document.querySelector('#desc').innerHTML="-$"+preciodes.toFixed(2)+" ("+3.00+"%)";
        document.querySelector('#tot').innerHTML="$"+total.toFixed(2);
    }
}

function borrar(){
    marc=""
    document.querySelector('#totB').innerHTML=""
    document.querySelector('#desc').innerHTML=""
    document.querySelector('#tot').innerHTML=""
    document.querySelector('#marca').innerHTML=""
}