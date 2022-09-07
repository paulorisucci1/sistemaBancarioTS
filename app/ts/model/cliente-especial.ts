class ClienteEspecial extends Cliente {

    private _dependentes : Clientes;

    constructor(_nome: string, _cpf: string, _conta: Conta) {
        super(_nome, _cpf, _conta);
        this._dependentes = new Clientes();
    }

    public listarDependentes() : Array<Cliente>{
        return this._dependentes.listar();
    }

    public pesquisarDependente(dependente : Cliente) : Cliente {
        return this._dependentes.pesquisar(dependente.cpf);
    }

    public adicionarDependente(novoDependente : Cliente) : void {
        this._dependentes.inserir(novoDependente);
    }

    public removerDependente(dependenteRemovido : Cliente) : void {
        this._dependentes.remover(dependenteRemovido.cpf);
    }
}