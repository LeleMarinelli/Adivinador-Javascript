let edad = "";
let nombre = "";
let apellido = "";
let color = "";

const consultante = {
                nombre:"",
                apellido:"",
                edad: edad + " años",
        };

function saludoFinal() {
                        console.log("Genial, parece que " + consultante.nombre + " se ha quedado hasta el final.");
                        alert("Anyway, gracias Sr/Sra " + consultante.apellido + " por leerme, hasta luego.");
        };

function pedirDatos() {
        consultante.nombre = prompt("Ingresa tu nombre: ");
        consultante.apellido = prompt("Ingresa tu apellido: ");
        consultante.color = prompt("Cuel es tu color favorito: ");
         console.log("Hola adivino, estas en contacto con: " + consultante.nombre + " " + consultante.apellido + " que tiene " + consultante.edad +".");
        };

function usuario(nombre, apellido, edad){
                        this.nombre = consultante.nombre;
                        this.apellido = consultante.apellido;
                        this.edad = consultante.edad;
                        
                        this.chau = function(){ console.log("Hola soy " + this.nombre + " y queria agradecer tu tiempo, chau."); };
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
        alert("Te recomendamos conseguirte un amuleto que tenga " + this.nombrePiedra + ",una piedra de color " + this.color + " que se recomienda para " + this.propiedad + ", te va venir bien en el futuro proximo.")
        }
}

//Se definen posibles amuletos para recomendar.
const amuletos = [];

amuletos.push(new piedra("Cuarzo rosa","rosa","reparar cuestiones sentimentales"));
amuletos.push(new piedra("Onix negro","negro","repeler las energias negativas ademas de atraer la suerte"));
amuletos.push(new piedra("Pirita","plateado","aliviar la ansiedad y la frustración"));
amuletos.push(new piedra("Ojo de tigre","atigrado","aclarar el pensamiento y las ideas"));
amuletos.push(new piedra("Esmeralda","verde","incrementar la memoria y elocuencia"));
amuletos.push(new piedra("Rubi","rojo","influir en el flujo de sangre del cuerpo y fortalecer el corazón"));
amuletos.push(new piedra("Fluorita","purpura","causar trastornos óseos severos en el cuerpo"));

console.log("Hay " + amuletos.length + " amuletos de piedras cargados.");

for( const piedra of amuletos){
    piedra.mostrar();
}




const buscar = amuletos.find( piedra => piedra.nombrePiedra == "Rubi");

console.log(buscar);




// Empieza una sesión que permite al usuario colsutar por 3 personas.

