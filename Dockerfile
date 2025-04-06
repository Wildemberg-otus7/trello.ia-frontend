# Dockerfile
FROM node:20-alpine

RUN apk add --no-cache curl bash

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . .


RUN pnpm install --frozen-lockfile

RUN pnpm build

EXPOSE 3002

CMD ["pnpm", "run", "dev"]
