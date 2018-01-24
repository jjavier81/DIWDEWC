onload = function(){
  //Inicialmente, ocultamos los contenidos excepto el de presentación
  document.getElementById("primeros").style.display = "none";
  document.getElementById("segundos").style.display = "none";
  document.getElementById("postres").style.display = "none";

  //seleccionamos los enlaces del menú de navegación y asociamos la función de visualización
  var enlaces = document.querySelectorAll("#navegacion a, h3 a");
  for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].onclick = visualiza;
  }
  function visualiza(e) {
    //selecciona los div dentro de contenido
    var losDiv = document.getElementById("contenido").getElementsByTagName("div");
    //oculta los div
    for(var i = 0; i < losDiv.length; i++){
      losDiv[i].style.display = "none";
    }
    //muestra el div indicado
    var clase = e.target.getAttribute("class");
    document.getElementById(clase).style.display = "block";
    // cancela el evento normal del enlace (equivale a e.preventDefault());
    return false;
  }
}
