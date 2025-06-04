let nota1 = parseInt(prompt("NOTA 1"));
let nota2 = parseInt(prompt("NOTA 2"));

let soma = nota1 + nota2;
let media = soma / 2;

if(media >= 6){
    console.log("Aluno aprovado");
}else{
    console.log("Aluno Reprovado");
}