/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
  let seguir = "s";
  let nombre;
  let nombreConMasPersonas;
  let lugar;
  let lugarMasElegido;
  let bariloche = 0;
  let cataratas = 0;
  let salta = 0;
  let temporada;
  let cantidad = 0;
  let cantidadMayor = 0;
  let cantidadInvierno = 0;
  let viajesInvierno = 0;
  let promedio;
  let mensaje;

  while (seguir == "s")
  {
    nombre = prompt("Ingrese el nombre");

    lugar = prompt("Que lugar desea visitar? 'Bariloche', 'Cataratas' o 'Salta'").toLowerCase();
    while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"))
    {
      lugar = prompt("Ingrese un destino válido").toLowerCase();
    }

    temporada = prompt("Ingrese la época en que va a viajar. 'Primavera', 'Verano', 'Otoño' o 'Invierno'").toLowerCase();
    while (!(temporada == "primavera" || temporada == "verano" || temporada == "otoño" || temporada == "invierno"))
    {
      temporada = prompt("Ingrese la estación correctamente ");
    }

    cantidad = parseInt(prompt("Cuántas personas viajarán?"));

    switch (lugar)
    {
      case "bariloche":
        bariloche++;
        break;

      case "cataratas":
        cataratas++;
        break;

      case "salta":
        salta++;
        break;
    }

    if (cantidad > cantidadMayor)
    {
      cantidadMayor = cantidad;
      nombreConMasPersonas = nombre;
    }

    if (lugar = "invierno")
    {
      cantidadInvierno += cantidad;
      viajesInvierno++;
    }

    seguir = prompt("Desea agregar más estadías? Responda 's' o 'n'");
  }
  if (bariloche >= cataratas && bariloche >= salta)
  {
    lugarMasElegido = "Bariloche";
  }
  else if (cataratas > salta)
  {
    lugarMasElegido = "Cataratas";
  }
  else
  {
    lugarMasElegido = "Salta";
  }

  if (viajesInvierno != 0)
  {
    promedio = cantidadInvierno / viajesInvierno
    mensaje = ("El promedio de personas que viajan en invierno es de " + promedio);
  }
  else
  {
    mensaje = ("No hay viajes en Invierno");
  }

  console.log("a_ El lugar mas elegido es " + lugarMasElegido + "\n b_ Quien lleva más personas es " + nombreConMasPersonas + "\n c_ " + mensaje)
}


/*a) el lugar más elegido
b) el nombre del titular que lleva más pasajeros.
c) el promedio de personas por viaje, que viajan en invierno
  */