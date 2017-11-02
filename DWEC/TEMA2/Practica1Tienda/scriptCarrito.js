/*Comprobar si las cookies estan habilitadas*/
if(!navigator.cookieEnabled) {
  alert('Cookies NO disponibles');
}

/*Inicializa el objeto Usuario con los datos del usuario actual, calcula el
importe de la compra y la muestra.*/
var usuario1 = new Usuario(compra);
usuario1.calcularImporte();
usuario1.mostrarCompra();

/*eliminar: elimina el último producto de la lista y actualiza el
importe y el dibujo*/
function eliminar() {
  usuario1.eliminarCompra();
  usuario1.calcularImporte();
  usuario1.mostrarCompra();
};

/*hacerPedido: si hay productos, muestra un mensaje de confirmación para aceptar
las condiciones del pedido y una vez confirmado carga la página pedidoOK.html*/
function hacerPedido() {
  if (compra.length > 0) {
    confirmar=confirm("¿Aceptas las condiciones de compra?");
    if (confirmar) {
      // si pulsamos en aceptar
      location.href=('pedidoOK.html');
    }
  }
}

/*condCompraOnline: muestra en otra ventana emergente las condiciones de compra
y un botón que permite cerrarlas.*/
function condCompraOnline() {
    var ventanaEmergente = window.open("", "ventanaEmergente", "width=400,height=400");
    ventanaEmergente.document.write("<h1 align='center'>CONDICIONES DE COMPRA</h1><p align='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p  align='center'><button onclick='window.close();'>CERRAR CONDICIONES</button></p>");
}

/*Inicio: vuelve a home.html*/
function inicio() {
  location.href=("home.html");
}

/*Imprimir: imprime la página del carrito*/
function imprimir() {
  window.print();
}
