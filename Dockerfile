# Dockerfile
FROM node:20-alpine

# Instala o que o pnpm precisa
RUN apk add --no-cache curl bash

# Ativa o pnpm com corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Define diretório de trabalho
WORKDIR /app

# Copia apenas arquivos de dependência primeiro
COPY package.json pnpm-lock.yaml ./

# Instala as dependências com lockfile travado
RUN pnpm install --frozen-lockfile

# Copia o restante do projeto
COPY . .

# Build da aplicação Next.js
RUN pnpm build

# Expõe a porta configurada (3002)
EXPOSE 3002

# Inicia o app no modo desenvolvimento
CMD ["pnpm", "run", "dev"]
