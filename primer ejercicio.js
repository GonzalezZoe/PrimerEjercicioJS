// Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

var nota = prompt("Ingrese una calificacion: "); //esto hace que aparerza un mensaje en pantalla

if (nota < 3){
    document.write("muy deficiente");
} 

else if (nota < 5 && nota > 3){
    document.write("Insuficiente");
} 

else if (nota >= 5 && nota < 7){
    document.write("bien");
}

else if (nota > 6 && nota < 10){
    document.write("Notable");
}

else if (nota == 10){
    document.write("sobresaliente");
}

else {
    document.write("el numero ingresado no se encuentra dentro de los parametros");
}