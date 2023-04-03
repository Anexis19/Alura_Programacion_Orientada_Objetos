
// Importacion de clases
import {cuentaCorriente} from './CuentaCorriente.js';
import {cliente} from './Cliente.js'

// Creacion de Objeto CLIENTE
const cliente1 = new cliente();

// Instanciacion de atributos
cliente1.nombreCliente = "Andres";
cliente1.dniCliente = "12312";
cliente1.rutCliente="12345";

// Creacion de Objeto CUENTA CORRIENTE
const cuentaCorriente1 = new cuentaCorriente();

// Definicion de variables
let saldo = cuentaCorriente1.verSaldo();

// Instanciacion de atributos
cuentaCorriente1.agencia="BBVA";
cuentaCorriente1.numero="1001";

// Uso de metodo de la clase CUENTA CORRIENTE
console.log('El saldo actual es: '+saldo);

saldo = cuentaCorriente1.depositoEnCuenta(500);
console.log('El saldo actual es: '+saldo);
saldo = cuentaCorriente1.depositoEnCuenta(700);
console.log('El saldo actual es: '+saldo);
saldo = cuentaCorriente1.retirarDeCuenta(100);
console.log('El saldo actual es: '+saldo);

console.log(cliente1);
console.log(cuentaCorriente1);