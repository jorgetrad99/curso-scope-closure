function greeting() {
  let userName = 'Ana';
  console.log(userName);

  if (userName == 'Ana') {
    console.log(`Hello, ${userName}!!`);
  }
}

greeting();
console.log(userName); //Error de referencia, no puede ser accedida la variable fuera de la función
