# Criado estrutura do Projeto

Gerar pasta do projeto:

```bash
mkdir pasta-do-projeto
```

Iniciar projeto:

```bash
yarn init -y
```

Instalar dependências de Desenvolvimento:

```bash
yarn add prisma typescript ts-node @types/express @types/jsonwebtoken @types/bcrypt @types/node -D
```

Instalar dependências:

```bash
yarn add express bcrypt jsonwebtoken @prisma/client
```

Gerar `tsconfig.json`:

```bash
yarn tsc --init
```

Seguir o padrão de configurações que o Prisma Docs sugere. Substituir conteúdo do `tsconfig.json` por:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

# Criar Tabelas no banco de Dados

Iniciar Prisma

```bash
yarn prisma init
```

Inserir credenciais do banco de dados no arquivo `.env`

Adicionar ao arquivo `schema.prisma`:

Tabela `deliveryman`

```prisma
model Deliveryman {
  id       String @id @default(uuid())
  username String @unique
  password String

  Deliveries Deliveries[]
  @@map("deliveryman")
}
```

Tabela `clients`

```prisma
model Clients {
  id       String @id @default(uuid())
  name     String @unique
  password String

  Deliveries Deliveries[]
  @@map("clients")
}
```

Tabela `deliveries`

```prisma
model Deliveries {
  id             String      @id @default(uuid())
  id_client      String
  client         Clients     @relation(fields: [id_client], references: [id])
  id_deliveryman String
  deliveryman    Deliveryman @relation(fields: [id_deliveryman], references: [id])
  item_name      String
  created_at     DateTime    @default(now())
  end_at         DateTime    @default(now())

  @@map("deliveries")
}
```

Rodar migration:

```bash
yarn prisma migrate dev
```

OBS: A ordem das criações podem gerar erros!

# Criando o server com express

Criar pasta `src`

```bash
mkdir src
```

Criar arquivo `server` dentro de `src`

```ts
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({
    message: "SERVER IS RUNNING!",
  });
});

app.listen(3000, () => console.log("SERVER IS RUNNING!"));
```

Gerar configuração de Script no `package.json` :

```json
"scripts": {
  "dev": "ts-node-dev --exit-child --transpile-only --ignore-watch node_modules src/server.ts"
},
```
