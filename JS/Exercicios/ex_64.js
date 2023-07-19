let nombres = [`Juan`, `Miguel`, `Ochoa`];
let declarados = "";
let i = 0;

while (i < nombres.length) {
    declarados += nombres[i] + ";\n";
    i++
}

console.log(declarados);