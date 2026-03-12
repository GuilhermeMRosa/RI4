# RI4 — Orientação a Objetos com JavaScript

**Disciplina:** Análise e Desenvolvimento de Sistemas  
**Professor:** Gerson  
**Instituição:** FATEC São José dos Campos  

---

## 📋 Sobre a atividade

As RIs são atividades propostas pelo professor com o objetivo de colocar em prática os conceitos ensinados em aula. Esta atividade faz parte do módulo de **JavaScript com Orientação a Objetos**.

## 🧩 Desafio proposto

Refatorar o sistema desenvolvido na RI3 aplicando o conceito de **módulos em JavaScript (ES Modules)**, separando as classes em um arquivo dedicado (`modulo.js`) e importando-as no arquivo principal (`index.js`).

As classes permanecem as mesmas da RI3:

- **Telefone** — armazena DDD e número
- **Endereco** — armazena estado, cidade, rua e número
- **Cliente** — compõe `Endereco` e uma coleção de `Telefone`, com CPF protegido
- **Empresa** — compõe `Endereco`, uma coleção de `Cliente` e uma de `Telefone`, com CNPJ protegido

## 🗂️ Estrutura do projeto
```
RI4/
├── index.js     # Instanciação dos objetos e execução
└── modulo.js    # Definição e exportação das classes
```

## 🔄 Evolução em relação à RI3

| Aspecto | RI3 | RI4 |
|---|---|---|
| Organização | Tudo em um único arquivo | Separado em módulos |
| Exportação | — | `export class` |
| Importação | — | `import { ... } from './modulo.js'` |
| Reusabilidade | Baixa | Alta — módulo reutilizável |

## 🧠 Conceitos praticados

- **ES Modules** com `import` e `export` em JavaScript
- Separação de responsabilidades entre arquivos
- Reaproveitamento de código via módulos reutilizáveis
- Todos os conceitos da RI3: classes ES6, campos privados com `#`, `Set`, getters e composição de objetos

## 🚀 Como executar
```bash
# Clone o repositório
git clone https://github.com/GuilhermeMRosa/RI4.git

# Acesse a pasta
cd RI4

# Execute no terminal (Node.js necessário)
node --experimental-vm-modules index.js

# Ou, se o package.json tiver "type": "module":
node index.js
```

---

> Desenvolvido como parte das atividades avaliativas do curso de ADS — FATEC São José dos Campos.
