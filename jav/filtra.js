let barraPesqui = document.getElementById("pesquisar");
let lupaativo = document.getElementById("ativo");
let sidebarPesqui = false;

function lupa() {
  sidebarPesqui = !sidebarPesqui;
  if (sidebarPesqui) {
    barraPesqui.style.marginLeft = "0vw";
    lupaativo.style.display = "none";
  } else {
    barraPesqui.style.marginLeft = "-100vw";
    lupaativo.style.display = "flex";
  }
}

//filtro pesquisar
function pesquisar() {
  let input = document.getElementById("pesquisar").value;
  let container = document.getElementsByClassName("container");
  input = input.toLocaleLowerCase();

  let x = document.getElementsByClassName("img");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(input)) {
      x[i].style.display = "none";
      container[i].style.display = "none";
    } else {
      x[i].style.display = "flex";
      container[i].style.display = "flex";
    }
  }
}
