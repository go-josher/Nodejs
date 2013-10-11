/**
*	Programa que acepta numeros de entrada 
*	como argumentos e imprime la suma de
*	ellos en consola.
*/

var resultado = 0
  , args = process.argv

if (args.length == 2)
	throw "Favor de Ingresar los numeros a sumar como argumentos."


//	Suma de todos los argumentos
args.forEach(function (element, index, array) {
	//si a NaN le sumas algo sigue siendo NaN
	if (index > 1)
		resultado += Number(element)
})

// NaN === NaN -> false -- si el resultado es NaN 
// checar si el resultado es un numero
if (resultado === resultado) 
	console.log("La suma de los argumentos es = " + resultado)
else
	throw "Alguno de los argumentos que ingresaste no es un numero."