# 🧪 Teste Automatizado – Saucedemo (Desafio Auvo)

Este projeto tem como objetivo automatizar cenários de teste no site [SauceDemo](https://www.saucedemo.com/) como parte do desafio técnico da Auvo. A automação foi desenvolvida utilizando **JavaScript** com o framework **Playwright**, estruturado com a arquitetura **Page Object Model (POM)**.

---

## 📁 Estrutura do Projeto

A organização do projeto foi pensada para facilitar a **expansão**, **manutenção** e **modularidade** dos testes. Abaixo, a estrutura adotada:

```
/pages/
  ├── login/
  │   ├── index.js         # Métodos da página de login
  │   └── elements.js      # Seletores HTML (locators)
  ├── inventory/
  │   ├── index.js
  │   └── elements.js
  └── dados.js             # Dados de teste (usuários, produtos, etc.)

/tests/
  ├── login.spec.js
  ├── inventory.spec.js
  └── apenas_fluxo_solicitado.spec.js

playwright.config.js
package.json
README.md
```

---

## 💡 Estratégia

- Cada página funcional do sistema possui uma pasta com dois arquivos:
  - `index.js` → Classe com os métodos de interação (Page Object)
  - `elements.js` → Mapeamento dos seletores HTML da página
- Os dados utilizados (usuários, produtos) estão centralizados em `/pages/dados.js` para facilitar manutenção.
- Foi criada **uma spec para cada pagina** para demonstrar domínio da automação, criando mais testes.
- Foi criada uma **spec dedicada ao fluxo principal solicitado** (`apenas_fluxo_solicitado.spec.js`), que atende apenas o que foi solicitado no desafio.

---

## 🛠️ Ferramentas e Dependências

| Ferramenta         | Versão Recomendada |
| ------------------ | ------------------ |
| Node.js            | `v21.6.2`          |
| npm (vem com Node) | `v10.2.4`          |
| Playwright         | `v1.53.2`          |
| Visual Studio Code | `v1.101.2`         |

---

## 🔧 Como Executar o Projeto

### 📌 Clonar o repositório

```bash
git clone https://github.com/JoaoVitor-JO/teste_auvo.git
cd teste_auvo
```

### 📦 Instalar dependências

```bash
npm install
npx playwright install
```

### ▶️ Abrir o Test Runner (modo visual)

```bash
npx playwright test --ui
```

### 🧪 Executar os testes

- Para executar **todos os testes**:\
  Com o Playwright UI aberto, pressione `F5` ou clique em "Run All".

- Para executar **cenários individuais**:\
  No Playwright UI, clique no botão ▶️ ao lado do nome do cenário.

---

## 📂 Fluxo Principal x Fluxos Complementares

- O arquivo `apenas_fluxo_solicitado.spec.js` contém exclusivamente o cenário exigido pelo desafio.
- Os demais arquivos de testes demonstram cenários extras para validação de elementos, navegação, e boas práticas de verificação.

---

## 👨‍💻 Autor

**[João Vitor de Jesus Oliveira]**\
🔗 [LinkedIn](https://www.linkedin.com/in/joão-vitor-de-jesus-oliveira)\
📧 [seu.email@exemplo.com](mailto\:joao-vitorjc@hotmail.com)

---

## 📄 Licença

Este projeto é de caráter acadêmico/demonstrativo, com fins de avaliação técnica.

