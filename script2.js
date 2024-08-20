let textoUsuario= document.getElementById("texto__usuario");
let textoEncriptado= document.getElementById("texto__encriptado");
let boton=document.getElementById("boton__copiar");
boton.style.visibility='hidden';
let boton2=document.getElementById("boton__reiniciar");
boton2.style.visibility='hidden';


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function visible(){
    let boton=document.getElementById("boton__copiar");
            boton.style.visibility='visible';
    let boton2=document.getElementById("boton__reiniciar");
    boton2.style.visibility='visible';
}

function limpiarCaja() {
    let textoVacio = textoUsuario.value;
    if(textoVacio!=''){
        let quitarFondo= document.getElementById('texto__encriptado');
        quitarFondo.style.backgroundImage= 'none';
        let p=document.getElementById("p_container1");
        let p2=document.getElementById("p_container2");
        p.style.visibility='hidden';
        p2.style.visibility='hidden';
    }   
}

function cajaVacia(){
    let textoVacio = textoUsuario.value;
    if(textoVacio== ''){
        alert('No has ingresado ningun texto, porfavor ingresa el texto que deceas encriptar o desencriptar');
    }
}

function evaluarCaja(textoencriptado){
    cajaVacia();
    const specialChars = "!@#$%^&*()_+[]{}|;':\",./<>?`~\\-=áéíóú";
    for (let i = 0; i < textoencriptado.length; i++) {
        if (specialChars.includes(textoencriptado[i])) {            
            alert('No debe contener caracteres especiales solo numeros');
            document.getElementById('texto__encriptado').value='';
            return textoencriptado;
            break  
        }else{
            limpiarCaja();
            visible();
        }
    }
    return textoencriptado;
}

function copiarTexto() {
    // Obtén el valor del input
    const texto = document.getElementById('texto__encriptado').value;
    
    // Copia el texto al portapapeles
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
        limpiarCaja();
    }).catch(err => {
        alert('Error al copiar el texto ');
    });
}

function btncopiar(){
    copiarTexto();
}


function btnreiniciar(){
    var mediaqueryList = window.matchMedia("(max-width: 48rem)");
    if(mediaqueryList.matches) {
            document.getElementById('texto__usuario').value='';
            document.getElementById('texto__encriptado').value='';
            let boton=document.getElementById("boton__copiar");
            boton.style.visibility='hidden';
            let p=document.getElementById("p_container1");
            let p2=document.getElementById("p_container2");
            p.style.visibility='visible';
            p2.style.visibility='visible';
        
        
      }else{
            document.getElementById('texto__usuario').value='';
            document.getElementById('texto__encriptado').value='';
            let quitarFondo= document.getElementById('texto__encriptado');
            quitarFondo.style.backgroundImage="url('/assets/imagen.png')";
            let boton=document.getElementById("boton__copiar");
            boton.style.visibility='hidden';
            let p=document.getElementById("p_container1");
            let p2=document.getElementById("p_container2");
            p.style.visibility='visible';
            p2.style.visibility='visible';
            
      }
}
//Boton para encriptar una palabra
function btnencriptar(){
    //se manda a llamar a la funcion textoEncriptado
    textoEncriptador();
}
function btnDesencriptar(){
    //se manda a llamar a la funcion textoEncriptado
    
    textoDesencriptador();

}
//funcion para leer el texto ingresado y colocarlo en el textoEncriptador
function textoEncriptador(){
    
    const textoencriptado=textareaEncriptada(textoUsuario.value);
    textoEncriptado.value= textoencriptado;
    
    evaluarCaja(textoUsuario.value);

    
    
}
//funcion para leer el texto encriptado o desencriptado y colocarlo en el textoEncriptar
function textoDesencriptador(){
    const textoencriptado=desencriptarTexto(textoUsuario.value);
    textoEncriptado.value= textoencriptado;
    
    evaluarCaja(textoUsuario.value);
}

function textareaEncriptada(texto){
    
    texto=texto.toLowerCase();
    
    let array = [];
    //itera dentro de mi texto ingresado para leer los datos 
    for( let i =0; i < texto.length; i++){

    //cambia la letra 'a' por las siguientes cadenas de caracteres
        if (texto[i]== 'a'){
         array.push('ai');
         
        }
        if (texto[i]== 'e'){
         array.push('enter');
        }
        if (texto[i]== 'i'){
         array.push('imes');
        }
        if (texto[i]== 'o'){
         array.push('ober');
        }
        if (texto[i]== 'u'){
         array.push('ufat');
        }
        //empuja el valor de la cadena ingresada y lo almacena en array.
        array.push(texto[i]);
        //elimina el ultimo elento de mi array si la condicion se cumple 
        if(texto[i]== 'a'){
         array.pop();
        }
        if(texto[i]== 'e'){
         array.pop();
        }
        if(texto[i]== 'i'){
         array.pop();
        }
        if(texto[i]== 'o'){
         array.pop();
        }
        if(texto[i]== 'u'){
         array.pop();
        }  
        
     }
     texto = array.join('');
     return texto;  
}
//funcion para desencriptar un texto ingresado o copiado 
function desencriptarTexto(textoCifrado){
    textoCifrado=textoCifrado.toLowerCase();
    
    textoCifrado = textoCifrado.replace(/enter/gi, "e")
                                .replace(/imes/gi, "i")
                                .replace(/ai/gi, "a")
                                .replace(/ober/gi, "o")
                                .replace(/ufat/gi, "u");
     return textoCifrado;
}



