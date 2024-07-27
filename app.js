let menuVisible = false;
//funcion que oculta o muestra menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav") .classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav") .classList ="responsive";
        menuVisible = true;
    }
}
//ocultar menu al seleccionar una opcion
function seleccionar(){
    document.getElementById("nav") .classList ="";
    menuVisible = false;
}
