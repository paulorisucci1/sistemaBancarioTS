class Clientes {

    private readonly clientes : Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    public inserir(novoCliente: Cliente) : void {
        this.clientes.push(novoCliente);
    }

    public pesquisar(cpf : String) : Cliente{
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    public listar() : Array<Cliente> {
        return this.clientes;
    }

    public remover(cpf : String) : void {
        const clienteRemovido = this.pesquisar(cpf);

        if(clienteRemovido != undefined) {
            const indexRemovedClient = this.clientes.indexOf(clienteRemovido);

            if(this.isIndexValid(indexRemovedClient)) {
                this.removeClient(indexRemovedClient);
            }
        }
    }

    private isIndexValid(index:number) : boolean {
        return index > -1;
    }

    private removeClient(indexRemovedClient:number) : void {
        this.clientes.splice(indexRemovedClient, 1);
    }
}