let titulo = document.querySelector('h1')
titulo = 'Hora do Desafio';


function verificaConsole () {
    console.log('O botão foi clicado');
}

function verificaAlert () {
    alert('Eu amo JS');
}
function verificaPrompt () {
    let cidade = prompt('Qual cidade você visitou?');
    alert(`Eu visitei ${cidade} e lembrei de você`);
}

function verificaSoma () {
    var soma1 = prompt('Escolha um número entre 1 e 10');
    var soma2 = prompt('Escolha um número entre 1 e 10');
    var total = parseInt(soma1) + parseInt(soma2);
    alert(`A soma dos dois números escolhidos foi ${total}`);
}
