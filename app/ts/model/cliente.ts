class Cliente {

    constructor(protected _nome: string, protected _cpf: string, protected _conta: Conta ) {
    }

    get nome() : string {
        return this._nome;
    }

    set nome(novoNome : string) {
        this._nome = novoNome;
    }

    get cpf() : string {
        return this._cpf;
    }

    set cpf(novoCpf : string) {
        this._cpf = novoCpf
    }

    get conta() : Conta {
        return this._conta;
    }

    set conta(novaConta : Conta) {
        this._conta = novaConta;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Número da conta: ${this._conta.numero}`;
    }
}