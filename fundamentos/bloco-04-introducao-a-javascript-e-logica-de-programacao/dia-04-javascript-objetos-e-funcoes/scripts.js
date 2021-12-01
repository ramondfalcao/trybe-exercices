// let info1= {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// }; let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
// };


// // console.log("Bem vinda, " + info.personagem)
// info1.recorrente = "sim"
// info2.recorrente = "sim"

// for ( let index in info2){
//   console.log(info1.personagem + " e " + info2.personagem)
//   console.log(info1.origem + info2.origem)
//   console.log(info1.nota + " e " + info2.nota)
//   if (info1.recorrente === "sim" && info2.recorrente === "sim"){
//     console.log("Ambos recorrentes")
//   } break
// }

//////////////////////////////////////

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + " se chama " + leitor.livrosFavoritos[0].titulo+ ".")

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco'
})

console.log(leitor.livrosFavoritos[1])