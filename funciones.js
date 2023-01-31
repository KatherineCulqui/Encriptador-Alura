var alarm = document.getElementById("alarm");
var textoArea1=document.getElementById("mensaje");
var textoArea2=document.querySelector("#verMensajeEnPantalla");
var btnEncriptado=document.querySelector("#btnEncriptar");
var btnDesencriptado=document.querySelector("#btnDesencriptar");
var btnCopiado = document.getElementById("btnCopiar");
var btnDestruido = document.getElementById("btnDestruir");

// Sonido en botones

const audio = new Audio("audios/boton-bomba-juego-encriptador-Alura.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});


// Activando botones

function validarE() {

	if(/^[a-z,0-9,ñ,¿,?,¡,! ]*$/.test(textoArea1.value)){

		encriptar();
	
	} else {

		modificaAlerta("1");

	}
}

function validarD() {

	if(/^[a-z,0-9,ñ,¿,?,¡,! ]*$/.test(textoArea1.value)){

		desencriptar();
	
	} else {

		modificaAlerta("1");

	}
}


// Encriptando o desencriptando

var vocales = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};
var vocalesEncriptadas = {"ai":"a","enter":"e","imes":"i","ober":"o","ufat":"u"};

function encriptar() {

	var textoDigitado= textoArea1.value;
	var mensajeEncriptado = textoDigitado.replace(/[aeiou]/g, i => vocales[i]);

	document.getElementById("textoTemporal").style.display="none";
	document.getElementById("btnCopiar").style.display="block";

	textoArea2.value=mensajeEncriptado;

}

function desencriptar() {

	var textoDigitado2= textoArea1.value;

	var mensajeDesencriptado = textoDigitado2.replace(/ai|enter|imes|ober|ufat/g, i => vocalesEncriptadas[i]);

	
	document.getElementById("textoTemporal").style.display="none";
	document.getElementById("btnCopiar").style.display="block";

	textoArea2.value=mensajeDesencriptado;

}

// Copiar elementos

function copiarAlPortapapeles(){
    var contenido = textoArea2.value;

    navigator.clipboard.writeText(contenido)
    .then(() => {
        textoArea1.value=""
        textoArea2.value=""
    })
}


// Borrando mensajes

function destruirMensaje() {
	
	textoArea1.value = "";

}


function reproducir(sonido){

    document.getElementById(sonido).play();
    alarma.volume = 0.1; //volume level - (changed from 0.25 to 0.5)

}

// Alerta ERROR

var alertaMensaje="";

function modificaAlerta(tipo){

switch(parseInt(tipo)){

	case 1: 

		alertaMensaje = "¡Código inválido!";
		reproducir("alarma");

	break;
	case 2: alertaMensaje = "¡No hay texto ingresado!";
		reproducir("alarma");
	break;

}

document.querySelector("#alertas").style.display="flex";

document.querySelector('.tipoAlerta').innerText= alertaMensaje;

}


document.querySelector(".cerrar").addEventListener("click",()=>{
    document.querySelector("#alertas").style.display="none";

    alarma.pause();

});



