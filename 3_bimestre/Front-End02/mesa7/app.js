let formulario = document.getElementById("formulario");

formulario.innerHTML += `
<form action="" method="post" id="dados">
<div class="form">
<div class="nome">
<label for="nome">Nome:</label>
<input type="text" id="nome" class="preencher" />
</div>
<div class="sobrenome">
<label for="sobrenome">Sobrenome:</label>
<input type="text" id="sobrenome" class="preencher" />
</div>
<div class="email">
<label for="email">E-mail:</label>
<input type="email" id="email" class="preencher" />
</div>
<div class="buttons">
<button type="submit" class="botao">Enviar</button>
<button type="reset">Limpar</button>
</div>
</div>
</form>`;

//interrupção do formulário
function eventSubmit(event) {
    event.preventDefault();
};

formulario.addEventListener('submit', eventSubmit);

//informação ao carregar a página
window.onload = function () {
    alert("Formulário aberto!");
};


// mouse event
let input = document.querySelector(".preencher");

input.onmouseover = function () {
    this.style.backgroundColor = "#7d9a68";
};

input.onmouseout = function () {
    this.style.backgroundColor = "#cb1e40";
};