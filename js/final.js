$(document).ready(function () {

   


//Lista de Funciones...

function chauPrimerCuadro(){ 
    $("#primeraPantalla").hide(); 
    
    fondo1.classList.toggle("primerPantalla")
    }

// Nueva funcion de crear cuadro hecha con Jquery. 

function nuevoCuadro(escribirMje){
    $("#main").append(`<div class="dialogo" id="nuevoCuadroTexto"><p></p></div>`);
    
    $("#nuevoCuadroTexto").hide()
                            .html(escribirMje)
                            .delay(1000)
                            .fadeIn("3000");
}

function cambiarFondo(){

    fondo2.classList.toggle("chauChau");
    fondo2.classList.toggle("segundaPantalla");
    $("#lampara").animate({height:'auto', width:'0em'}, 1200 , () => $("#lampara").animate({ height:'auto', width:'20em'}));


    $("#fondoBody").hide().addClass("segundoFondo").fadeIn(2000)

    $("#main").hide()
                .delay(1000)
                .fadeIn("3000");
   

    botonSalida();
    
}

function botonSalida() {
    $("#botonSalir").addClass("apareceBotonSalir");


    $("#clockdate").show();    
}

function escapar() {
    document.location.reload(true);
}

//Funciones relacionadas al reloj en la nube...
function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sol', 'Luna', 'Marte', 'Mercurio', 'Jupiter', 'Venus', 'Saturno'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;

    sessionStorage.setItem("dia", curWeekDay);
    
    var time = setTimeout(function(){ startTime() }, 500);
    }
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
    }


function verificarEdad(e){
    e.preventDefault();

    let edadIngresada = document.getElementById("preguntaEdad").value;
    // console.log("La edad del usuario es " + edadIngresada);


    if((edadIngresada <= 0)||(edadIngresada == "")){
        $("#primeraPantalla").addClass("dialogo3")
        $("#pPrimeraPantalla").html("No entiendo cuantos años tenes, vuelve a intentarlo por favor...").css('color','red');
        }
    else if (edadIngresada < 13) {
        chauPrimerCuadro()                    
        cuadroNube('Lamentablemente creemos que no deberias estar consultando tu futuro todavía, ve y disfruta sin preocupaciones.');

        $("#botonCerrarNube").click( () =>  (escapar()) );
        
        } 
    else if((edadIngresada >= 13)&&(edadIngresada <= 18)){
        chauPrimerCuadro()

        cuadroNube('Vas a poder ingresar igual, pero deberias entrar con supervicion de un adulto, ahhhh...');

        $("#botonCerrarNube").click( () =>  (cambiarFondo()) )
        }
    else if((edadIngresada > 18)&&(edadIngresada <= 120)){
        chauPrimerCuadro()
        
        cuadroNube('Perfecto! ingresemos a la cueva...');

        $("#botonCerrarNube").click( () =>  (cambiarFondo()) );
    }
    else if((edadIngresada > 120)){
        chauPrimerCuadro()
        
        cuadroNube('Esto es raro, no creo que usted esté vivo. Pero supongo que no hay nada de malo con que entre... Así que entremos...');

        $("#botonCerrarNube").click( () =>  (cambiarFondo()) );
    }

    //Guardar edad
    sessionStorage.setItem("edad", edadIngresada)
}

//Funcion que hace aparecer un cuadrito con fondo de nube en el medio.
function cuadroNube(textoNube) {
    $("#cuadroNube").append('<p id="textoNube">' + textoNube + '</p>').fadeIn(2500);  
}
$("#botonCerrarNube").click( () =>  ($("#cuadroNube").fadeOut("2000") ) )

function primeraReaccion(e){
    
    fondo2.classList.toggle("chauChau");
    fondo2.classList.toggle("segundaPantalla");
}

