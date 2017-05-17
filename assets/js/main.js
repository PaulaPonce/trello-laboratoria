//el span tiene le función para agregar input y botón
var span = document.getElementById("add-list");
span.addEventListener("click", addInput);

function addInput(){
	//contenedores
	var contLista = document.getElementById("contenedor-lista");
	var contTarjeta = document.getElementById("contenedor-tarjeta");
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
}
