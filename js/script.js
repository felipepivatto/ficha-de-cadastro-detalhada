document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const rua = document.getElementById("Rua").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const bairro = document.getElementById("bairro").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    if (nome.length < 5) {
      alert("Digite seu nome completo.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Digite um e-mail válido.");
      return;
    }

    const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
      alert("Telefone deve estar no formato (99) 99999-9999.");
      return;
    }

    if (rua === "" || numero === "" || bairro === "" || cidade === "" || estado === "") {
      alert("Preencha todos os campos do endereço.");
      return;
    }

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmacao_senha").value;
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!senhaForte.test(senha)) {
      alert("A senha deve conter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    alert("Formulário enviado com sucesso!");

    form.reset();
  });
});
