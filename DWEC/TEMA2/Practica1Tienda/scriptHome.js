/*Creará el objeto p de tipo Surtido y dibujará el Surtido*/
var p = new Surtido(productos);
//var micompra = [productos[0], productos[3]];
p.dibujarSurtido();
function recarga() {
  p.dibujarSurtido();
}
/*verPorPreciosMas: toma como parámetro el objeto surtido, lo ordena por precios
crecientes y vuelve a dibujar el surtido.*/
function verPorPrecioMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}

/*verPorPrecioMenos: toma como parámetro el objeto surtido, lo ordena por precios
 decrecientes y vuelve a dibujar el surtido.*/
function verPorPrecioMenos(p){
  p.ordenPrecioMenos();
  p.dibujarSurtido();
}

/*verVegano: obtiene los productos veganos y los dibuja*/
function verVegano(){
  var v = p.filtrarVegano();
  p.dibujarSurtido(v);
}

/*recarga: vuelve a cargar la página*/
function recarga() {
  window.location.reload();
}

/*condCompraOnline: muestra en otra ventana emergente las condiciones de compra
y un botón que permite cerrarlas.*/
function condCompraOnline() {
    var ventanaEmergente = window.open("", "ventanaEmergente", "width=400,height=400");
    ventanaEmergente.document.write("<h1 align='center'>CONDICIONES DE COMPRA</h1><p align='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p  align='center'><button onclick='window.close();'>CERRAR CONDICIONES</button></p>");
}

/*navegarCarrito: permite ir a la página carrito.html*/
function navegarCarrito() {
  location.href=("carrito.html");
}
