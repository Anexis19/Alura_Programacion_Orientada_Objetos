import {cliente} from "./Cliente.js";
// Definicion de clase y exportacion de la misma
export class cuentaCorriente{
    // Atributos relacionados al cliente
    #cliente;
    // Atributos relacionados a la cuenta
    #saldo;
    numero;
    agencia;

    set setCliente(valor){

        if(valor instanceof cliente){
            this.#cliente = valor;
        }


    }
    get getCliente(){
        return this.#cliente;
    }

    constructor(){
        this.#cliente=null;
        this.#saldo=0;
        this.numero='';
        this.agencia='';
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo;

    }
    retirarDeCuenta(valor){
        if(valor <= this.#saldo){
            this.#saldo -=valor;
        }
        return this.#saldo;
    }
    verSaldo(){
        return this.#saldo;
    }
    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}
