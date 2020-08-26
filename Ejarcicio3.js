/*Escribir el código de una función a la que se pasa como parámetro un número entero y 
devuelve como resultado una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función.

   */

miFuncion(4);

function miFuncion(a){

    if(a%2!==0){
        console.log("El numero es impar");
    }else{
        console.log("El numero es par");
    }

}