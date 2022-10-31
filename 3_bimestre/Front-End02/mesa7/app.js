let formulario = document.getElementById("formulario");

formulario.innerHTML += `
<form action="" method="post" id="dados">
<div class="form">
<div class="nome">
<label for="nome">Nome:</label>
<input type="text" id="nome" />
</div>
<div class="sobrenome">
<label for="sobrenome">Sobrenome:</label>
<input type="text" id="sobrenome" />
</div>
<div class="email">
<label for="email">E-mail:</label>
<input type="email" id="email" />
</div>
<div class="buttons">
<button type="submit" class="botao">Enviar</button>
<button type="reset">Limpar</button>
</div>
</div>
</form>`;

let dados = 