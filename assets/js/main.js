//el s+pan tiene le función para agregar input y botón
var span = document.getElementById("add-list");
span.addEventListener("click", addInput);

function addInput(){
	//contenedor
	var contLista = document.getElementById("contenedor-lista");
	
	//input
	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("id", "inp");
	input.setAttribute("placeholder", "Añadir una lista");
	contLista.appendChild(input);

	//button
	var boton = document.createElement("button");
	var txtBoton = document.createTextNode("Guardar");
	boton.setAttribute("type", "submit");
	boton.setAttribute("id", "btn");
	contLista.appendChild(boton);
	boton.appendChild(txtBoton);

	//el botón tiene la función para añadir una nueva lista
	var botonGuardar = document.getElementById("btn");
	botonGuardar.addEventListener("click", guardarLista);

	function guardarLista(){
		//añadir lista
		var nombreLista = document.getElementById("inp").value;
		document.getElementById("inp").value = "";

		//contenedor
		var contTarjeta = document.getElementById("contenedor");

		//div contenedor
		var nuevaLista = document.createElement("div");
		nuevaLista.setAttribute("class", "lista"); //nuevaLista.classList.add("text");
		contTarjeta.appendChild(nuevaLista);

		//span para el nombre de la lista	
		var nuevoSpan = document.createElement("span");
		var txtNuevoSpan = document.createTextNode(nombreLista);
		nuevoSpan.setAttribute("id", "sp");
		nuevoSpan.appendChild(txtNuevoSpan);
		nuevaLista.appendChild(nuevoSpan);

		//enlace para añadir tarjeta
		var enlace = document.createElement("a");
		var txtEnlace = document.createTextNode("Añadir una tarjeta...");
		enlace.setAttribute("href", "#");
		enlace.appendChild(txtEnlace);
		nuevoSpan.appendChild(enlace);



/*
		//textarea para añadir tarjeta
		var textArea = document.createElement("textarea");
		textArea.setAttribute("id", "txt");
		nuevaLista.appendChild(textArea);
		*/
	}
	
}


/*
necesito el valor del input para mostrarlo y que tenga un input para añadir tarjeta
//estos dos elementos fueron creados en JS y se guardan en <div class="nueva-lista" id="contenedor-lista"> del index.html
<input id="inp" placeholder="Añadir una lista" type="text"> //de aquí obtengo el valor
<button type="submit" id="btn">Guardar</button> //al hacer click me debe mostrar el valor obtenido + un input añadir tarjeta
*/