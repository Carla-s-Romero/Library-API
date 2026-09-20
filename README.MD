
# 📚 API Biblioteca

API REST desenvolvida com **Node.js, Express e MongoDB** para gerenciamento de autores e livros.

O projeto implementa operações de **CRUD (Create, Read, Update e Delete)**, permitindo cadastrar, consultar, atualizar e excluir autores e livros, além de realizar buscas de livros por editora.

---

## 🚀 Tecnologias

* Node.js
* Express
* MongoDB
* Mongoose
* JavaScript
* dotenv
* Nodemon

### Dependências

```json
{
  "dotenv": "^17.4.2",
  "express": "^4.18.1",
  "mongodb": "^7.6.0",
  "mongoose": "^9.10.1",
  "nodemon": "^3.0.1"
}
```

---

## 📁 Estrutura do projeto

```text
📦 API Biblioteca
│
├── 📁 src
│   ├── 📁 config
│   │   └── dbconect.js
│   │
│   ├── 📁 controllers
│   │   ├── AuthorsControllers.js
│   │   └── bookControllers.js
│   │
│   ├── 📁 models
│   │   ├── Author.js
│   │   └── Livro.js
│   │
│   ├── 📁 router
│   │   ├── authorsRoutes.js
│   │   ├── booksRoutes.js
│   │   └── index.js
│   │
│   └── app.js
│
├── 📄 .env
├── 📄 .gitignore
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 server.js
└── 📄 README.md
```

---

## 🧠 Arquitetura

O projeto utiliza uma estrutura baseada na separação de responsabilidades entre **Routes, Controllers e Models**.

```text
                    ┌──────────────────┐
                    │     Cliente      │
                    │ Postman / Insomnia│
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │      Routes      │
                    │    Express.js    │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Controllers    │
                    │   Regras da API  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │      Models      │
                    │     Mongoose     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     MongoDB      │
                    └──────────────────┘
```

### Routes

Responsáveis por definir os endpoints da API.

### Controllers

Responsáveis por receber as requisições, executar as operações e retornar as respostas.

### Models

Responsáveis pela estrutura dos documentos e comunicação com o MongoDB através do Mongoose.

### Config

Responsável pela configuração da conexão com o banco de dados.

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Carla-s-Romero/Library-API.git
```

### 2. Acesse a pasta

```bash
cd Library-API
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
CONNECT_MONGODB=sua_string_de_conexao_mongodb
```

---

## ▶️ Executando o projeto

Para iniciar o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```

O projeto utiliza **Nodemon**, permitindo que o servidor seja reiniciado automaticamente sempre que houver alterações no código.

A API estará disponível em:

```text
http://localhost:3000
```

---

# 📡 Endpoints

### 👤 Autores

### Listar todos os autores

```http
GET http://localhost:3000/autores
```

### Buscar autor por ID

```http
GET http://localhost:3000/autores/:id
```

### Criar autor

```http
POST http://localhost:3000/autores
```

### Atualizar autor

```http
PUT http://localhost:3000/autores/:id
```

### Deletar autor

```http
DELETE http://localhost:3000/autores/:id
```

---

# 📚 Livros

### Listar todos os livros

```http
GET http://localhost:3000/livros
```

### Buscar livro por ID

```http
GET http://localhost:3000/livros/:id
```

### Criar livro

```http
POST http://localhost:3000/livros
```

Exemplo de Body:

```json
{
  "title": "Dom Casmurro",
  "description": "Romance de Machado de Assis",
  "price": 39.90,
  "pages": 256,
  "publisher": "Companhia das Letras",
  "author": "ID_DO_AUTOR"
}
```

### Atualizar livro

```http
PUT http://localhost:3000/livros/:id
```

### Deletar livro

```http
DELETE http://localhost:3000/livros/:id
```

---

# 🔎 Buscar livros por editora

A API possui uma rota específica para pesquisar livros utilizando o parâmetro `editora`.

### Endpoint

```http
GET http://localhost:3000/livros/query?editora=NomeDaEditora
```

### Exemplo

```http
GET http://localhost:3000/livros/query?editora=Companhia%20das%20Letras
```

Ou:

```text
http://localhost:3000/livros/query?editora=Abril
```

### Exemplo de resposta

```json
{
  "bookPublisher": [
    {
      "_id": "68c123456789",
      "title": "Dom Casmurro",
      "publisher": "Companhia das Letras"
    }
  ]
}
```

Caso não existam livros para a editora informada:

```json
{
  "message": "Não existem livros com essa editora"
}
```

---

### Fluxo

```text
CREATE
  │
  ├── POST /autores
  └── POST /livros
       │
       ▼
READ
  │
  ├── GET /autores
  └── GET /livros
       │
       ▼
UPDATE
  │
  ├── PUT /autores/:id
  └── PUT /livros/:id
       │
       ▼
DELETE
  │
  ├── DELETE /autores/:id
  └── DELETE /livros/:id
```

---

# 🗄️ Banco de dados

O projeto utiliza **MongoDB** para armazenamento dos dados.

A integração com o banco é realizada utilizando o **Mongoose**.

A conexão é configurada através da variável:

```env
CONNECT_MONGODB=sua_string_de_conexao
```

Exemplo:

```env
CONNECT_MONGODB=mongodb://localhost:27017/biblioteca
```

---

# 🧪 Testando a API

Você pode utilizar ferramentas como:

* Postman
* Insomnia
* Thunder Client
* REST Client
* cURL

### Exemplo utilizando cURL

Listar autores:

```bash
curl http://localhost:3000/autores
```

Listar livros:

```bash
curl http://localhost:3000/livros
```

Buscar livros por editora:

```bash
curl "http://localhost:3000/livros/query?editora=Abril"
```

---

# 📊 Status HTTP

| Código | Significado                      |
| :----: | -------------------------------- |
|  `200` | Requisição realizada com sucesso |
|  `201` | Recurso criado com sucesso       |
|  `404` | Recurso não encontrado           |
|  `500` | Erro interno do servidor         |

---

# 📚 Conceitos praticados

* ✅ Node.js
* ✅ Express.js
* ✅ API REST
* ✅ CRUD
* ✅ MongoDB
* ✅ Mongoose
* ✅ Models
* ✅ Controllers
* ✅ Routes
* ✅ HTTP Methods
* ✅ Route Parameters
* ✅ Query Parameters
* ✅ Status Codes
* ✅ Variáveis de ambiente
* ✅ Nodemon
* ✅ Tratamento de erros

---

# 🎯 Objetivo

Este projeto foi desenvolvido para colocar em prática conceitos fundamentais de desenvolvimento **Backend** utilizando o ecossistema JavaScript.

A aplicação simula uma API de biblioteca, permitindo o gerenciamento de **autores e livros** através de operações CRUD e consultas específicas.

---

⭐ Se este projeto foi útil, considere deixar uma estrela no repositório!
