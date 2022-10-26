//@@@@@@ [1] - Modelos de texto  - Template Strings

let usuario = "Igor";

function boasvindas () {
    return "Boas-vindas Igor";
}

// alert(`${boasvindas()} não esqueça de avaliar`); // `` aspas cruzadas permitem interpolação, permite que o javascript leia uma variável dentro de uma string sem concatená-la




//@@@@@@ [2] - Modificando elementos com o DOM

let h1 = document.querySelector("h1");
h1.innerHTML = "<h4> Aula 05 </h4>"


//@@@@@@ [3] - Modificando estilos 

h1.style.color = "#000";
h1.style.textAlign = "center"

h1.classList.add("novoh1");

let valid = h1.classList.contains("novoh1");
console.log(valid);


//@@@@@@ [4] Modificando a classe dos elementos