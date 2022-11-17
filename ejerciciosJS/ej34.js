const días = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes','sabado', 'domingo']

let díasFiltrados = días.filter(Element => Element.charAt(0) == 'm');

console.log(`El array final ya filtrado es este : (${díasFiltrados}.)`);