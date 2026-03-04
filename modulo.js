export class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get cpf() { return this.#cpf }

    nomeUpper() { return this.nome.toUpperCase() }
    nomeLower() { return this.nome.toLowerCase() }
}

export class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

export class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    estadoUpper() { return this.estado.toUpperCase() }
    estadoLower() { return this.estado.toLowerCase() }

    cidadeUpper() { return this.cidade.toUpperCase() }
    cidadeLower() { return this.cidade.toLowerCase() }

    ruaUpper() { return this.rua.toUpperCase() }
    ruaLower() { return this.rua.toLowerCase() }
}

export class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cnpj() { return this.#cnpj }

    razaoSocialUpper() { return this.razaoSocial.toUpperCase() }
    razaoSocialLower() { return this.razaoSocial.toLowerCase() }

    nomeFantasiaUpper() { return this.nomeFantasia.toUpperCase() }
    nomeFantasiaLower() { return this.nomeFantasia.toLowerCase() }

    detalhe() {
        console.log(`Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n-------------------`)

        this.clientes.forEach(c => {
            let telefones = ""
            c.telefones.forEach(t => telefones += `DDD: ${t.ddd}     Número: ${t.numero}\n`)

            console.log(`Nome: ${c.nome}
Estado: ${c.endereco.estado}     Cidade: ${c.endereco.cidade}     Rua: ${c.endereco.rua}
${telefones}`)
        })
    }
}

