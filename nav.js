let menu = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx x');
    navbar.classList.toggle('open');
}

/*Cuando se hace click en el botón, muestra el submenu*/
function myFunction() {   
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  //Cierra el submenu si se clica fuera
  window.onclick = function(event){
    if(!event.target.matches('.drop-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0;  i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        //Busca dentro de drop-content los elementos con la clase show
        if (openDropdown.classList.contains('show')){
          //elimina la clase show de los elementos dentro de drop-content
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 

  $(document).ready(function() {
    $("#desplegar").css('display','none');	
    
    $("p").mouseenter(function() {
        $("#desplegar").show('slow');
    });
                    
    $("p").mouseleave(function() {
        $("#desplegar").hide('slow');

    });
});


//Menu Fijo
var header = document.getElementById('header')
window.addEventListener('scroll', ()=>{
  var scroll = window.screenY
  if (scroll>10) {
    header.style.backgroundColor = ' rgb(255, 255, 255)'
  }
  else{
    header.style.backgroundColor = ' transparent '
  }
});

