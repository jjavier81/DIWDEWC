/*El constructor del objeto Surtido que definimos de la siguiente manera:
▪ Parámetros de entrada: array de productos.
▪ Atributos: array de productos.*/

function Surtido(productos) {
  this.productos = productos;

  /* Método ordenPrecioMas: ordena el array de productos de menor a mayor precio.*/
  this.ordenPrecioMas = function(){
    this.productos.sort(function(p1,p2){
      return(p1.precio - p2.precio);
    });
  }

  /*Método ordenPrecioMenos: ordena el array de productos de mayor a menor precio.*/
  this.ordenPrecioMenos = function(){
    this.productos.sort(function(p1,p2){
      return(p2.precio - p1.precio);
    });
  }

  /*Método filtrarVegano: devuelve un array de los productos que sean veganos.*/
  this.filtrarVegano = function(){
    var v = this.productos.filter(function(p1){
      return (p1.vegano);
    });
    return v;
  }

  /*Método dibujarSurtido:
  • si pasamos un array como parámetro muestra la imagen, nombre, descripción y
  precio de cada producto del array que pasamos dentro de un div contenedor y
  dentro del div con id cuerpo.*/
  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    /*Si no pasamos un array hace lo mismo que el anterior pero para el array de productos del objeto surtido*/
    if (produ == undefined) {
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt ='";
        str += this.productos[i].nombre + "'>";
        str += "<p>Producto:" + this.productos[i].nombre + "</p>";
        str += "<p>Descricpción:" + this.productos[i].descripcion + "</p>";
        str += "<p><b>Precio</b>:" + this.productos[i].precio + " €</b></p>";
        str +="</div>";
        this.productos[i]
      }
    } else {
      for (var i = 0; i < produ.length; i++) {
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt ='";
        str += produ[i].nombre + "'>";
        str += "<p>Producto:" + produ[i].nombre + "</p>";
        str += "<p>Descricpción:" + produ[i].descripcion + "</p>";
        str += "<p><b>Precio</b>:" + produ[i].precio + " €</b></p>";
        str +="</div>";
        produ[i];
      }
    }
    /*Pista: si usas cuerpo.innerHTML puedes escribir dentro del elemento con id = cuerpo.*/
    cuerpo.innerHTML = str;
  }
}
