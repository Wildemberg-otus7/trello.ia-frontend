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

## 📅 Scripts Disponíveis (via terminal local)

```bash
pnpm dev       # Roda localmente na porta 3002
pnpm build     # Gera a build de produção
pnpm start     # Roda em modo produção com a build feita
pnpm test      # Executa os testes unitários com cobertura
pnpm lint      # Roda o ESLint
```

> 💡 Também é possível rodar esses scripts via Docker (Recomendo fortemente que faça isso, para ter localmente um comportamento mais próximo do que é em produção). Veja detalhes em [docs/docker.md](./docs/docker.md).

---

## 📁 Estrutura de Pastas (resumo)

```bash
src/
├── app/             # Páginas do Next.js (App Router)
├── components/      # Componentes reutilizáveis
├── constants/       # Constantes globais
├── features/        # Domínios/Components com regras de negócio como auth, boards...
├── hooks/           # Hooks customizados
├── lib/             # Funções auxiliares
├── services/        # Requisições HTTP/API
├── store/           # Redux store (configuração)
├── types/           # Tipagens globais
```

---

## ✅ Funcionalidades já implementadas

- Cadastro e login com validação e feedback acessível
- Testes unitários com cobertura de tela e slice Redux
- Lint, build e CI/CD configurados
- Deploy gratuito via Vercel
- Docker funcional

---

## 🔁 Em desenvolvimento

- Integração com backend (NestJS + PostgreSQL)
- Criação de boards, listas e cards
- Armazenamento global com Zustand
- Features com IA embarcada
- Proteção de rotas e dashboard

---

## 🧠 Objetivo

Criar uma ferramenta moderna de gestão de tarefas com assistência de IA:

- Automatização de rotinas
- Sugestão de tarefas com base em comportamento
- Auxílio à produtividade

---

## 🛠️ Contribuições

Este projeto é open source e está aberto para contribuições após finalização do MVP.

Para contribuir:

1. Fork o repositório
2. Crie uma branch descritiva
3. Envie um Pull Request com descrição clara

---

## 📒 Documentação complementar

- [Docker](./docs/docker.md)
- [Estrutura de Pastas](./docs/structure.md)
- [Ambiente](./docs/environment.md)
- [Testes](./docs/testing.md)
- [Roadmap](./docs/roadmap.md)
- [Features de IA](./docs/ai-features.md)

---

## 📄 Licença

Licença será definida após a publicação oficial.

---

Desenvolvido com ❤️ por **Wildemberg de Jesus Oliveira**  
[LinkedIn](https://www.linkedin.com/in/wildemberg-de-jesus-oliveira/) – Desenvolvedor Fullstack Pleno
