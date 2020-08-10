/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar()
{
  let marca;
  let marcaMasCaro;
  let marcaMasLiviano;
  let precio;
  let precioMayor = 0;
  let peso;
  let pesoMenor = 0
  let pesoTotal = 0;
  let tipo;
  let seguir = "s"

  while (seguir = "s")
  {
    marca = prompt("Ingrese la marca del producto");

    precio = parseInt(prompt("Ingrese el precio por unidad"));

    peso = prompt("Ingrese el peso del producto");

    tipo = prompt("Ingrese el tipo de producto. 'liquido' o 'solido'");

    while (!(tipo == "liquido" || tipo == "solido"))
    {
      tipo = prompt("Ingrese un tipo valido");
    }

    pesoTotal += peso;

    if (tipo == "liquido" && precio > precioMayor)
    {
      precioMayor = precio;
      marcaMasCaro = marca;
    }

    if (tipo == "solido" && peso < pesoMenor)
    {
      pesoMenor = peso;
      marcaMasLiviano = marca;
    }
    seguir = prompt("Desea seguir ingresando productos? Responda 's' o 'n'");
  }
  console.log("a_ El peso total de su compra es de " + pesoTotal + "\n b_ La marca del liquido más caro es la de " + marcaMasCaro + "\n c_ Y el más liviano de los sólidos es el de la marca " + marcaMasLiviano);
}

/*a) informar el peso total de la compra.
b) la marca del más caro de los líquidos
c) la marca del más liviano de los sólidos*/