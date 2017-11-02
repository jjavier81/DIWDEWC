/*El constructor del objeto Usuario que definimos de la siguiente
manera:
a. Parámetros de entrada: el array compra (array de objetos iguales a los
de productos).*/
function Usuario(productos) {
  /*Atributos:
    o id (valor random entre 1 y 1000)
    o idioma (idioma que emplea el usuario en el navegador)
    o navegador (características del navegador del usuario)
    o compra (array de objetos producto)
    o importe (importe total de la compra que se inicializa a 0)
  */
  this.id = Math.floor((Math.random()*1000)+1);
  this.idioma = navigator.language||navigator.browserLanguage;
  this.navegador = navigator.userAgent;
  this.compra = productos;
  this.importe = 0;

  /* Método eliminarCompra: elimina el último elemento del array compra mientras
  existan elementos.*/
  this.eliminarCompra = function() {
    if (this.compra.length > 0) {
      this.compra.pop();//Borra el ultimo artículo
    } else {
      alert("No quedan artículos en el carro");
    }
  }

  /*Método calcularImporte: calcula el importe*/
  this.calcularImporte = function() {
    function getSum(total, num) {
      return total + num.precio;
    }
    this.importe = (this.compra.reduce(getSum,0)).toFixed(2);
    return this.importe;
  }

  /*Método mostrarCompra: no tiene parámetros de entrada porque sólo dibuja el
    atributo compra del objeto Usuario. Muestra la imagen, nombre, descripción
    y precio de cada producto del array que pasamos dentro de un div contenedor
    y dentro del div con id cuerpo.*/
  this.mostrarCompra = function(){
    cuerpo.innerHTML = "";
    var str = "";
    for (var i = 0; i < this.compra.length; i++) {
      str += "<div>";
      str += "<img src='" + this.compra[i].foto + "' alt ='";
      str += this.compra[i].nombre + "'>";
      str += "<p>Producto:" + this.compra[i].nombre + "</p>";
      str += "<p>Descricpción:" + this.compra[i].descripcion + "</p>";
      str += "<p><b>Precio</b>:" + this.compra[i].precio + " €</b></p>";
      str +="</div>";
    }
    str += "<hr />";
    str += "Total: " + this.importe;
    cuerpo.innerHTML = str;
  }
}
