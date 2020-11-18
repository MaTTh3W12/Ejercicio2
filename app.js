var palabra = prompt('Ingrese la palabra para verificar si es una palíndromo');
        
function palindromo(cadena) {

    var resultado = "La cadena \""+cadena+"\" \n";

    var cadenaOriginal = cadena.toLowerCase();

    var letrasEspacios = cadenaOriginal.split("");

    var cadenaSinEspacios = "";
    for(i in letrasEspacios) {
        if(letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();

    var iguales = true;
    for(i in letras) {
        if(letras[i] == letrasReves[i]) {
        }
        else {
            iguales = false;
        }
    }

    if(iguales) {
        resultado += " es un palíndromo";
    }
    else {
        resultado += " no es un palíndromo";
    }

    return resultado;
}

alert(palindromo(palabra));