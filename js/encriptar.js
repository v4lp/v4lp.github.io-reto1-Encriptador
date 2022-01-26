 function Encriptar() {
    limpiar();
    Mandar( Enviar(Analizar(obtener()),"Encriptada"));
     clear();
     
 }

 function obtener() {

     var texto = document.getElementById("text").value;
     return texto
     
 }

 function clear() {

    document.getElementById("text").value = " ";

 }


 function limpiar() {

     document.getElementById("textEncriptation").innerHTML = " ";
    document.getElementById("textEncriptation").innerHTML = " ";
    document.getElementById('respuesta').innerHTML=" ";
    document.getElementById("TXArea").value = " ";
    document.getElementById("msg").value = " ";

 }



 function Analizar(texto) {
    var textoN='';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        
        if(letra=="a"){
            textoN+="ai";
                    }else{
                    if(letra=="e"){
                        textoN+="enter";
                    }else {
                        if(letra=="i"){
                            textoN+="imes";
                                    }else{
                                        if(letra=="o"){
                                            textoN+="ober";
                                                    }else{
                                                        if(letra=="u"){
                                                            textoN+="ufat";
                                                                    }else{
                                                                        if(letra=="A" || letra=="ó" ||letra=="B" ||letra=="C" ||letra=="D" ||letra=="E" ||letra=="F" ||letra=="G" ||letra=="H" ||letra=="I" ||letra=="J" ||letra=="K" ||letra=="L" ||letra=="M" ||letra=="N" ||letra=="Ñ" ||letra=="O" ||letra=="P" ||letra=="Q" ||letra=="R" ||letra=="S" ||letra=="ó" ||letra=="T" ||letra=="U" ||letra=="V" ||letra=="X" ||letra=="Y" ||letra=="Z" ||letra=="á" ||letra=="é" ||letra=="ú" ||letra=="í" ||letra=="Á" ||letra=="É" ||letra=="Í" ||letra=="Ú" ||letra=="1" ||letra=="2" ||letra=="3" ||letra=="4" ||letra=="5" ||letra=="6" ||letra=="7" ||letra=="8" ||letra=="9" ||letra=="0" ){
                                                                            textoN="ERROR : no se puede usar el siguente caracter "+letra;
                                                                            return   textoN
                                                                            break
                                                                                  }else{
                                                                                    textoN+=letra;
                                                                                  }
                                                                        
                                                                        }
                                                        }
                                    }
                    }
                } 
        
                    
    }  
    return textoN
     }
    
 
 
 function Enviar(txt,encriptada) {

     var text=document.createTextNode('palabra '+encriptada+' : ')
     var res=document.createTextNode( txt)
     var p =document.getElementById('textEncriptation').appendChild(text);
     var p2 =document.getElementById('respuesta').appendChild(res);
    return  txt

 }