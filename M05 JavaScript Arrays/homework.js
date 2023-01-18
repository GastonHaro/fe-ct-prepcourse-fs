/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimoArreglo = array.pop();
   return ultimoArreglo;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
  let longitudArreglo = array.length;
  return longitudArreglo;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray = [];
   for (var i = 0;i < array.length;i++){
    nuevoArray[i] = array[i] +1;
   }return nuevoArray;

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);

   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);

   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   
   var nuevaPalabras = palabras.join(" ");

   return nuevaPalabras;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   
   var respuesta = array.includes(elemento);

   return respuesta;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var respuesta = 0;
   for (var i = 0; i < arrayOfNums.length; i++){
      respuesta = respuesta + arrayOfNums[i];
   }return respuesta;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var respuesta = 0;
   for (var i = 0; i < resultadosTest.length; i++){
      respuesta = respuesta + resultadosTest[i];
   }return respuesta / i;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var respuesta = Math.max(...arrayOfNums);
   return respuesta;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) return 0;
   var resp = 1;
   for (var i = 0; i<arguments.length; i++){
      resp *= arguments[i];
   }
   return resp;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var respuesta = 0;
   for (var i = 0; i < array.length; i++){
      if (array[i] > 18){
         respuesta ++;
      }
   }return respuesta;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia){
      case 1 : return "Es fin de semana";
      break;
      case 7 : return "Es fin de semana";
      break;
      default : return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var respuesta = [];
   respuesta = num.toString().split("");
   if (respuesta[0] == 9){
      return true;
   }else return false;
   
} 

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   
   for (var i=1; i < array.length; i++){
      if(array[0] === array[i]){
        return true;
      }else return false;
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var respuesta = [];
   for (var i=0; i<array.length; i++){
      if(array[i] === "Enero"){
         respuesta.push(array[i]);
      }else if (array[i] === "Marzo"){
         respuesta.push(array[i]);
      }else if (array[i] === "Noviembre"){
         respuesta.push(array[i]);
      }
   }if (respuesta.length < 3){
      return "No se encontraron los meses pedidos"
   }
      return respuesta;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var respuesta = [];
   for (var i=0; i<=10; i++){
      let resultado = 6 * [i];
      respuesta.push(resultado);
   }return respuesta;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var respuesta = [];
   for (var i=0; i<array.length; i++){
      if(array[i] > 100){
         respuesta.push(array[i]);
      }
   }return respuesta;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var respuesta = [];
   var resp = num;
   for (var i=0; i<10; i++){
      resp = resp + 2;
      respuesta.push(resp); 
      if (resp === i){
         return "Se interrumpió la ejecución";}
   } return respuesta;
} 


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var respuesta = [];
   var resp = num;
   for (var i=0; i<10; i++){
      if (i === 5) continue;
         else resp = resp + 2;
            respuesta.push(resp);
   } return respuesta;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
