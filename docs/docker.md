# 📦 Documentação Docker – Trello.ia Frontend

Este guia cobre como utilizar o Docker para rodar, testar e construir o projeto **Trello.ia - Frontend** em um ambiente isolado e padronizado.

---

## 🐳 Dockerfile

A imagem é baseada no **Node 20 Alpine** com `pnpm` como gerenciador de pacotes. Ela é configurada para executar o projeto em ambiente de produção.

### Principais instruções:

- Instala dependências via `pnpm install`
- Copia os arquivos necessários
- Realiza `pnpm build`
- Expõe a porta `3002`

---

## 🛠 docker-compose.yml

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
    container_name: trelloia-frontend
    restart: unless-stopped
    ports:
      - '3002:3002'
    env_file:
      - .env.local
```

> ⚠️ Certifique-se de que o arquivo `.env.local` esteja presente na raiz do projeto antes de subir o container.

---

## ▶️ Comandos úteis

### 📌 Subir o projeto

```bash
docker-compose up -d
```

### 🔄 Subir com rebuild (após mudanças importantes)

```bash
docker-compose up -d --build
```

### 🛑 Parar o container

```bash
docker-compose down
```

---

## 📂 Acessar o container

```bash
docker exec -it trelloia-frontend sh
```

### Ver logs em tempo real

```bash
docker logs -f trelloia-frontend
```

---

## ⚙️ Rodar scripts dentro do container

Você pode executar qualquer script disponível no `package.json` com:

```bash
docker-compose exec frontend pnpm <script>
```

### Exemplos:

```bash
docker-compose exec frontend pnpm dev       # Inicia em modo desenvolvimento

docker-compose exec frontend pnpm build     # Gera build de produção

docker-compose exec frontend pnpm start     # Inicia a build em modo produção

docker-compose exec frontend pnpm test      # Executa testes unitários

docker-compose exec frontend pnpm lint      # Roda o ESLint

docker-compose exec frontend pnpm format    # Faz a formatação automática do projeto
```

---

## 🔁 Outras dicas úteis

| Ação                           | Comando                    |
| ------------------------------ | -------------------------- |
| Ver containers em execução     | `docker ps`                |
| Ver imagens locais             | `docker images`            |
| Remover containers parados     | `docker container prune`   |
| Remover imagens não utilizadas | `docker image prune -a`    |
| Alterar porta (ex: 3003)       | Edite `docker-compose.yml` |

---

## 🧪 Desenvolvimento e Hot Reload

Durante o desenvolvimento, o ideal é montar um volume entre sua máquina e o container para permitir hot reload:

```yaml
volumes:
  - .:/app
```

> Exemplo completo dessa config pode ser documentado futuramente no `docker-compose.override.yml`

---

## ✅ Checklist Docker

- [x] Dockerfile pronto e funcional
- [x] docker-compose com `.env.local`
- [x] Porta 3002 disponível
- [x] Scripts testados com `pnpm`
- [x] Compatível com Vercel (deploy opcional)

---

Em caso de dúvidas, pode me contatar [LinkedIn](https://www.linkedin.com/in/wildemberg-de-jesus-oliveira/). 💬
