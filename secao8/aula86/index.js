// Aula 86 - Promises

// 1 - new Promise = Construtor da promise
// 2 - resolve (função) = É utilizado quando se quer resolver uma promessa em qualquer lugar do código! A mesma coisa que: "Esse código executou com sucesso, então resolve ele pra mim"
// 3 - reject (função) = É utilizado quando se quer resolver uma promessa em qualquer lugar do código! A mesma coisa que: "Deu um erro aqui no código, então rejeita ele pra mim"


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o banco de dados', rand(1, 3))
    .then(response => {
        console.log(response);
        return esperaAi('Buscando dados na base', rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return esperaAi(22222, rand(1, 3))
    })
    .then(response => {
        console.log(response);
    })
    .then(() => {
        console.log('Exibe dados na tela')
    })
    .catch(e => {
        console.log('ERRO:', e);
    });