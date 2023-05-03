let nr1 = [1,2,3,4,5];
let nr2 = [4,6,8,9,10];
// let nr3 =[nr1,nr2];

//console.log(nr1);
//console.log(nr2);
//console.log ("NOVO ARRAY" + nr3);

//OPERADOR SPREAD
let nr3 = [...nr1,...nr2];
console.log ("NOVO ARRAY " + nr3);

// nr3.forEach((numero)=>{
//    console.log("ITEM DO ARRAY : " + numero);
// });
const aElements = document.getElementsByTagName("a");
const aElementsArray = [...aElements];

aElementsArray.forEach((a)=>{
    console.log(a);
});


// Exercicios 
// 1 - Recupere uma coleção de imagens da página e imprima o 
// atributo src...

const imgElements = [...document.getElementsByTagName("img")];
//const imgElementsArray = [...imgElements];
//console.log(imgElements)

//IMPRIMINDO O ATRIBUTO DO SCR DO ELEMENTO COM O forEacth
imgElements.forEach((img)=>{
    console.log(`Patch das imagens : ${img.src}`)
});

const botao = document.querySelector("div > button");

botao.addEventListener("click", ()=>[
    alert("Tchau!!")
] );