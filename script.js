// Exemplo de interação com o formulário de contato
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});

function enviarWhatsApp() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;

  if (nome.trim() === "" || mensagem.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  var numeroWhatsApp = "5547997378205"; // Substitua pelo número correto com DDD
  var texto = `Olá, meu nome é ${nome}, eu vim pelo site da COLORÊ. %0A%0A${mensagem}`;
  var url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${texto}`;

  window.open(url, "_blank");
}

// Função para adicionar/remover a classe "focused" quando o campo é focado/desfocado
document.querySelectorAll('#whatsappForm input, #whatsappForm textarea').forEach(function(input) {
  input.addEventListener('focus', function() {
      document.querySelector('.form-container').classList.add('focused');
  });
  input.addEventListener('blur', function() {
      // Remove a classe quando o campo perder o foco, se não houver outro campo preenchido
      if (!document.querySelector('#whatsappForm input:focus') && !document.querySelector('#whatsappForm textarea:focus')) {
          document.querySelector('.form-container').classList.remove('focused');
      }
  });
});

