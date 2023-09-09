
const encontrarNumero = (num1, num2, num3) =>{

if (num1 > num2 && num1 > num3) {
    return num1;
}else if (num2 > num1 && num2 > num3){
    return num2;
}else{
    return num3;
};
};
let num1 = 1
let num2 = 2
let num3 = 3

let elMayorNUmeroEs = encontrarNumero(num1, num2, num3);
console.log('El numero es:',elMayorNUmeroEs)


   