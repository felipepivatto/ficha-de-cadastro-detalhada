const numero = document.getElementById("numero").value.trim();
const bairro = document.getElementById("bairro").value.trim();
const cidade = document.getElementById("cidade").value.trim();

if(nome.length < 5){
    alert("Digite seu nome completo.")
    return;
}
if(!email.includes("@") || !email.includes(".")){
    alert("Digite um e-mail válido. ")
    return;
}

const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
if (!telefoneRegex.test(telefone)) {
  alert("Telefone deve estar no formato (99) 99999-9999.");
  return;
}

if (rua === "" || numero === "" || bairro === "" || cidade === "") {
  alert("Preencha todos os campos do endereço.");
  return;
}

alert("Formulário enviado com sucesso!");
this.reset();
;