for (let consultas = 1; consultas <= 3; consultas++) {

                alert("Bienvenido al adivinador! ingresa tus datos para una lectura..");
                edad = parseInt(prompt("Antes de comenzar ingresa tu edad: "));


//Primera condicion para avanzar, si la persona es o no menor de edad.

                if (edad < 15) {
                        alert("Lamentablemente creemos que no deberias estar consultando tu futuro todavía, ve y disfruta sin preocupaciones.");
                        break;
                }
                else if((edad >= 15) && (edad <= 18)){
                        alert("Como aún eres menor de edad recomendamos que entres bajo supervición de un adulto o aceptes las concecuencias.."); 
                }
                else if(edad < 18){
                        alert("Genial, vamos a comenzas..");
                        };
              
        
//Cuando confirmamos que el usuario es mayor de edad avanza por aca.

                if((edad >= 15)&&(edad <= 111) ){
                        alert("Continuaremos pidiendote algunos datos..");
                        console.log("Consulta N° " + consultas + ".");
                        
                        pedirDatos();
                        consultante.edad = edad;

                        /*


                        // Aca estaba probando poder recomendarle algo del array de objetos pero no me salio 

                        for( const piedra of amuletos){

                                const buscar = amuletos.find( piedra => piedra.nombrePiedra == "Onix negro");
                                piedra.recomendar();
                        }
                        */


                        //Se le pediran al uruario algunos datos para recopilar datos especificos.
                        
                        let premisa = prompt("Has hecho algo peligroso ultimamente? contesta con si o no: ")
                        console.log("Esta persona " + premisa + " hizo algo peligroso en los ultimos días.");
                        let accidente = parseInt(prompt("Cuantas veces sentis que te has arriezgado en la vida: "));
                        
                        let calle = prompt("Pasas mucho tiempo en la calle? ( SI / NO ) :");
                        let alcohol = prompt("Dirias que tomas muchas bebidas alcoholicas? ( SI / NO ) :");
                        let deporte = prompt("Practicas algun tipo de deporte o realizas algun tipo de actividad fisica? ( SI / NO ) :");
                        let mascotas = prompt("Convivis con alguna mascota? ( SI / NO ) :");

                                 //Dentro de la pregunta de mascota se inicia una secuencia para saber que tipo.
                                if (mascotas == "si") { mascotas = parseInt(prompt("Con que especie animal convives? \n 1)Perro.\n 2)Gato.\n 3)Aves.\n 4)Roedores.\n 5)Peces.\n 6)Otros."));                                        
                                                                if (mascotas == 6){
                                                                alert("Wow! Debes estas conviviendo con algun animal sumamente exótico..");
                                                                exotic = prompt("Interesante, te molestaria contarnos de que animal se trata?\n( Ingresa nombre del animal en singular por favor )");
                                                                } 
                                }else 
                                {
                                        mascotas = 0;
                                        console.log(consultante.nombre + " no convive con animales.");     
                                        consultante.mascota = "No tiene."                                           
                                }

                        

        alert("Bueno " + consultante.nombre +", vamos con la lectura y algo de informacion util para tu futuro.\nTomalo o dejalo...")

        alert("Primero puedo sentir que como " + premisa + " has hecho algo peligroso ultimamente, y te has arriesgado " + accidente + " veces en tus " + consultante.edad + " años de vida, lo mas probable es que todos tus proyectos ocurran como vos quieras.");

        // Proceso de adivinación

                        if ((calle !="" && alcohol !="" && deporte != "") && (calle == "no") && (deporte == "si") && (alcohol == "no") ) {
                                alert("Pareciera que llevas una vida con muy buenos habitos, si sigues así no veo el por que de tu consulta. Supongo que estas a salvo por ahora. ✨");
                        } else 
                        if ((calle !="" && alcohol !="" && deporte != "") && (calle == "si") && (deporte == "no") && (alcohol == "no")) {
                                alert("La calle es un lugar peligroso aunque no parezca, te recomiendo hacer algun tipo de conección con tu cuerpo para afilar tus reflejos y esquivar los obstaculos. 💪🏻");
                        } else
                        if ((calle !="" && alcohol !="" && deporte != "") && (calle == "no") && (deporte == "si") && (alcohol == "si")) {
                                alert("Si no salis mucho a la calle y haces ejercicio, pero tomas mucho alcohol.. se podria decir que estas a salvo? presta atencion por las dudas. 👽");
                        } else 
                        if ((calle !="" && alcohol !="" && deporte != "") && (calle == "si") && (deporte == "no") && (alcohol == "si") ) {
                                alert("Debo comunicarte que no hacer ningun tipo de actividad fisica y consumir mucho acohol no es una muy buena combinación. A tener en cuenta. 🥂");
                        } else 
                        if ((calle !="" && alcohol !="" && deporte != "") && (calle == "si") && (deporte == "si") && (alcohol == "si") ) {
                                alert("Si pasas mucho tiempo en la calle te recomiendo que no andes alcoholizado. Por las dudas. 💋");
                        } else{
                                alert("Lo siento, perece que estas bastante en peligro. Tu destino esta en manos de la suerte. ☠");
                        }


                        switch (mascotas) {
                                case 1:
                                        console.log(consultante.nombre + " convive con uno o varios perros");     
                                        consultante.mascota = "Perros";
                                        alert("No hay que ser un genio para darse cuenta cómo ayuda la energia canina a cambiar la energía de un ambiente. Puede hacerte olvidar los problemas con un ladrido y un jugueteo.\n Símbolo de amor incondicional, los perros llegan a nosotros para activar el amor y ponerlo en movimiento. Enseñan el poder de vivir desde el corazón ademas de ser simbolos de lealtad, fidelidad, ley y justicia.");
                                        break;
                                case 2:
                                        console.log(consultante.nombre + " convive con uno o varios gatos");
                                        consultante.mascota = "Gatos";
                                        alert("A lo largo de la historia y en multitud de culturas, se ha asociado a los gatos con el misticismo.\nLos Celtas contemplaban al gato como el «Guardián del Submundo« y consideraban sus ojos como la puerta al mundo de las pequeñas cosas. Puedes aprevechar esta habilidad como guia para tener los ojos mas abiertos.\nTambien se cree que los mininos consumen la energía negativa del hogar y la transforman.\nAsi que tienes un purificador de energia viviendo contigo ✨.");
                                        break;
                                case 3:
                                        console.log(consultante.nombre + " convive con uno o varias aves");
                                        consultante.mascota = "Aves"; 
                                        alert("Su capacidad de volar ha llamado la atencion del humano desde tiempos inmemmorables.\nSe creia que podían observar el mundo desde lo más alto con la perspectiva de un “dios”. Por eso suelen estar relacionadas con mensajes de los dioses.\nSegun nuestro criterio el humano no deberia tener enjauladx a ningun animal. Aunque lxs creamos majestuosxs, si lxs tenemos en jaulas es que lxs tenemos pribadxs de su libertad que es jutamente lo que simbolizan las aves.\n Aun asi puedes aprender mucho de ellxs, son descendientes directos de los dinosaurios.");
                                        break;
                                case 4:
                                        console.log(consultante.nombre + " convive con uno o varios roedores") ;
                                        consultante.mascota = "Roedores"; 
                                        alert("Los roedores suelen estar relacionados comunmente a algo desagradable. Pero la verdad es que simbolizan la inteligencia, la astucia, la agresión, la riqueza, el carisma y el orden.\nSon animales ultra sociables y tienen la capacidad de generar vilculos entre si y con vos. Asi que tratales con cariño y respeto, y te aceptaran como parte de su familia.");
                                        break;
                                case 5:
                                        console.log(consultante.nombre + " convive con uno o varios peces");
                                        consultante.mascota = "Peces"; 
                                        alert("Hay peces extremadamente hermosos pero que decirte.. hace mucho nos separamos evolutivamente, pensamos y vemos el mundo muy muy diferente.\nAun asi lo que podemos aprender de ellos es a fluir, que viven tranquilos aunque les tengan en una pecera o acuario 🤷🏻‍♂️.");
                                        break;
                                case 6:
                                        console.log("Parece ser que " + consultante.nombre + " tiene un " + exotic +". Considera si hay que avisar a las autoridades.");
                                        alert("Que bien que tengas un " + exotic + "! 👍🏻");
                                        consultante.mascota = exotic; 
                                        break;
                                default:
                                        alert("Puedes aprender muchisimo estando en contacto con un animalito, solo eso dire.");
                        }

        //La consulta termino y se procesan algunos datos.                

        console.log("Ya se le ha hecho una prediccion a " + consultante.nombre + " y es confidencial. Gracias por ser el medium de esta lectura");

        console.log(consultante);

        saludoFinal()
                     
        const persona1 = new usuario(consultante.nombre, consultante.apellido, consultante.edad);

        persona1.chau();


        //Se da por terminada la consulta y se avisa al interpreta cuantas mas quedan en esta sesión.
                console.log("Damos por finalizada la consulta N° " + consultas + ".");
                console.log("Aun quedan " + (3 - consultas) + " consultas posibles,");

                        }else if (edad >= 111) {
                                alert("Si lo que dice es correcto deberiamos estar hablando a través de un medium.\n Lo siento, usted ha muerto y no se dio cuenta.");


                                saludoFinal()

                                console.log("La persona dijo tener " + consultante.edad + " años por lo cual no debe ser una persona viva 🤷🏻‍♂️.");
                                break;                                
                        }
                        


              
        //Operacion matematica en joda despues de la consulta.
                const multi = (numero1,numero2) => numero1 * numero2;
                        
                alert("Muchas gracias por tu consulta... si te interesa también puedo realizar calculos matematicos..");
                alert("Como multiplicar! quieres probar? ");

                        let numeroA =  parseInt(prompt("Dime un numero "));
                        let numeroB = parseInt(prompt("ahora dime otro"));

                console.log("Parece ser que " + consultante.nombre + " esta interesadx en la operacion matematica");
                console.log("Ha preguntado cuanto es " + (numeroA) + " x " + (numeroB));

                        let cuenta = multi(numeroA, numeroB)

                console.log("Que el resultado es " + parseInt(cuenta) + ".");
                alert("A ver " + parseInt(numeroA) + " x " + parseInt(numeroB) + " el resultado deberia ser... " + parseInt(cuenta) + ". No se como comprobarlo pero supongo tendras que confiar.");
        //Fin de la joda




//Saludo final y vuelve a empezar hasta que llegue a las 3 consultas en la sesión.          
                        

                if (consultas === 4) {
                        console.log("Se han acabado las consultas de esta sesion.");
                        break;
                }

        }

       

        
       
        
    
       
                    