function accionLampara(e){
    e.preventDefault();

    queHizo = (`${accionUsuario.value}`).toLowerCase()

        if (queHizo == "observar"){
        const repLampara = respuestasLampara.find( AccionLampara => AccionLampara.accion == "observar");
        primeraReaccion();
        nuevoCuadro("Has elegido " + repLampara.accion + " la lampara y parece que " + repLampara.lamparaMje);
        } 
        else if (queHizo == "abrir"){
        const repLampara = respuestasLampara.find( AccionLampara => AccionLampara.accion == "abrir");
        primeraReaccion();
        nuevoCuadro("Has elegido " + repLampara.accion + " la lampara y parece que " + repLampara.lamparaMje);
        } 
        else if (queHizo == "frotar"){
        const repLampara = respuestasLampara.find( AccionLampara => AccionLampara.accion == "frotar");
        primeraReaccion();
        nuevoCuadro("Has elegido " + repLampara.accion + " la lampara y parece que " + repLampara.lamparaMje);
                
        cuadroPrimerosDatos();         

        } 
        else if (queHizo == "no tocar"){
        const repLampara = respuestasLampara.find( AccionLampara => AccionLampara.accion == "no tocar");
        primeraReaccion();
        nuevoCuadro("Has elegido " + repLampara.accion + " la lampara y parece que " + repLampara.lamparaMje);
        }

        else if(queHizo == ""){
            console.log("El usuario no escribio nada.");
             $("#cuadroTopLampara").html("No has escrito nada, crees que es esto es una broma?").addClass("dialogo3");
            return;
        }

        else if ((queHizo != "observar")||(queHizo != "abrir")||(queHizo != "frotar")||(queHizo != "no tocar")){
            $("#cuadroTopLampara").html("No no no no...    debes elegir una de las opciones listadas 😉").addClass("dialogo3")
        }
}


function cuadroPrimerosDatos(){

    $("#pantallaEmergente").hide();
    let pedirDatos = document.getElementById("pantallaEmergente");
    
    pedirDatos.classList.toggle("pantallaEmergente");

    $("#pantallaEmergente").delay(1000).fadeIn(2000);

    console.log("Una persona ha frotado la lampara..");
}

function newUser(){   
        
    let nombre = document.getElementById("preguntaNombre").value;
    let apellido = document.getElementById("preguntaApellido").value;

    if (nombre == "") {
        alert("No has ingresado tu nombre")
        return;
    }
    if (apellido == "") {
        alert("No has ingresado tu apellido")
        return;
    }

    console.log(`Ha ingresado la siguiente persona.. \nNombre: ${nombre} \nApellido: ${apellido}`);
    localStorage.setItem("listaUsuarios", ++contadorUsuarios);
    sessionStorage.setItem("nombre", `${nombre}`)
    
    consultantes.push(new usuario(++contadorUsuarios,`${nombre}`,`${apellido}`));
    saludo();
}

function elColorEs(){
                        favColor = (sessionStorage.getItem("color"));
                        console.log("y su color favorito es " + favColor);
                        $("#nuevoCuadroTexto").hide();
                        $("#preguntaColor").hide();
                        preguntaCalle()
                        };

function preguntaCalle() {

    cuadroNube('')
    $("#cuadroNube").html('<p id="textoNube">Piensa bien las siguientes preguntas.......</p>').delay(3000).fadeOut(1000);
   
    $("#preguntaCalle").addClass("pantallaEmergente").hide().fadeIn(2000);

}

//Esta funcion esta sin uso.
function nuevoCuadroPregunta() {
                            $("#main").append(`<div class="pantallaEmergente" id="nuevaPregunta">
                                                <p>Pronto nuevas preguntas, mientras esperas puedo hacerte una recomendación..</p> 
                                                <button id="botonNuevo" class="botonContinuar" type="submit">...</button>
                                                </div>`);

                            $("#botonNuevo").click(() => recomendacionAmuleto() );
                        }


function saludo(){
    let primerSaludo = document.getElementById("nuevoCuadroTexto");
    
    $("#nuevoCuadroTexto").hide().fadeIn("30000");

    for( const usuario of consultantes){
    console.log(usuario);
    var traerNombre = usuario.nombre;
    }

    primerSaludo.innerText =  "Hola " + (traerNombre).charAt(0).toUpperCase()+ (traerNombre).slice(1) + "! Estas a punto de saber algo de tu futuro y llevarte algunos consejos de vida.." ;
    
    $("#pantallaEmergente").hide();

    $("#main").append(`<img class="lampara2" id="lampara2" src="images/lamp.png" alt="Lampara de Aladdin">`)

    $("#preguntaColor").addClass("pantallaEmergente").hide().delay(1000).fadeIn(2000);;
    
    $("#nuevoCuadroTexto").fadeIn("20000");

    console.log("Esta es la consulta Nº " + (localStorage.getItem("listaUsuarios")));
    console.log("La persona se llama " + (sessionStorage.getItem("nombre")) + " y tiene " + (sessionStorage.getItem("edad")) + " años.");

}



