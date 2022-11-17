let num = prompt("¿Cuantos números desea calcular de la serie de Fibonacci?")

let serieFib = [0, 1]

let elemento = 0;


for(let i=0; i<(num-2); i++){
    elemento = serieFib[serieFib.length-1] + serieFib[(serieFib.length-2)];
    
    serieFib.push(elemento);
}

console.log(`La serie de Fibonacci es la siguiente: (${serieFib}).`);