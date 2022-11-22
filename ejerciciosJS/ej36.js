function dosEdadesMasAltas(array){
    return array.sort((a,b) => b-a).slice(0,2)
    }
    

let array = [1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19];
console.log(dosEdadesMasAltas(array)); 