let i;
let fib = [0, 1]; 
let numero = Number(prompt("Digite um número"));


for (i = 2; i <= numero; i++) {

  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

alert(fib)