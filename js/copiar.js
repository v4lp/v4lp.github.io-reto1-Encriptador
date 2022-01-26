function Mandar(txt){
    document.getElementById("TXArea").value = txt;
	document.getElementById("msg").value = " ";
}

function copiar() {

	var copiartexto = document.getElementById("TXArea").value;
	var copiar = document.getElementById("TXArea");


	if (copiartexto.length>0) {

		console.log(copiartexto.value+"if")
		copiar.select();
		navigator.clipboard.writeText(copiar.value);
		document.getElementById("msg").innerHTML = " ";
		MostarmsgCopiado('Palabla Copiada');

	}else{

		var txt="ERROR : Aun no se Encriptado o Desencriptado ninguna Palabla"
		document.getElementById("msg").innerHTML = " ";
		MostarmsgCopiado(txt);
		console.log(copiartexto.value+"else")
	
	}

  
}


function MostarmsgCopiado(txt) {
	var text=document.createTextNode(" "+txt)
	var mostrar =document.getElementById('msg').appendChild(text);
	
}
