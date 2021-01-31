const arr1 = [10,11,12,13];
const arr2 = [20,21,22,23,24];
const arr3 = [30,31,32];

const allages = arr1.concat(arr2).concat(5).concat(arr3);
const allarr = [...arr1, ...arr2, 5, ...arr3];
console.log(allarr);

const borolox = [100,600,700];
const tkpoysa = Math.max(...borolox);

console.log(tkpoysa);