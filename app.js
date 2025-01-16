
function startGame() {
    alert('Bem-vindo ao jogo do número secreto!');
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        let chute = prompt('Digite um número entre 1 e 10:');
        if (!chute) {
            alert('Você precisa inserir um número!');
            continue;
        }

        chute = parseInt(chute);
        tentativas++;

        if (chute === numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativa(s).`);
            acertou = true;
        } else if (chute > numeroSecreto) {
            alert('O número secreto é menor!');
        } else {
            alert('O número secreto é maior!');
        }
    }

    document.querySelector('.container__texto h1').textContent = 'Você acertou!';
    document.querySelector('.container__texto h2').textContent = `O número secreto era ${numeroSecreto} e você precisou de ${tentativas} tentativa(s)!`;
}
