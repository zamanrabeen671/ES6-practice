const person = {Name: 'rabeen', age: 21, job: "student", phone: "01823345678"};
const {phone, Name, age, gf} = {Name: 'rabeen', age: 21, job: "student", phone: "01823345678"};
console.log(phone);
console.log(Name);
console.log(gf);

const Lang = ['c', 'c++', 'python', 'JavaScript','Java', 'C#'];
const [kothin, kothinPro,valoPro,crush,...marattok] = Lang;
console.log(kothin);
console.log(kothinPro);
console.log(valoPro);
console.log(marattok);