function placementTest(){



let nombre = prompt ("Ingresa tu nombre");

alert (`Bienvenue, ${nombre}`);

alert ("Con este test podrás conocer tu nivel de francés.\n Te diremos si tienes un nivel básico, intermedio o avanzado\n On y va ! 😁");


function validacionRespuesta(){
    while(respuesta){
    alert("¡Haz acertado la respuesta correcta! 😎");
    break;
}
while(respuesta == false) {
    alert("Oooops! tu respuesta es incorrecta 😢");
    break;
}
}

let respuesta;

let pregunta1 = parseInt(prompt("¿Cuál es la expresión correcta para decir 'Yo  me llamo Pierre'\n 1.- Je m'appele Pierre\n 2.- Je s'appelle Pierre\n 3.- Vous m'appelle Pierre\n\n Ingresa el número correspondiente"));

if(pregunta1 == 1) {
    respuesta = true;
} else {
    respuesta = false;
}
validacionRespuesta();

let pregunta2 = parseInt(prompt("¿Que significa 'Je ne parle pas francais'?\n 1.- Yo hablo francés\n 2.- Yo no hablo francés\n 3.- Yo amo el francés\n\n Ingresa el número correspondiente"));

if(pregunta2 == 2) {
    respuesta = true;
} else {
    respuesta = false;
}

validacionRespuesta();

let pregunta3 = parseInt(prompt("¿Como pedirías una cerveza en un restaurant en francés?\n 1.- Je voudrais une bière s'il vous plait\n 2.- Je voudrais une berre si'll vou plait\n 3.- Je attends une bierre si'll vou plait\n\n Ingresa el número correspondiente"));

if(pregunta3 == 1) {
    respuesta = true;
} else {
    respuesta = false;
}

validacionRespuesta();

let pregunta4 = parseInt(prompt("¿Como dirias 'Busco un apartamento de dos piezas en alquiler'?\n 1.- Je suis à la recherche d'un appartement de deux salles à louer.\n 2.- Je suis à la recherche d'un maison de deux chambres à louer.\n 3.- Je suis à la recherche d'un appartement de deux chambres à louer.\n\n Ingresa el número correspondiente"));

if(pregunta4 == 3) {
    respuesta = true;
} else {
    respuesta = false;
}

validacionRespuesta();

document.write("RESULTADOS:<br><br><br> 1 Respuesta correcta: Tienes un nivel básico; podrías empezar tomando un curso de introductorio <br><br> 2 Respuestas correctas: Tienes un nivel basico/intemedio; te recomendamos tomar un curso de nivel B1<br><br> 3 Respuestas correctas: Tienes un nivel intermedio/avanzado; puedes desenvolverte bien en conversaciones básicas de la vida cotidiana. Te recomendamos seguir avanzando con un curso C1 y C2<br><br> 4 Repuestas correctas: Tienes un nivel avanzado; te sientes muy cómod@ con el idioma y tienes bastante dominio del vocabulario; te recomendamos tomar cursos especializados según tu profesión.<br><br><br><br> Gracias por hacer el test. <br><br> À la prochaine !<br><br><br><br> Recarga la página para volver al inicio...")


}



