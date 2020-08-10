/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
  let nombre;
  let temperatura;
  let sexo;
  let edad;
  let edadTotal = 0;
  let cntdrMujeres = 0;
  let cntdrHombres = 0;
  let edadPromedio;
  let nombreMujerMayorTemp;
  let mujerMayorTemp = 0;

  for (let i = 0; i < 5; i++)
  {
    nombre = prompt("Ingrese su nombre");

    temperatura = parseInt(prompt("Pase por el scanner e introduzca su temperatura"));

    sexo = prompt("Ingrese su género 'f' o 'm'").toLowerCase();

    edad = parseInt(prompt("Ingrese su edad"));

    if (sexo = "f")
    {
      cntdrMujeres++;
    }
    else
    {
      cntdrHombres++;
    }
    edadTotal += edad;

    if (sexo == "f" && temperatura > mujerMayorTemp)
    {
      mujerMayorTemp = temperatura;
      nombreMujerMayorTemp = nombre;
    }
  }
  edadPromedio = edadTotal / 5;

  console.log("a_ Hay " + cntdrHombres + "hombres y " + cntdrMujeres + " mujeres \n b_ La edad promedio es de " + edadPromedio + "c_ La mujer con mayor temperatura es " + nombreMujerMayorTemp + " con " + mujerMayorTemp + "° C");
}