//Exibe mensagem de boas vindas
alert("Boas vindas ao Jogo do número secreto!");

//Solicita a quantidade de números totais no jogo
let quantidadeNumeros = prompt("Digite a quantidade de números presentes no jogo: ");
console.log(`A quantidade de números no jogo é: ${quantidadeNumeros}`);

//Gera um número aleatório entre 1 e 100
let numeroSecreto = parseInt(Math.random() * quantidadeNumeros) + 1;
console.log(numeroSecreto);

//Declaração de variáveis para armazenar o número chutado e o número de tentativas
let numeroChutado , tentativas = 0;

//Enquanto o chute não for igual ao número secreto, continua solicitando um novo número
while(numeroChutado != numeroSecreto){
    //Solicita ao usuário que digite um número entre 1 e 100
    numeroChutado = prompt(`Digite um número entre 1 e ${quantidadeNumeros}:`);
    tentativas++; 
    console.log(tentativas);

// Se o número chutado for igual ao número secreto, exibe uma mensagem de sucesso.
        if (numeroChutado == numeroSecreto) {
            break;
            
        //Senão, exibe uma mensagem alertando o erro
        } else {
            if (numeroChutado > numeroSecreto){
                alert(`O número secreto é menor que: ${numeroChutado} tente novamente!!`);
            } else{
                alert(`O número secreto é maior que: ${numeroChutado}, tente novamente!`);
            }                   
        }
    }
    //Identifica se deve usar o plural ou singular para "tentativa"
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        alert(`Isso aí, você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);