//ARRAY DE RESPUESTAS DE LAMPARA
class AccionLampara{
    constructor (accion, lamparaMje){
        this.accion = accion;
        this.lamparaMje = lamparaMje;
    }
}

const respuestasLampara = [];
respuestasLampara.push(new AccionLampara("observar","es solo un objeto dorado y abandonado, no hay nada especial aquí."));
respuestasLampara.push(new AccionLampara("abrir","no hay nada adentro 🤷🏻‍♂️"));
respuestasLampara.push(new AccionLampara("frotar","has encontrado al adivino! deberas contestar las siguientes preguntas.."));
respuestasLampara.push(new AccionLampara("no tocar","todo ha sido una perdida de tiempo, vuelve cuando estes decidido."));

// Consultantes.
let consultantes = [];


class usuario{
    constructor (id,nombre,apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
let contadorUsuarios = 0;






    // PRIMERA PARTE //Validacion de edad del usuario para cambiar a la pantalla 2...
startTime();

$("#cuadroNube").hide();
$("#clockdate").hide();

$("#primeraPantalla").addClass('primerPantalla').hide()
                    .delay(500).fadeIn("1000");
                    
                    

let botonEdad = document.getElementById("botonEdad");


let fondo1 = document.getElementById("primeraPantalla");
let fondo2 = document.getElementById("segundaPantalla");


botonEdad.addEventListener("click",verificarEdad);


//Botón de la esquina para salir de la cueva
$("#botonSalir").click( () => escapar() )


    // SEGUNDA PARTE // Verifica lo que el usuario escribe ante la lampara. 

$("#tituloAdivina").fadeOut(1000).fadeIn("slow").fadeOut(1000).fadeIn("slow").fadeOut(1000).fadeIn("slow").fadeOut(1000).fadeIn("slow").fadeOut(1000).fadeIn("slow").fadeOut(1000).fadeIn("slow");

let botonPrimeraPregunta = document.getElementById("botonPrimeraPregunta");
let queHizo = document.getElementById("accionUsuario").value;

botonPrimeraPregunta.addEventListener("click",accionLampara);


    // TERCERA PARTE // Comieza a realizar algunas preguntas en cuadros, recopilando información.

$("#botonContinuar").addClass("botonContinuar");

$("#botonContinuar").click( () => newUser() );

$("#botonColor").click( () => guardarColor() )

function guardarColor() {
                            
    const selectorColor = document.getElementById("datoColor");
    let favColor = selectorColor.options[selectorColor.selectedIndex].text;

    sessionStorage.setItem("color", favColor)
}

$("#botonColor").click( () => elColorEs() );


//Declara variables que seran preguntas con datos bulleanos.

let calle = "";
let alcohol = "";
let deporte = "";
let mascotas ="";

//CALLE!
$("#botonCalleSi").click( () => precionoSi());
$("#botonCalleNo").click( () => precionoNo());

function precionoSi() {
    calle = true;
    $("#preguntaCalle").fadeOut(500).delay(1000);

    console.log("El usuario pasa mucho tiempo en la calle");
    $("#preguntaAlcohol").addClass("pantallaEmergente").hide().fadeIn(2000);
    }
function precionoNo() {
    calle = false;
    $("#preguntaCalle").fadeOut(500).delay(1000);

    console.log("El usuario no pasa mucho tiempo en la calle");
    $("#preguntaAlcohol").addClass("pantallaEmergente").hide().fadeIn(2000);
    }


//ALCOHOL!
$("#botonAlcoholSi").click( () => precionoSiAlcohol());
$("#botonAlcoholNo").click( () => precionoNoAlcohol());

function precionoSiAlcohol() {
    alcohol = true;
    $("#preguntaAlcohol").fadeOut(500).delay(1000);

    console.log("El usuario considera que es medio alcoholico, hahah");
    $("#preguntaDeporte").addClass("pantallaEmergente").hide().fadeIn(2000);
    }
function precionoNoAlcohol() {
    alcohol = false;
    $("#preguntaAlcohol").fadeOut(500).delay(1000);

    console.log("El usuario no bebidas alcoholicas");
    $("#preguntaDeporte").addClass("pantallaEmergente").hide().fadeIn(2000);
    }


//DEPORTE!
$("#botonDeporteSi").click( () => precionoSiDeporte());
$("#botonDeporteNo").click( () => precionoNoDeporte());

function precionoSiDeporte() {
    deporte = true;
    $("#preguntaDeporte").fadeOut(500).delay(1000);

    console.log("El usuario se concidera una persona activa fisicamente");
    $("#preguntaMascota").addClass("pantallaEmergente").hide().fadeIn(2000);
    }
function precionoNoDeporte() {
    deporte = false;
    $("#preguntaDeporte").fadeOut(500).delay(1000);

    console.log("El usuario no mueve el cuerpo 🤷🏻‍♂️");
    $("#preguntaMascota").addClass("pantallaEmergente").hide().fadeIn(2000);
    }


//MASCOTA!
$("#botonMascotaSi").click( () => precionoSiMascota());

function precionoSiMascota() {
    mascotas = true;
    $("#preguntaMascota").fadeOut(500).delay(1000);

    $("#preguntaMascota2").addClass("pantallaEmergente").hide().fadeIn(2000);
    console.log("El usuario convive con animales"); 
}

$("#botonTipoMascota").click( () => guardarMascota() )

function guardarMascota() {                          
    const selectorMascota = document.getElementById("datoMascota");
    let mascotaCompañerx = selectorMascota.options[selectorMascota.selectedIndex].text;
        //guardo mascota
        sessionStorage.setItem("mascota", mascotaCompañerx)

    console.log("Mascota: " + mascotaCompañerx);
}
    
$("#botonTipoMascota").click( () => accionUltimaPregunta());


$("#botonMascotaNo").click( () => precionoNoMascota());
function precionoNoMascota() {
    mascotas = false;
    $("#preguntaMascota").fadeOut(500).delay(1000);

    console.log("El usuario convive no con animales");

    let mascotaCompañerx = "no tiene";

    sessionStorage.setItem("mascota", mascotaCompañerx)

    console.log("Mascota: " + mascotaCompañerx);
    }

$("#botonMascotaNo").click( () => accionUltimaPregunta());

// Funcion final.

function accionUltimaPregunta() {
    $("#preguntaMascota2").fadeOut(500).delay(1000)

    devolucion();
}


// 5TA PARTE // Vamos con la devolución...

function devolucion() {
    cuadroNube('')
    $("#textoNube").html('Espero estes listo para lo que sigue.....');
    $("#cuadroNube").delay(2000).toggle({ effect: "scale", Number: "5" });

    $("#cuadroPsico").delay(4500).fadeIn(2000).delay(1500).fadeOut(2000);
    $("#botonSalir").fadeOut(3000);

    setTimeout(adivinacion, 8000);
}

function adivinacion() {

console.log("calle: " + calle);
console.log("deporte: " + deporte);
console.log("alcohol: " + alcohol);
    
if ((calle == false) && (deporte == true) && (alcohol == false) ) {
    cuadroNube('')
    $("#textoNube").html('Pareciera que llevas una vida con buenos habitos, aún sabiendo que hay una razones para no salir tanto de casa... estoy segurx que tu cuerpo agredeceria un poco de aire. Quien necesita suerte cuando haces las cosas bien, no? ✨');
    $("#cuadroNube").append('<button id="botonCerrarNube" class="botonContinuar" type="submit">Ok!</button>')
    $("#botonCerrarNube").click( () => segundaDevolucion());
}else 
if ((calle == true) && (deporte == false) && (alcohol == false)) {
    cuadroNube('')
    $("#textoNube").html('La calle es un lugar peligroso aunque no parezca, te recomiendo tomarte un momento para generar algún tipo de conección con tu cuerpo. Eso afilara tus reflejos y podras esquivar obstaculos de toda indole. 💪🏻');
    $("#cuadroNube").append('<button id="botonCerrarNube" class="botonContinuar" type="submit">Ok!</button>')
    $("#botonCerrarNube").click( () => segundaDevolucion());
} else
if ((calle == false) && (deporte == true) && (alcohol == true)) {
    cuadroNube('')
    $("#textoNube").html('Aún bajo la protección de tu hogar y haciendo ejercicio, tomar mucho alcohol no permite que un organismo vivo esté en su estado mas optimo. No puedo acegurar que estes a salvo... pero prestas atención vas a ver equilibrio con claridad. 👽');
    $("#cuadroNube").append('<button id="botonCerrarNube" class="botonContinuar" type="submit">Ok!</button>')
    $("#botonCerrarNube").click( () => segundaDevolucion());
}else 
if ((calle == false) && (deporte == false) && (alcohol == true) ) {
    cuadroNube('')
    $("#textoNube").html('Por donde comenzar... si no empiezas aunque sea a salir a caminar y tomar algo de aire, tu cuerpo va a ir en decadencia... Nadie quiere eso. Así que sal a tomar algo de aire y veras que tendras una revelacón en el camino.');
    $("#cuadroNube").append('<button id="botonCerrarNube" class="botonContinuar" type="submit">Ok!</button>')
    $("#botonCerrarNube").click( () => segundaDevolucion());
} else 
if ((calle == true) && (deporte == false) && (alcohol == true) ) {
    cuadroNube('')
    $("#textoNube").html('Desde ya te digo que no hacer ningun tipo de actividad fisica y consumir mucho acohol no es una muy buena combinación ☠. Escucha a tu cuerpo siempre, y hasle caso. Ah!! y recuerda tomar agua para estar hidratado. 🥂');
    $("#cuadroNube").append('<button id="botonCerrarNube" class="botonContinuar" type="submit">Ok!</button>')
    $("#botonCerrarNube").click( () => segundaDevolucion());
} else 
if ((calle == true) && (deporte == true) && (alcohol == true) ) {
    cuadroNube('')
    $("#textoNube").html('Llevas una vida activa y eso siempre es bueno. En la calle no andes muy alcoholizado, por las dudas. Ah!! y recuerda tomar agua para estar hidratado. 💋');
    $("#cuadroNube").append('<button id="botonCerrarNube" class="botonContinuar" type="submit">Ok!</button>')
    $("#botonCerrarNube").click( () => segundaDevolucion());
} else{
    cuadroNube('')
    $("#textoNube").html('Creo que algo te tiene ancladx, tu destino esta en tus manos. </br> La vida no es cuestión de suerte... Ve en busca de aventuras! no te arrepentiras. 😉');
    $("#cuadroNube").append('<button id="botonCerrarNube" class="botonContinuar" type="submit">Ok!</button>')
    $("#botonCerrarNube").click( () => segundaDevolucion());
}
}

function segundaDevolucion() {
    $("#cuadroNube").fadeOut(500);
    
    mascotaCompañerx = sessionStorage.getItem("mascota")
    
    setTimeout(devolucionMascota, 500);
        function devolucionMascota() {
        if ((mascotaCompañerx).toLowerCase() == "perro"){
        $("#cuadroNube").html('<button id="botonCerrarNube2" class="botonContinuar" type="submit">Ok!</button>');
        cuadroNube('');
        $("#cuadroNube").css('width','55em').css('height','35em');
        $("#textoNube").html('No hay que ser un genio para darse cuenta cómo ayuda la energia canina a cambiar un ambiente. Puede hacerte olvidar los problemas con un ladrido o un jugueteo. Símbolo de amor incondicional, los perros llegan a nosotros para activar el amor y ponerlo en movimiento. Enseñan el poder de vivir desde el corazón ademas de ser simbolos de lealtad, fidelidad, ley y justicia.').fadeIn(1000);
        $("#botonCerrarNube2").click( () => terceraDevolucion());
        } else
        if ((mascotaCompañerx).toLowerCase() == "gato"){
        $("#cuadroNube").html('<button id="botonCerrarNube2" class="botonContinuar" type="submit">Ok!</button>');
        cuadroNube('');
        $("#cuadroNube").css('width','55em').css('height','35em');
        $("#textoNube").html('A lo largo de la historia y en multitud de culturas, se ha asociado a los gatos con el misticismo.\nLos Celtas contemplaban al gato como el «Guardián del Submundo« y consideraban sus ojos como la puerta al mundo de las pequeñas cosas. Puedes aprevechar esta habilidad como guia para tener los ojos mas abiertos.\nTambien se cree que los mininos consumen la energía negativa del hogar y la transforman.\nAsi que tienes un purificador de energia viviendo contigo ✨.').fadeIn(1000);
        $("#botonCerrarNube2").click( () => terceraDevolucion());
        }else
        if ((mascotaCompañerx).toLowerCase() == "aves"){
        $("#cuadroNube").html('<button id="botonCerrarNube2" class="botonContinuar" type="submit">Ok!</button>');
        cuadroNube('');
        $("#cuadroNube").css('width','55em').css('height','35em');
        $("#textoNube").html('Su capacidad de volar ha llamado la atencion del humano desde tiempos inmemmorables.\nSe creia que podían observar el mundo desde lo más alto con la perspectiva de un “dios”. Por eso suelen estar relacionadas con mensajes de los dioses.\nSegun nuestro criterio el humano no deberia tener enjauladx a ningun animal. Aunque lxs creamos majestuosxs, si lxs tenemos en jaulas es que lxs tenemos pribadxs de su libertad que es jutamente lo que simbolizan las aves.\n Aun asi puedes aprender mucho de ellxs, son descendientes directos de los dinosaurios.').fadeIn(1000);
        $("#botonCerrarNube2").click( () => terceraDevolucion());
        }else
        if ((mascotaCompañerx).toLowerCase() == "roedores"){
        $("#cuadroNube").html('<button id="botonCerrarNube2" class="botonContinuar" type="submit">Ok!</button>');
        cuadroNube('');
        $("#cuadroNube").css('width','55em').css('height','35em');
        $("#textoNube").html('Los roedores suelen estar relacionados comunmente a algo desagradable. Pero la verdad es que simbolizan la inteligencia, la astucia, la agresión, la riqueza, el carisma y el orden.\nSon animales ultra sociables y tienen la capacidad de generar vilculos entre si y con vos. Asi que tratales con cariño y respeto, y te aceptaran como parte de su familia.').fadeIn(1000);
        $("#botonCerrarNube2").click( () => terceraDevolucion());
        }else
        if ((mascotaCompañerx).toLowerCase() == "peces"){
        $("#cuadroNube").html('<button id="botonCerrarNube2" class="botonContinuar" type="submit">Ok!</button>');
        cuadroNube('');
        $("#cuadroNube").css('width','55em').css('height','35em');
        $("#textoNube").html('Hay peces extremadamente hermosos pero que decirte.. hace mucho nos separamos evolutivamente, pensamos y vemos el mundo muy muy diferente.\nAun asi lo que podemos aprender de ellos es a fluir, que viven tranquilos aunque les tengan en una pecera o acuario 🤷🏻‍♂️.').fadeIn(1000);
        $("#botonCerrarNube2").click( () => terceraDevolucion());
        }else
        if ((mascotaCompañerx).toLowerCase() == "no tiene"){
        $("#cuadroNube").html('<button id="botonCerrarNube2" class="botonContinuar" type="submit">Ok!</button>');
        cuadroNube('');
        $("#cuadroNube").css('width','55em').css('height','35em');
        $("#textoNube").html('Puedes aprender muchisimo estando en contacto con un animalito, eso es seguro. Trata de acercarte a alguno y captar su escencia :).').fadeIn(1000);
        $("#botonCerrarNube2").click( () => terceraDevolucion());
        }
    }
}

function terceraDevolucion(){
    $("#cuadroNube").fadeOut(1000);
    $("#lampara2").fadeOut(1000);
    $("#cuadroMoneda").css('display','flex').hide();

    favColor = (sessionStorage.getItem("color"));
    recomendacionAmuleto()
    
    $("#cuadroMoneda").delay(7000).fadeIn(1000);
}

function recomendacionAmuleto() {

    favColor = (sessionStorage.getItem("color"));

    for( const piedra of amuletos){
        if( piedra.color == favColor.toLowerCase()){
        piedra.recomendar();
        }
    }
}
$("#probarContrasena").click( () => juegoMoneda());
   
function juegoMoneda() {
        let numeroIngresado = $("#numeroIngresado").val();
        let repeticiones = 0;
        let pasSi = [7,22,33,41,55,69,74,88,90,99];
        let detener = false;

        console.log(numeroIngresado);

        while((repeticiones <= numeroIngresado) && (detener == false)){

            if ((numeroIngresado == pasSi[0]) || (numeroIngresado == pasSi[1]) || (numeroIngresado == pasSi[2])||(numeroIngresado == pasSi[3])||(numeroIngresado == pasSi[4])||(numeroIngresado == pasSi[5])||(numeroIngresado == pasSi[6])||(numeroIngresado == pasSi[7])||(numeroIngresado == pasSi[8])||(numeroIngresado == pasSi[9])||(numeroIngresado == pasSi[10])){
                $("#probarContrasena").hide();
                $("#numeroIngresado").hide();
                $("#textoJuego").hide().html('Ganaste! Nos vemos pronto!').css('font-size','1.2em').fadeIn(500);
                
                $("#cuadroMoneda").delay(2000).fadeOut(1500);

                setTimeout(escapar, 3500);
                detener =true;
            } else 
            if (numeroIngresado >= 100){
                $("#textoJuego").hide().html('Heeee! Ya te dije que la clave es de 2 digitos, obviamente ' + numeroIngresado + '  no es la contraseña, puedes intentar las veces que quieras, no te iras de aquí si no lo descubres...').fadeIn(500);
                repeticiones++
            }
            else{
                $("#textoJuego").hide().html('Jaa! ' + numeroIngresado + '  no es la contraseña, puedes intentar las veces que quieras, no te iras de aquí si no lo descubres...').fadeIn(500);
                repeticiones++
            }
         }
       }

                      




class piedra{
    constructor (nombrePiedra,color,propiedad){
        this.nombrePiedra = nombrePiedra;
        this.color = color;
        this.propiedad = propiedad;
    }
    mostrar(){
        console.log("Un amuleto de " + this.nombrePiedra + " suele ser de color " + this.color + "\nTiene el poder de " + this.propiedad + " del usuario.");
        }

    recomendar(){
        $("#nuevoCuadroTexto").fadeIn(2000).html("Ahhh! Antes de que te vayas... ultimo tip: Consiguete un amuleto que tenga " + this.nombrePiedra + ", una piedra de color " + this.color + " que se recomienda para " + this.propiedad + ", te va venir bien en el futuro proximo.").delay(5000).fadeOut(1000)}

}

//Posibles amuletos para recomendar.
const amuletos = [];

amuletos.push(new piedra("Cuarzo rosa","rosa","reparar cuestiones sentimentales"));
amuletos.push(new piedra("Onix negro","negro","repeler las energias negativas ademas de atraer la suerte"));
amuletos.push(new piedra("Pirita","plateado","aliviar la ansiedad y la frustración"));
amuletos.push(new piedra("Ojo de tigre","atigrado","aclarar el pensamiento y las ideas"));
amuletos.push(new piedra("Esmeralda","verde","incrementar la memoria y elocuencia"));
amuletos.push(new piedra("Rubi","rojo","influir en el flujo de sangre del cuerpo y fortalecer el corazón"));
amuletos.push(new piedra("Fluorita","purpura","causar trastornos óseos severos en el cuerpo"));

console.log("Hay " + amuletos.length + " amuletos de piedras cargados.");
















// AJAX

const URLGET = "http://hp-api.herokuapp.com/api/characters";

$("#botonContinuar").click(() => {
    $.get(URLGET, function (respuesta, estado) {
        
    
   if(estado === "success"){
    let misDatos = respuesta; 
    
    
    for (const dato of misDatos) {
        for( const usuario of consultantes){
        const reName = (usuario.nombre + " " + usuario.apellido).toLowerCase();
            if(reName == (dato.name).toLowerCase()){
                cuadroNube('')
                $("#cuadroNube").html('<p id="textoNube">Ahhhh! te llamas igual que el personaje de la pelicula! <3 jejej...</p>').fadeOut(1000);
                
                console.log("Ah el usuatio se llama igual que un personaje de Harry Potter");
            }
        }     
    }

    }});});

});
