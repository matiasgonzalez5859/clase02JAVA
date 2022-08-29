function solicitarnombre() {
    alert("Bienvenidos a TU farmacia de confianza")
    let nombre = prompt("ingrese su nombre")
    while (nombre === "") {
        nombre = prompt("ingrese su nombre");
    }
}

function mostrarproductos() {
    let producto;
    do {
        productos= parseInt (prompt("que producto desea llevar?: \n1)farmacia \n2)perfumeria \n3 cuidado personal"))
     } while (producto!=1 && producto!=2 && producto!=3)
     switch (producto) {
         case 1:
              return "farmacia";
         case 2:
            return "perfumeria";
         case 3:
            return "cuidado personal";
     }

} 
 function Validarprecio(Producto) {
    if (producto === "farmacia") {
        return 1000
    }
    else if (Producto === "perfumeria") {
        return 2000
    }
    else if (producto === "cuidado personal") {
        return 500
    }



}
function cobrar(nombre, precio) {
alert ("usted  lleva el siguiente producto:"+nombre+"nPrecio $"+precio)
let pago = parseInt(prompt("con cuanto pagas?"))
if (pago > precio){
    alert("gracias su vuelto es"+ (pago - precio))
     }else{
        alert ("no te alcanza")
}
}

solicitarnombre();
let ProductoNombre = mostrarproductos();
let precioproducto = Validarprecio(productonombre);
cobrar (productonombre,precioproducto);

