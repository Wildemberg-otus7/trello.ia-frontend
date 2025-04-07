# Trello.ia – Frontend

Interface web do projeto **Trello.ia**, um clone do Trello com funcionalidades de inteligência artificial. Desenvolvido com foco em boas práticas, escalabilidade e open source.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** (React 19)
- **TypeScript**
- **SWR** – Cache e revalidação de dados
- **SSR + CSR**
- **Redux Toolkit** – Gerenciamento de estado
- **TailwindCSS** – Estilização
- **Jest + Testing Library** – Testes unitários
- **ESLint + Prettier** – Padrões de código
- **Yup** – Validação de dados
- **Docker** – Containerização do ambiente
- **.env.local** – Variáveis de ambiente

---

## 📦 Scripts Disponíveis

```bash
pnpm dev       # Executa o projeto em modo desenvolvimento na porta 3002
pnpm build     # Gera a build de produção
pnpm start     # Inicia a aplicação em modo produção
pnpm test      # Executa os testes unitários com Jest
pnpm lint      # Executa o ESLint
```

---

## 🐳 Docker

### 📁 Dockerfile (incluído)

A imagem é baseada em Node 20 Alpine e utiliza o `pnpm`.

### 📁 docker-compose.yml (exemplo de serviço isolado)

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

---

## ✅ Funcionalidades já implementadas

- Estrutura de pastas organizada
- Configuração de ambiente com `.env.local`
- ESLint + Prettier funcionando com TypeScript
- Testes Jest configurados com cobertura
- Teste de Redux (boardSlice) criado e aprovado
- Docker configurado com porta 3002
- Deploy gratuito via **Vercel**
- CI/CD automatizado com **GitHub Actions**

---

## 🔜 Próximas funcionalidades

- Tela de login e cadastro
- Integração com API do backend
- Boards e listas dinâmicas
- IA para sugestão de tarefas e rotinas

---

## 📁 Estrutura de pastas

```bash
src/
├── app/            # Páginas Next.js
├── components/     # Componentes reutilizáveis
├── constants/      # Constantes do projeto
├── features/       # Redux slices e lógica de estado
├── hooks/          # Hooks customizados
├── lib/            # Funções utilitárias
├── services/       # Comunicação com API
├── store/          # Configuração Redux
├── types/          # Tipagens globais
```

---

## 🧠 Objetivo

Criar um sistema de organização de tarefas inspirado no Trello, mas com **recursos de IA embarcados**, como:

- Sugestão de organização e automação
- Aprendizado com uso diário
- Assistente para rotinas

---

## 🛠️ Contribuições

Este projeto será **open source** e aceitamos contribuições assim que o MVP for concluído.

---

## 📄 Licença

Em breve definido.

---

Desenvolvido por **Wildemberg de Jesus Oliveira**  
Perfil: [LinkedIn](https://www.linkedin.com/in/wildemberg-de-jesus-oliveira/) – Desenvolvedor Fullstack Pleno
