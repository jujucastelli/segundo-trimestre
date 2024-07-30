const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"Vc gosta de miojo uliana"
      alternativas: [
  {
 texto: "Sim";
afirmaçao: "afirmaçao";
}
{
  texto: "Não";

afirmaçao: "afirmaçao";
}
            ]
},
{
    enunciado:"Qual a melhor comida "
      alternativas: [
        "Lasanha";
        "Picanha";
            ]
},
{
    enunciado:"Qual foi sua melhor comida Juliana?"
      alternativas: [
        "Pastel ";
        "Linguiça";
            ]
},
{
    enunciado:"quem é melhor JUliana?"
      alternativas: [
        "Cristiano Ronaldo";
        "Neymar";
            ]
},
{
    enunciado:"quantos anos messi tem"
      alternativas: [
        "38";
        "37";
            ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();





let atual=0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
  if (atual>=pergunta.lenght)
