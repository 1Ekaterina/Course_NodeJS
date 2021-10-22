const colors = require('colors');

let a = process.argv[2];
let b = process.argv[3];
let color=1;
let notErorr = 0;

function prow(number){
    var i=2;
        while (i<=number/2){
            if (number%i==0){
                return false;  
            }
            i++; 
        }
    return true;
}

if((!isNaN(a)==true) && (!isNaN(b)==true)){
    for (let i=a; i<=b; i++){
        if(prow(i)==true){
            if(color%3==0){
                console.log(colors.red(i));
            } else if (color%2==0){
                console.log(colors.yellow(i));
            } else{
                console.log(colors.green(i));
            }
            color++;
            notErorr++;
        }
    }
} else{
    notErorr++;
    console.log(colors.yellow("Неверно введен промежуток!"));
}

if (notErorr==0){
    console.log(colors.red("В вашем диапазоне нет простых чисел!"));
}
