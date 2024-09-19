console.log("Script carregado!");

function alterarDestino() {
    const novoDestino = prompt("Insira o novo URL de destino:");
    document.getElementById('formLanding').action = novoDestino;
}

function mudarCorDeFundo() {
    const novaCor = prompt("Escolha a nova cor de fundo (em hexadecimal):");
    document.body.style.backgroundColor = novaCor;
}