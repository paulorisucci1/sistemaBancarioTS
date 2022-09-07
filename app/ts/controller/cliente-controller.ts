class ClienteController {

    private clientes : Clientes;
    private contas : Contas;
    private inputNome : HTMLInputElement;
    private inputCpf : HTMLInputElement;
    private inputNumeroConta : HTMLInputElement;

    constructor(contas : Contas, clientes: Clientes) {
        this.clientes = clientes;
        this.contas = contas;
        this.inputNome = <HTMLInputElement> document.querySelector('#nome');
        this.inputCpf = <HTMLInputElement> document.querySelector('#cpf');
        this.inputNumeroConta = <HTMLInputElement> document.querySelector('#numeroConta');
    }

    inserir(evento:Event) : void{
        evento.preventDefault();

        const novoCliente = this.criarCliente(this.inputNome.value, this.inputCpf.value, this.inputNumeroConta.value);

        this.inserirClienteNoHTML(novoCliente);
    }

    listar() : void {
        this.clientes.listar().forEach(
            cliente => this.inserirClienteNoHTML(cliente)
        );
    }

    private inserirClienteNoHTML(cliente : Cliente) : void {
        const paragrafo = this.criarParagrafoComDadosDoCliente(cliente);
        const botaoApagar = this.criarBotaoApagarCliente(cliente);
        paragrafo.appendChild(botaoApagar);
        document.body.appendChild(paragrafo);
    }

    private criarCliente(nome : string, cpf : string, numeroConta : string) : Cliente {

        const contaCliente = this.criarContaParaClienteSeNaoExistir(numeroConta);

        const novoCliente = new Cliente(nome, cpf, contaCliente);

        this.clientes.inserir(novoCliente);

        return novoCliente;
    }

    private criarContaParaClienteSeNaoExistir(numeroConta : string) : Conta {

        return this.contas.criarContaSeNaoExistir(numeroConta);
    }

    private criarParagrafoComDadosDoCliente(cliente : Cliente) : Element {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = cliente.toString();
        return paragrafo;
    }

    private criarBotaoApagarCliente(cliente : Cliente) : Element{
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', event => {
            console.log("Removendo cliente: "+ cliente.toString());
            this.clientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
        }
        );
        return botaoApagar;
    }
}