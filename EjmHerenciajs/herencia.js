//Juan Camilo Almanza -- Juan David Pinzon -- Mariana Allison Quemba 
// Ejemplo práctico de Herencia en JavaScript
// Una clase base define comportamiento común y las clases hijas lo reutilizan.

class Vehiculo {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  encender() {
    console.log(`${this.marca} ${this.modelo}: motor encendido.`);
  }

  acelerar() {
    console.log(`${this.marca} ${this.modelo}: acelerando...`);
  }

  mostrarInfo() {
    console.log(`Vehículo: ${this.marca} ${this.modelo} - Color: ${this.color}`);
  }
}

// Herencia: Carro hereda de Vehiculo
class Carro extends Vehiculo {
  constructor(marca, modelo, color, puertas) {
    super(marca, modelo, color); // llama al constructor de la clase padre
    this.puertas = puertas;
  }

  // Método propio de la clase hija
  abrirPuertas() {
    console.log(`Abriendo ${this.puertas} puertas del ${this.marca} ${this.modelo}.`);
  }

  // Sobrescribimos un método del padre para adaptarlo al carro
  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Tipo: Carro | Puertas: ${this.puertas}`);
  }
}

// Herencia: Moto hereda de Vehiculo
class Moto extends Vehiculo {
  constructor(marca, modelo, color, cilindrada) {
    super(marca, modelo, color);
    this.cilindrada = cilindrada;
  }

  // Método propio de la clase hija
  hacerCaballito() {
    console.log(`${this.marca} ${this.modelo}: ¡haciendo caballito!`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Tipo: Moto | Cilindrada: ${this.cilindrada}cc`);
  }
}

// Crear objetos
const miCarro = new Carro('Toyota', 'Corolla', 'Rojo', 4);
const miMoto = new Moto('Honda', 'CBR', 'Negra', 600);

console.log('==== CARRO ====');
miCarro.encender();
miCarro.acelerar();
miCarro.abrirPuertas();
miCarro.mostrarInfo();

console.log('\n==== MOTO ====');
miMoto.encender();
miMoto.acelerar();
miMoto.hacerCaballito();
miMoto.mostrarInfo();

// ¿Qué hace la herencia aquí?
// - Carro y Moto reutilizan los métodos de Vehiculo
// - Agregan sus propias características
// - Pueden sobreescribir comportamiento con mostrarInfo()

/*
Concepto clave:
La herencia permite crear nuevas clases a partir de otra
para reutilizar código y organizar mejor el programa.
*/
