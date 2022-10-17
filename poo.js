class Calculadora_new {
  constructor() {
    this.x;
    this.y;
  }
  sumar(x, y) {
    this.x = x;
    this.y = y;
    return this.x + this.y;
  }
  resta(x, y) {
    this.x = x;
    this.y = y;
    return this.x - this.y;
  }
  multiplicacion(x, y) {
    this.x = x;
    this.y = y;
    return this.x * this.y;
  }
  division(x_1, y) {
    this.x = x;
    this.y = y;
    return this.x / this.y;
  }
  potencia(x, y) {
    this.x = x;
    this.y = y;
    return this.x ** this.y;
  }
  raiz(x) {
    this.x = x;
    return Math.sqrt(this.x);
  }
}
const Calculadora = new Calculadora_new();
var ingresa = prompt( "Selecciona la operacion deseas hacer \n1. Suma \n2. Resta \n3. Multiplicacion \n4. Divison \n5. Potencia "
);
switch (ingresa) {
  case "1":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    alert(`El resultado de tu suma es: ${Calculadora.sumar(x, y)}`);
    break;

  case "2":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    alert(`El resultado de tu resta es: ${Calculadora.resta(x, y)}`);
    break;

  case "3":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    alert( `El resultado de tu multiplicacion es: ${Calculadora.multiplicacion(
        x,
        y
      )}`
    );
    break;

  case "4":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    alert(`El resultado de tu division es: ${Calculadora.division(x, y)}`
    );
    break;

  case "5":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa el exponente"));
    alert( `El resultado de la potenciacion es: ${Calculadora.potencia(x, y)}`
    );
    break;
}

var ingresa = prompt("¿Deseas hacer alguna otra operacion? \n1. Si \n2. No");
if (ingresa == "1") {
  location.reload();
} else {
  alert("Vuelve cuando desees hacer alguna otra operación :)");
}
