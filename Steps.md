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

# Criar tabela Delivery Man
