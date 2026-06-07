 let contador = 0;
function cambiarColor(){
  
   let titulo = document.getElementsByTagName("h1")[0];
   let colorTitulo = getComputedStyle(titulo).color;
   console.log(colorTitulo);
   if (contador < 4) {
        if (colorTitulo == "rgb(0, 139, 139)") {
            titulo.style.color = "orange";
        } else if (colorTitulo == "rgb(255, 165, 0)") {
            titulo.style.color = "darkcyan";
        }
        contador++;
    } else {
        titulo.style.color = "green";
    }
}
function selectOpciones(){
    let select = document.getElementsByTagName("select")[0];
    if(select.value === 0){
        
    }
}