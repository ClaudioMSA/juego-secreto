let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = prompt('¿Cual es el numero maximo a Adivinar?');



function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto===numeroDeUsuario) {
        asignarTextoElemento('p',`Acertaste al Numero en ${intentos} intento${intentos === 1 ? '' : 's' }!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //No acerto
        if(numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero es Menor');
        } else {
            asignarTextoElemento('p','El numero es Mayor');
        }
        intentos++;
        limpiarCajaInput();
    };
    return;
}

function limpiarCajaInput() {
    document.querySelector('#valorUsuario').value='';
    }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros de la lista?
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','No existen mas numeros para Adivinar!!');
    } else {
        //Revisa si esta el numero en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales () {
    asignarTextoElemento ('h1','¿Cual es el Numero?');
    asignarTextoElemento('p',`Adivina el numero que esta entre 01 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCajaInput();
    //indicar mensaje inicio
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
