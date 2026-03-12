import { Cliente, Empresa, Endereco, Telefone } from './modulo.js'


const enderecoEmpresa = new Endereco("SP", "Raccoon City", "Avenida Umbrella", 1998)

const empresa = new Empresa(
    "Umbrella Corporation Ltda",
    "Umbrella Corp",
    "19.980.912/0001-23",
    enderecoEmpresa
)

empresa.telefones.add(new Telefone("11", "3999-1998"))
empresa.telefones.add(new Telefone("11", "3999-1999"))

const endLeon = new Endereco("PR", "Raccoon City", "Rua dos Sobreviventes", 2)
const leon = new Cliente("Leon Scott Kennedy", "001.998.007-11", endLeon)
leon.telefones.add(new Telefone("41", "99001-1998"))
leon.telefones.add(new Telefone("41", "99001-1999"))

const endClaire = new Endereco("SC", "Raccoon City", "Travessa da Delegacia", 2)
const claire = new Cliente("Claire Redfield", "002.998.007-22", endClaire)
claire.telefones.add(new Telefone("48", "99002-1998"))
claire.telefones.add(new Telefone("48", "99002-1999"))

const endJill = new Endereco("RJ", "Raccoon City", "Rua do Nemesis", 3)
const jill = new Cliente("Jill Valentine", "003.998.007-33", endJill)
jill.telefones.add(new Telefone("21", "99003-1998"))
jill.telefones.add(new Telefone("21", "99003-1999"))

const endChris = new Endereco("MG", "Raccoon City", "Avenida S.T.A.R.S", 4)
const chris = new Cliente("Chris Redfield", "004.998.007-44", endChris)
chris.telefones.add(new Telefone("31", "99004-1998"))
chris.telefones.add(new Telefone("31", "99004-1999"))

const endAda = new Endereco("SP", "Raccoon City", "Beco do Agente Duplo", 5)
const ada = new Cliente("Ada Wong", "005.998.007-55", endAda)
ada.telefones.add(new Telefone("11", "99005-1998"))
ada.telefones.add(new Telefone("11", "99005-1999"))

empresa.clientes.add(leon)
empresa.clientes.add(claire)
empresa.clientes.add(jill)
empresa.clientes.add(chris)
empresa.clientes.add(ada)

empresa.detalhe()