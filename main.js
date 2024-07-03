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

let textArea = document.querySelector("#textarea");

let textoCifrado = document.querySelector(".texto-cifrado");
let textInfo = document.querySelector(".text-info");
let btnCopy = document.querySelector(".btn-copy");

let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencriptar = document.querySelector(".btn-desencriptar");





//FUNCION ENCRIPTAR
btnEncriptar.addEventListener("click", ()=>{

    texto = textArea.value.toLowerCase();

    handleTextDisplay(texto);

    if (texto.trim() !== "") {
        let textoEncriptado = texto.replace(/[aeiou]/g, letra => encryptKey[letra]);
        textoCifrado.innerHTML = textoEncriptado;
    }

});


//FUNCION DESENCRIPTAR
btnDesencriptar.addEventListener("click", ()=>{

    texto = textArea.value.toLowerCase();
    let textoDesencriptado = texto;

    for (const [key, value] of Object.entries(desencryptKey)) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(key, 'g'), value);
    }

    handleTextDisplay(texto);

    if (texto.trim() !== "") {
        textoCifrado.innerHTML = textoDesencriptado;
    }

})


//FUNCION DE DISPLAY

function setDisplayElement(element,value){
    element.style.display = value;
}

//FUNCION COPIAR
btnCopy.addEventListener("click", async ()=>{
    textCopy=textoCifrado.innerHTML;
    try {
        await navigator.clipboard.writeText(textCopy.trim());
        textArea.value="";
       alert('Contenido copiado al portapapeles');
      } catch (err) {
        alert('Error al copiar: ', err);
      }

})


//FUNCION VERIFICADORA DE TEXTAREA
function handleTextDisplay(text) {
    if (text.trim() === "") {
        textArea.placeholder = "Ingresa el texto aqui";
        setDisplayElement(textInfo, "block");
        setDisplayElement(textoCifrado, "none");
        setDisplayElement(btnCopy, "none");
    } else {
        setDisplayElement(textInfo, "none");
        setDisplayElement(textoCifrado, "block");
        setDisplayElement(btnCopy, "block");
    }
}