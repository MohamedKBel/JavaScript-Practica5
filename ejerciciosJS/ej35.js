let num = [100, 2, 20, 35, 4, 44];

console.log(`El array iniciall es: (${num})`);

let numFinal = num.sort((a,b) => a-b).filter(el => el < 10);

console.log(`El array final es: (${numFinal})`);
