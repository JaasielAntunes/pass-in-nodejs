<h1 align="center">
  Aplicação Backend desenvolvida durante a Trilha de NodeJS no evento NLW Unite promovido pela <a href="https://app.rocketseat.com.br/home">Rocketseat</a>.
</h1>

<p align="center">
  <a href="LICENSE"><img  src="https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge" alt="License"></a>
</p>

---

## 📁 Sobre o projeto

O Pass-In é uma API que consiste em um sistema de gerenciamento de eventos online no qual existe a área de eventos e participantes.
Abaixo encontra-se os requisitos funcionais, regras de negócio e requisitos não funcionais da aplicação.

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

---

## Banco de dados

Nessa aplicação vamos utilizar o banco de dados relacional (SQL). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.

### Estrutura do banco de dados

```sql
-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "check_ins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendeeId" INTEGER NOT NULL,
    CONSTRAINT "check_ins_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "attendees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "attendees_event_id_email_key" ON "attendees"("event_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "check_ins_attendeeId_key" ON "check_ins"("attendeeId");
```

---

## Requisitos

- Node.js versão 20 ou superior

---

## 💻 Tecnologias

- Prisma
- SQLite
- Fastify
- Zod
- FakerJS
- JavaScript
- Typescript
- Dotenv
- DayJS
- Swagger UI

---

## 💡 Utilização
1. Clone o projeto:

```
$ git clone https://github.com/JaasielAntunes/pass-in-nodejs.git
```

2. Acesse a pasta do projeto:

```
$ cd pass-in-nodejs
```

3. Instale as dependências:

```
$ npm install
```

4. Execute:

```
$ npx prisma migrate dev
```

5. Inicie o servidor:

```
$ npm run dev
```

## 💻 HTTP - Servidor disponível na URL: http://localhost:3333

### POST `/events`

Criar um evento.

#### Corpo da requisição

```json
{
    "title": "NLW Unite",
    "details": "Evento sobre programação em várias linguagens.",
    "slug": "nlw-unite",
    "maximumAttendees": 1500
}
```

### POST `/events/attendeeId/attendees`

Cadastrar um participante.

#### Corpo da requisição

```json
{
    "name": "João Lucas",
    "email": "joao@example.com"
}
```

### GET `/events/eventId`

Buscar um evento.

### GET `/events/attendeeId/attendees`

Buscar participantes de um evento.

### GET `/attendees/attendeeId/badge`

Buscar crachá de um participante.

### GET `/attendees/attendeeId/check-in`

Check-in de um participante.

---

## ✅ Sugestão
- Utilize o Postman ou Insomnia para testar as requisições.

---

<h4 align="center">
  Feito com ❤️ por Jaasiel Antunes - <a href="mailto:contato.jaasiel@gmail.com.com">Entre em contato</a>
</h4>

<p align="center">
  <a href="https://www.linkedin.com/in/jaasiel-antunes-1517b41bb">
    <img alt="Jaasiel Antunes" src="https://img.shields.io/badge/LinkedIn-Jaasiel-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
</p>
