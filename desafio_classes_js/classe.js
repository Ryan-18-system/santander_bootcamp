class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }

    sacar (valor){
        if(this._saldo - valor < 0){
            return "Saldo insuficiente"
        }
        this._saldo -= valor
        return `Você sacou ${valor}, seu saldo atual é ${this._saldo}`
    }
    depositar (valor){
        this._saldo += valor 
        return `Você depositou ${valor}, seu saldo atual agora é ${this._saldo}`
    }
}

class ContaCorrente extends ContaBancaria{
   constructor(agencia, numero, cartaoDeCredito){
        super(agencia, numero)
        this._cartaoDeCredito = cartaoDeCredito;
        this.tipo = 'conta corrente'
   }

   set cartaoDeCredito(valor){
    this._cartaoDeCredito = valor;
   }
   get cartaoDeCredito(){
    return this.cartaoDeCredito
   }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupança'
    }
}
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'universitária'
    }
    sacar(valor){
        if(valor > 500 ) {
            return 'Valor maior que R$500,00  não foi possível sacar'
        }else if((this._saldo - valor ) < 0){    
            return 'Saldo insuficiente'
        }else{
            this._saldo -= valor;
            return `Seu saldo atual é ${this._saldo}`
        }
    }
}