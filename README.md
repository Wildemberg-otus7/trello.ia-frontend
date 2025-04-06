# 🧠 Trello.ia – Projeto Fullstack com IA integrada

Este é um projeto fullstack inspirado no Trello, com suporte a funcionalidades inteligentes via IA. Desenvolvido com foco em boas práticas, arquitetura limpa, testes automatizados, CI/CD e deploy em produção.

---

## 📦 Tecnologias Utilizadas

### 🧩 **Frontend** (Next.js + React)

- **Next.js 15** – App Router, SSR, optimizações modernas
- **React 19** – Biblioteca principal de UI
- **TypeScript** – Tipagem estática e confiável
- **Tailwind CSS** – Estilização rápida e responsiva
- **Shadcn UI** – Componentes acessíveis baseados em Tailwind
- **Redux Toolkit** – Estado global estruturado por domínio
- **Zustand** – Estado leve (modais, interações locais)
- **Jest + React Testing Library** – Testes unitários
- **Cypress** – Testes E2E com fluxo de usuário

### ⚙️ **Backend** (NestJS)

- **NestJS** – Estrutura modular e escalável com TypeScript
- **Prisma ORM** – Acesso ao banco de dados com schema tipado
- **PostgreSQL** – Banco relacional (via Docker)
- **JWT** – Autenticação segura por token
- **Supertest + Jest** – Testes de integração e e2e no backend

### ☁️ **Infraestrutura**

- **Docker + Docker Compose** – Containerização do banco
- **CapRover** – Deploy self-hosted do backend
- **Vercel** – Deploy automático do frontend
- **GitHub Actions** – CI/CD com testes e deploy automático

---

## 📁 Estrutura geral do backend

```
├── src/
│   ├── main.ts                     # Bootstrap da aplicação NestJS
│   ├── app.module.ts               # Módulo raiz
│   ├── modules/                    # Domínios (boards, auth, etc)
│   │   ├── boards/                 # CRUD e lógica de Boards
│   │   └── auth/                   # Login, JWT, guardas
│   ├── shared/                     # Interceptadores, filtros, decorators
│   ├── prisma/                     # Schema e client do Prisma
│   ├── config/                     # Variáveis de ambiente e loaders
│   └── main.test.ts                # Teste de bootstrap
│
├── test/                           # Testes E2E com Supertest
├── docker-compose.yml              # Banco de dados PostgreSQL
├── .env                            # Variáveis do ambiente
├── jest.config.ts                  # Configuração dos testes
├── tsconfig.json                   # TypeScript config
```

---

## 🚀 Como rodar o projeto

Instruções de instalação e execução virão na próxima etapa.

---

## 📌 Status

✅ Estrutura inicial completa  
🚧 Desenvolvimento em andamento  
☑️ MVP definido e em construção

---

## 🧑‍💻 Autor

Desenvolvido por **Will**  
Perfil: [LinkedIn](https://www.linkedin.com/in/wildemberg-de-jesus-oliveira/) – Desenvolvedor Fullstack JS/.NET
