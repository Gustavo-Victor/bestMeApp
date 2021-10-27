//vetor de questões e vetor de respostas
const questions = [
    "O que aprendi hoje?",
    "O que me aborreceu e gostaria de ter feito melhor?",
    "O que me deixou feliz?",
    "Quantas pessoas ajudei hoje?"
];
const answers = [];

//função para retonar pergunta
var ask = (index = 0) => {      
    return process.stdout.write(`\n\n${questions[index]} > `);
}

//chamar
ask();

//ler resposta do usuário e jogar resposta no vetor de respostas
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());//formatar 

    //continuar pergunta e leitura até qtd item resposta = qtd item pergunta
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();//finalizar processo
    }
});

//quando execução do processo for finalizada chamar função
process.on('exit', () => {
    console.log(`\n--------------------\nResumo de hoje!\n--------------------\n`);
    for(let counter = 0; counter < answers.length; counter++){
        console.log(`P: ${questions[counter]}\nR: ${answers[counter]}\n\n`);
    }
    console.log(`--------------------\nVolte mais amanhã para novas reflexões :)\n--------------------\n`);
});
