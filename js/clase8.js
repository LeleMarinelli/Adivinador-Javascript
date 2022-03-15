// console.dir(document)

//Llamando elemento por ID

let lampara = document.getElementById("lampara");

console.dir(lampara);


//Probando buecar elementos por clase
let dialogo = document.getElementsByClassName("dialogo");

for ( cuadrosTexto of dialogo){
    console.log(cuadrosTexto.innerHTML);
}

console.log("Probando otra cosa");


//Llamando elementos por etiqueta y probando otro metodo para recorrer listas.

let tarea = document.getElementsByTagName("p");

for ( i= 0 ; i < dialogo.length ; i++){
    console.log(dialogo[i].innerText);
}

// Buscando nodo padre.
for ( i= 0 ; i < dialogo.length ; i++){
    console.log(dialogo[i].parentNode.innerHTML);
}

console.log("Probando agregar Elementos HTML");

//Creando elementos pedidos con prompt.
let listaOpciones = document.getElementById("listaOpciones");

console.log( listaOpciones.innerHTML);

let askedOption = prompt("Quieres hacer otra cosa y agregar la opción a la lista? ")
let nuevaOpcion = document.createElement("li");
nuevaOpcion.innerText = askedOption;

listaOpciones.appendChild(nuevaOpcion);

console.log( listaOpciones.innerText);

//Probando otra cosa.


let nuevoTexto = document.getElementById("cuadroSuperior");

let nuevoSaludo = document.createElement("p");
nuevoSaludo.innerText = "Esperemos estes preparadx...";

nuevoTexto.appendChild(nuevoSaludo);

//Seguimos Agregando





