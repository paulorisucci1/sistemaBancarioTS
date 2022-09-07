const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const contas = new Contas();
contas.inserir(c1);
contas.inserir(p1);
contas.inserir(cb1);

const contaController = new ContaController(contas);

const clienteJose = new Cliente("José", "12345678987", c1);
const clienteJoao = new Cliente("João", "12345678910", p1);
const clienteMaria = new Cliente("Maria", "01234567898", cb1);
const clienteRita = new Cliente("Rita", "12345678912", c1);
const clienteJoaquim = new ClienteEspecial("Joaquim", "12345678999", c1);

const clientes = new Clientes();

clientes.inserir(clienteJose);
clientes.inserir(clienteJoao);
clientes.inserir(clienteMaria);
clientes.inserir(clienteRita);
clientes.inserir(clienteJoaquim);

console.log("clientes.listar: ");
console.log(clientes.listar());

console.log("clientes.pesquisar(clientMaria): ");
console.log(clientes.pesquisar(clienteMaria.cpf));

console.log("Removendo cliente: ");
console.log(clientes.pesquisar(clienteJose.cpf));
clientes.remover(clienteJoao.cpf);

console.log("Listando novamente: ");
console.log(clientes.listar());

const clienteController = new ClienteController(contas, clientes);

clienteController.listar();


clienteJoaquim.adicionarDependente(clienteJose);
clienteJoaquim.adicionarDependente(clienteRita);

console.log("Listagem dos dependentes de Joaquim");
console.log(clienteJoaquim.listarDependentes());