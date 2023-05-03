let nr1 = [1,2,3,4,5];
let nr2 =[4,6,8,10,9];
let nr3 =[nr1,nr2];

console.log(nr1);
console.log(nr2);
//console.log ("NOVO ARRAY" + nr3);

nr2.push(11);

nr3.forEach((numero)=>{
    console.log("ITEM DO ARRAY : " + numero);
});