const perguntas = [
    { pergunta: "Qual é o resultado de 2 + 2?", respostaCorreta: 4 },
    { pergunta: "Qual é a raiz quadrada de 81?", respostaCorreta: 9 },
    { pergunta: "Resolva: 12 x 12", respostaCorreta: 144 },
    { pergunta: "Qual é o valor de π (pi) arredondado para duas casas decimais?", respostaCorreta: 3.14 },
    { pergunta: "Qual é o valor de 2^10?", respostaCorreta: 1024 },
    { pergunta: "Resolva: 7 + 3 x (10 ÷ 2)", respostaCorreta: 22 },
    { pergunta: "Qual é a derivada de x^2?", respostaCorreta: 2 }, 
    { pergunta: "Qual é o logaritmo de 1000 na base 10?", respostaCorreta: 3 },
    { pergunta: "Resolva: 5! (fatorial de 5)", respostaCorreta: 120 },
];

function carregarPerguntas() {
    const container = document.getElementById('perguntas-container');

    perguntas.forEach((pergunta, index) => {
        const div = document.createElement('div');
        div.classList.add('faq-item');
        div.innerHTML = `
            <p>${pergunta.pergunta}</p>
            <input type="number" id="resposta-${index}" placeholder="Digite sua resposta">
            <button onclick="verificarResposta(${index})">Verificar Resposta</button>
            <p id="resultado-${index}"></p>
        `;
        container.appendChild(div);
    });
}
function verificarResposta(indice) {
    const respostaUsuario = parseFloat(document.getElementById(`resposta-${indice}`).value);
    const respostaCorreta = perguntas[indice].respostaCorreta;
    
    const resultadoDiv = document.getElementById(`resultado-${indice}`);

    if (respostaUsuario === respostaCorreta) {
        resultadoDiv.innerText = "Resposta correta!";
    } else {
        resultadoDiv.innerText = "Resposta incorreta. A resposta correta é " + respostaCorreta + ".";
    }
}

window.onload = carregarPerguntas;