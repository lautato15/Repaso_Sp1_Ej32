function sumarStrings(str1, str2) {
  if (isNaN(parseFloat(str1)) || isNaN(parseFloat(str1)))
    return "Error de Parametros";
  else if (str1.length < 16 && str2.length < 16)
    return (parseFloat(str1) + parseFloat(str2)).toString();
  else return (BigInt(str1) + BigInt(str2)).toString();
}
// Ejercicio 32 (Extra)
// Crear una función en JavaScript llamada sumarStrings que reciba como
// parámetros dos strings (que representan dos números naturales) y retorna un nuevo
// string que representa la suma de los números.
// La dificultad de este ejercicio está en poder sumar números realmente grandes y
// poder mostrar la suma completa (con todos los dígitos). Ver detalles aquí.
// Ejemplos:
// Input ---> Output
// sumarStrings("1", "6") ---> "7"
// sumarStrings("0", "4") ---> "4"
// sumarStrings("0034", "000056") ---> "90"
// sumarStrings("73283718237137219313432","8934342432") ---> "73283718237146153655864"
