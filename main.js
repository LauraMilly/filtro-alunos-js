const alunos = [
  { nome: "Ana", nota: 7.5 },
  { nome: "Bruno", nota: 5.8 },
  { nome: "Carlos", nota: 6.0 },
  { nome: "Daniela", nota: 8.2 },
  { nome: "Eduardo", nota: 4.9 }
];

function filtrarAprovados(lista) {
  return lista.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
