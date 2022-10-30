const checkbox = document.getElementById('chk');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

let containerFelinos = document.getElementById("containerFelinos");

let listaFelinos = document.querySelectorAll(".item");

containerFelinos.firstElementChild.remove();
containerFelinos.firstElementChild.remove();
containerFelinos.firstElementChild.remove();
containerFelinos.firstElementChild.remove();
containerFelinos.firstElementChild.remove();
containerFelinos.firstElementChild.remove();

