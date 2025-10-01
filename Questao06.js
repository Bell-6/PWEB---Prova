let prova1 = 8;
let prova2 = 6;

media = (prova1+prova2)/2;
console.log("Media: " + media );

if(media >= 6){
    console.log("Aprovado!");
}

else if (media >= 4 && media<=5.9){
    console.log("Recuperação!");
}

else if(media<4){
    console.log("Reprovado.");
}