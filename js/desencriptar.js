
function Desencriptar() {
    limpiar()
    Mandar( Enviar(Analizar2(obtener()),"Desencriptada"));
    
    clear()
}

function  Analizar2(texto) {
    
    var textoN=texto.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
        
 
   return textoN
    
}


