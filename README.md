
# Automation OrangeHRM - Testes Automatizados com Cypress

Este projeto contém scripts automatizados para o sistema **OrangeHRM** utilizando **Cypress** para testes end-to-end. Ele inclui comandos customizados para facilitar o login e o preenchimento de informações de funcionários de forma dinâmica usando dados aleatórios gerados pela biblioteca **Faker**.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) versão **v22.13.1**
- [Cypress](https://www.cypress.io/) - Framework de testes automatizados para aplicações web.
- [Faker.js](https://github.com/faker-js/faker) - Biblioteca para geração de dados aleatórios (nomes, datas, números, etc.).

---

## Instalação

### 1. Instalar Node.js

Baixe e instale a versão recomendada (v22.13.1) do Node.js no site oficial:

- [https://nodejs.org/](https://nodejs.org/)

Após a instalação, confirme que o Node.js está instalado com:

```bash
node -v
```

### 2. Inicializar o projeto e instalar Cypress e Faker

No diretório do projeto, execute:

```bash
npm init -y
npm install cypress @faker-js/faker --save-dev
```

- `cypress` será usado para criar e executar os testes automatizados.
- `@faker-js/faker` é a biblioteca para geração de dados aleatórios.

---

## Comandos Customizados

### `login`

Realiza o login no sistema OrangeHRM usando credenciais armazenadas nas variáveis de ambiente do Cypress.

- Visita a página de login:  
  `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`
- Preenche os campos de usuário e senha.
- Submete o formulário.
- Verifica se o redirecionamento para o dashboard foi realizado com sucesso.

### `preencherInfo`

Preenche um formulário de cadastro de funcionário com dados gerados aleatoriamente.

- Gera nome, sobrenome, número da carteira de motorista e datas aleatórias usando Faker.
- Navega até o módulo de PIM (gestão de pessoal).
- Adiciona um novo funcionário com os dados gerados.
- Confirma se o cadastro foi salvo com sucesso.
- Atualiza informações pessoais adicionais (número da carteira, validade da carteira, nacionalidade, estado civil, data de nascimento, gênero).
- Verifica se a atualização foi confirmada com sucesso.

---

## Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/kfdev1996/automation_OrangeHRM.git
   cd automation_OrangeHRM
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure suas variáveis de ambiente `usuario` e `senha` no arquivo `cypress.env.json` ou via variáveis de ambiente do sistema:
   ```json
   {
     "usuario": "seu_usuario",
     "senha": "sua_senha"
   }
   ```
4. Execute os testes com Cypress:
   ```bash
   npx cypress open
   ```
   ou
   ```bash
   npx cypress run
   ```

---

## Observações

- O comando `preencherInfo` depende da estrutura atual da aplicação OrangeHRM e pode precisar de ajustes caso o layout ou identificadores mudem.
- Os dados são gerados dinamicamente para garantir testes mais robustos e evitar conflitos com dados repetidos.

---

## Contato

Kaíque Fernandes  
[GitHub](https://github.com/kfdev1996) | [LinkedIn](https://www.linkedin.com/in/kaiquefernandess/)

---

**Este projeto é uma automação básica para fins de aprendizado e testes na aplicação OrangeHRM.**
