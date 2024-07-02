const encryptKey = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
}

const desencryptKey={
    "ai":"a",
    "enter":"e",
    "imes":"i",
    "ober":"o",
    "ufat":"u"
}

let textoCifrado = document.querySelector(".texto-cifrado");
let textInfo = document.querySelector(".text-info");
let btnCopy = document.querySelector(".btn-copy");


function getTextArea(){
    let textarea = document.getElementById("textarea");
    texto = textarea.value;
   
    return texto.toLowerCase();
}


function encryptText() {

    let texto = getTextArea();

    let textoEncriptado = texto.replace(/[aeiou]/g, letra => encryptKey[letra]);
    
    if(texto.trim() === ""){

        document.getElementById("textarea").placeholder = "Ingresa el texto aqui";
        valorFinal(textInfo, "block");
        valorFinal(textoCifrado, "none");
        valorFinal(btnCopy, "none");
    }else{
        valorFinal(textInfo, "none");
        valorFinal(textoCifrado, "block");
        valorFinal(btnCopy, "block");
        textoCifrado.innerHTML = textoEncriptado
    }



}

function decryptText() {
    let texto = getTextArea();
    let textoDesencriptado = texto
   
    for (const [key, value] of Object.entries(desencryptKey)) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(key, 'g'), value);
    }

    if(texto.trim() == ""){
        valorFinal(textInfo, "block");
        valorFinal(textoCifrado, "none");
        valorFinal(btnCopy, "none");
    }else{
        valorFinal(textInfo, "none");
        valorFinal(textoCifrado, "block");
        valorFinal(btnCopy, "block");
        textoCifrado.innerHTML = textoDesencriptado;
    }

}



function valorFinal(elemento, valor){
    elemento.style.display = valor;
}


