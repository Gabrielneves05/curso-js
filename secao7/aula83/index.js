// Métodos de instância estáticos

function teste() {
    console.log(this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância = Método disponível somente na chamada da instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        if(this.volume <= 0) return;
        this.volume -= 2;
    }

    // Método estático = Método referente a classe na qual ele foi criado (Não tem acesso aos dados da instância)
    static soma(x, y) {
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();