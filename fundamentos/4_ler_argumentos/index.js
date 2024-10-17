//nome

console.log(process.argv);

const args = process.argv.slice(2)

console.log(args);

const nome = args[0].split("=")[1]

console.log(nome);

const idade = args[1].split("=")[1]

console.log(idade);

console.log(`O nome dele é ${nome} e ele tem ${idade} anos.`);


//ex: node ./index.js nome=JOão idade=30
//obs: para concatenação use crase ao invés de aspas. Use crase (``) para delimitar o template literal. As aspas simples ou duplas dentro do template literal não interferem na interpolação de variáveis