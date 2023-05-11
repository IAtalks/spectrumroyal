// Seleciona o botão de enviar do formulário
var btnEnviar = document.querySelector('input[type="submit"]');
// Adiciona um evento de clique ao botão de enviar
btnEnviar.addEventListener('click', function(event) {
	// Previne o envio padrão do formulário
	event.preventDefault();
	// Seleciona os campos do formulário
	var nome = document.getElementById('nome');
	var email = document.getElementById('email');
	var mensagem = document.getElementById('mensagem');
	// Exibe os valores dos campos na janela de alerta
	alert('Nome: ' + nome.value + '\nE-mail: ' + email.value + '\nMensagem: ' + mensagem.value);
});