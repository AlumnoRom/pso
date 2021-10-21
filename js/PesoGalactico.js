function Calcular(){
	//Declarar variables
	var ma, gra, O;
	//Recuperar los valores
	ma=parseInt(document.getElementById("pesoTi").value);
	gra=parseInt(document.getElementById("gravPla").value);
	//Realizar la operacion
	O=(ma*gra)/9.8;
	//Mostrar el resultado
	document.getElementById("peso").value=O;
}
function Nuevo(){
	document.getElementById("pesoTi").value="";
	document.getElementById("nomPla").value="";
	document.getElementById("gravPla").value="";
	document.getElementById("peso").value="";
}