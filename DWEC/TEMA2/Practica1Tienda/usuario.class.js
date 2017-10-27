function Usuario(productos) {
  this.id = Math.floor((Math.random()*1000)+1);
  this.idioma = navigator.language||navigator.browserLanguage;
  this.navegador = navigator.userAgent;
  this.compra = productos;
  this.importe = 0;

  this.eliminarCompra = function() {
    if (this.compra.length > 0) {
      this.compra.pop();//Borra el ultimo artículo
    } else {
      document.write("No quedan artículos en el carro");
    }
  }

  this.calcularImporte = function() {
    function getSum(total, num) {
      return total + num.precio;
    }
    this.importe = (this.compra.reduce(getSum,0)).toFixed(2);
  }

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
    cuerpo.innerHTML = str;
  }


}
