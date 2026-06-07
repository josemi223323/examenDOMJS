let contador = 0;
function cambiarColor() {
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
const matrizImagenes = [
  ["../img/refrig1.jpg", "../img/refrig2.jpg", "../img/refrig3.jpg"],
  ["../img/micro1.jpg", "../img/micro2.jpg", "../img/micro3.jpg"],
  ["../img/graf1.jpg", "../img/graf2.jpg", "../img/graf3.jpg"],
  ["../img/placa1.jpg", "../img/placa2.jpg", "../img/placa3.jpg"],
];

let nuevoSeccion = document.createElement("section");
let nuevoH2 = document.createElement("h2");
nuevoH2.innerText = "componentes";
document.body.appendChild(nuevoSeccion);
nuevoSeccion.appendChild(nuevoH2);

let nuevoDiv = document.createElement("div");
nuevoSeccion.appendChild(nuevoDiv);

let select = document.getElementsByTagName("select")[0];
function selectOpciones() {
  nuevoDiv.innerHTML = ""; 

  let indice = parseInt(select.value);

  for (let i = 0; i < matrizImagenes[indice].length; i++) {
    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src", matrizImagenes[indice][i]);
    nuevoDiv.appendChild(nuevaImagen);
  }
}

selectOpciones(); 
select.addEventListener("change", selectOpciones);