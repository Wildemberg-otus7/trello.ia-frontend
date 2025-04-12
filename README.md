# Trello.ia – Frontend

Interface web do projeto **Trello.ia**, um sistema de organização de tarefas inspirado no Trello com recursos de **Inteligência Artificial** embarcados. Construído com foco em **escalabilidade, boas práticas de código** e **open source**.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** (React 19)
- **TypeScript**
- **SWR** – Cache e revalidação de dados
- **SSR + CSR**
- **Redux Toolkit** (Zustand e useReducer futuramente)
- **TailwindCSS**
- **Yup + React Hook Form**
- **Jest + Testing Library**
- **ESLint + Prettier**
- **Docker + Docker Compose**
- **GitHub Actions** (CI/CD)

---

## 📅 Scripts Disponíveis

```bash
pnpm dev       # Roda localmente na porta 3002
pnpm build     # Gera a build de produção
pnpm start     # Roda em modo produção com a build feita
pnpm test      # Executa os testes unitários com cobertura
pnpm lint      # Roda o ESLint
```

---

## 📅 Comandos extras para resolver problemas

Caso ocorra erro de permissão no `.next`:

```bash
sudo chown -R $USER:$USER .next
rm -rf .next
pnpm run build
```

---

## 💪 Docker

### Dockerfile

- Baseado em **Node 20 Alpine**
- Usa **pnpm** como gerenciador

### docker-compose.yml

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

### Comandos Docker úteis

| Ação                     | Comando                                                  |
| ------------------------ | -------------------------------------------------------- |
| Subir imagem             | `docker-compose up -d`                                   |
| Subir imagem com rebuild | `docker-compose up -d --build`                           |
| Parar containers         | `docker-compose down`                                    |
| Ver logs                 | `docker logs -f trelloia-frontend`                       |
| Acessar container        | `docker exec -it trelloia-frontend sh`                   |
| Ver containers ativos    | `docker ps`                                              |
| Ver imagens locais       | `docker images`                                          |
| Remover container parado | `docker container prune`                                 |
| Mudar porta (ex: 3003)   | Edite `docker-compose.yml` e rode `docker-compose up -d` |

---

## 📁 Estrutura de Pastas

```bash
src/
├── app/             # Rotas e páginas do Next.js (App Router)
│   ├── login/       # Página de login
│   └── signUp/      # Página de cadastro
├── components/      # Componentes reutilizáveis (botões, inputs, etc)
│   └── ui/          # Design System baseado no ShadCN
├── constants/       # Constantes globais (mensagens, estados, rotas)
├── features/        # Lógica de estado por domínio (ex: auth, boards)
│   ├── auth/        # Telas, validações e actions de autenticação
│   └── boards/      # Redux slice para boards
├── hooks/           # Hooks customizados (ex: useToggle)
├── lib/             # Funções auxiliares genéricas
├── services/        # Integração com APIs e backends
├── store/           # Configuração do Redux (store, middleware, etc)
├── types/           # Tipagens globais do projeto
```

---

## ✅ Funcionalidades já implementadas

- Cadastro e login validados com React Hook Form + Yup
- Validações com mensagens acessíveis (ARIA)
- Testes unitários com cobertura de login, signup e slice do Redux
- Build e lint configurados
- CI/CD com GitHub Actions
- Deploy gratuito via Vercel
- Docker e docker-compose funcional para desenvolvimento

---

## 🔁 Em desenvolvimento (roadmap próximo)

- Integração real com backend NestJS + PostgreSQL
- Armazenamento global do usuário (Zustand + localStorage)
- Criação de boards, listas e cards
- Funções de IA: sugestão de tarefas, aprendizado de rotinas
- Tela de dashboard e perfil
- Proteção de rotas (middleware + cookie/token)

---

## 🧠 Objetivo

O Trello.ia tem como objetivo se tornar uma ferramenta moderna de gestão de tarefas com assistência de IA:

- Automatização de rotinas
- Sugestão de tarefas com base em comportamento
- Auxílio a foco e produtividade

---

## 🛠️ Contribuições

Este projeto é open source e está aberto para contribuições a partir da finalização do MVP.

Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch com a feature ou correção
3. Envie um Pull Request explicando sua alteração

---

## 📄 Licença

Licença será definida após a publicação oficial.

---

Desenvolvido com ❤️ por **Wildemberg de Jesus Oliveira**  
Perfil: [LinkedIn](https://www.linkedin.com/in/wildemberg-de-jesus-oliveira/)  
Cargo: Desenvolvedor Fullstack Pleno
