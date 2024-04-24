let width = prompt("Volumen de la caja, ingresa el ancho", 0);

let height = prompt("Volumen de la caja, ingresa la altura", 0);

let length = prompt("Volumen de la caja, ingresa la longitud", 0);

let volume = width * height * length;

alert(`El volumen de la caja es ${volume}`);

document.write("Los datos introducidos son<br>");
document.write("Ancho: "+width+"<br>");
document.write("Alto: "+height+"<br>");
document.write("Longitud: "+length+"<br>");
document.write("Volumen: "+volume+"<br>");