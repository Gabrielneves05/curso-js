// Herança com classes

// A herança sempre vem de cima pra baixo em Javascript. "Você herda tudo dos seus pais, mas os seus pais não herdam nada de você!"

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado!');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado!');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // Extends: é o que permite a herança extendendo a classe da qual a atual herdou propriedades e métodos.
    constructor(nome, cor, modelo) {
        super(nome); // Chamada do construtor da class pai

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);

        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar!');
    }
    
    falaOi() {
        console.log('Oi');
    }
}


const d1 = new DispositivoEletronico('Smartphone');

const s1 = new Smartphone('iPhone', 'Preto', '14 Pro Max');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
t1.falaOi();