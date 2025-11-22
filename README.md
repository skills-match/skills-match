# 🎯 Skills Match: Conectando Talento e Oportunidade

## Visão Geral do Projeto

**Skills Match** é uma plataforma web moderna e dinâmica, concebida para criar uma ponte eficiente entre talentos e as oportunidades de carreira mais adequadas. O projeto foca-se numa experiência de utilizador fluida, permitindo que os utilizadores se registem em etapas, gerenciem o seu perfil de forma abrangente e naveguem por um conjunto de páginas informativas essenciais.

## 🚀 Funcionalidades Principais

Esta aplicação de página única (SPA) foi desenvolvida com foco na robustez e na experiência do utilizador, oferecendo as seguintes funcionalidades:

| Funcionalidade | Descrição |
| :--- | :--- |
| **Autenticação Completa** | Fluxos seguros de **Login** e **Registo** de utilizadores. |
| **Cadastro em Etapas** | Formulário de registo dividido em fases para uma recolha de dados organizada e progressiva. |
| **Gestão de Perfil** | Área privada para o utilizador visualizar e gerir as suas informações e competências. |
| **Navegação Informativa** | Páginas públicas como **Home**, **Sobre** (detalhes do projeto) e **FAQ** (perguntas frequentes). |
| **Serviços de Backend** | Comunicação com um backend principal em **Java Quarkus** e um serviço de formulários dedicado em **Flask Python**. |

O Skills Match é construído sobre uma arquitetura moderna e escalável, utilizando as seguintes tecnologias de ponta:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Frontend Core** | **React** | Biblioteca JavaScript para construção da interface de utilizador. |
| **Linguagem** | **TypeScript** | Superset tipado do JavaScript, garantindo maior segurança e manutenibilidade do código. |
| **Build Tool** | **Vite** | Ferramenta de construção rápida para desenvolvimento frontend. |
| **Estilização** | **Tailwind CSS** | Framework CSS *utility-first* para um design responsivo e rápido. |
| **Rotas** | **React Router DOM** | Solução padrão para navegação e gestão de rotas na SPA. |
| **Gestão de Estado/Dados** | **TanStack Query** | Gestão eficiente de dados assíncronos, *caching* e sincronização de estado. |
| **Formulários** | **React Hook Form** | Solução de alto desempenho e flexível para gestão de formulários. |
| **Ícones** | **Lucide Icons** | Conjunto de ícones moderno e leve para a interface. |

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou **yarn**) instalados na sua máquina.

### Passos

1.  **Clonar o Repositório:**
    ```bash
    git clone https://github.com/skills-match/skills-match.git
    cd skills-match-main
    ```

2.  **Instalar Dependências:**
    ```bash
    npm install
    ```

3.  **Configurar Variáveis de Ambiente:**
    Crie um ficheiro \`.env.local\` na raiz do projeto e defina as variáveis de ambiente necessárias para a comunicação com os serviços de backend.

    ```bash
    # Exemplo de .env.local
    VITE_API_URL="http://seu-backend-quarkus.com/api"
    VITE_API_URL_FORM="http://seu-backend-flask.com/forms"
    ```

4.  **Iniciar o Frontend (Aplicação React):**
    Este comando inicia a aplicação de desenvolvimento na porta `5173`.
    ```bash
    npm run dev
    # Aplicação disponível em: http://localhost:5173
    ```

## 📂 Estrutura do Projeto

A estrutura de pastas segue uma organização modular e lógica, facilitando a manutenção e o desenvolvimento:

```
src/
├── components/             # Componentes reutilizáveis
│   ├── section/            # Componentes de secção (maiores)
│   └── ui/                 # Componentes de interface (botões, inputs, etc.)
│   ├── AppRoutes.tsx       # Definição das rotas da aplicação
│   └── PrivateRoute.tsx    # Componente para rotas protegidas
├── contexts/               # Contextos globais (ex: AuthContext)
├── data/                   # Dados estáticos ou mocks
├── hooks/                  # Hooks personalizados
├── interfaces/             # Definições de tipos TypeScript
├── routes/                 # Páginas/Rotas principais
│   ├── home/
│   ├── login/
│   ├── etapas/             # Fluxo de cadastro em etapas
│   ├── perfil/             # Página de perfil do utilizador
│   └── outras rotas...
├── services/               # Lógica de comunicação com a API
├── utils/                  # Funções utilitárias
├── App.tsx                 # Componente principal
├── index.css               # Estilos globais
└── main.tsx                # Ponto de entrada da aplicação
```

### Arquivos de Configuração Importantes
*   `package.json`: Metadados do projeto e lista de dependências.
*   `vite.config.ts`: Configuração do *bundler* Vite.
*   `tailwind.config.ts`: Configuração do Tailwind CSS.
*   `.gitignore`: Arquivos e pastas a serem ignorados pelo Git.
*   \`.env.example\`: Exemplo de variáveis de ambiente, incluindo \`VITE_API_URL\` e \`VITE_API_URL_FORM\`.

## 🔗 Rotas da Aplicação

| Rota | Descrição | Acesso |
| :--- | :--- | :--- |
| `/` ou `/home` | Página inicial da plataforma. | Público |
| `/sobre` | Informações detalhadas sobre o projeto. | Público |
| `/faq` | Perguntas Frequentes. | Público |
| `/login` | Formulário de acesso (Login). | Público |
| `/registrar` | Formulário de registo (Registo). | Público |
| `/etapas` | Fluxo de cadastro em etapas. | Privado |
| `/perfil` | Painel de gestão do perfil do utilizador. | Privado |
| `*` | Página de erro (404 - Não Encontrado). | Público |

## Imagens

![Screenshot 2025-11-22 012351](https://github.com/user-attachments/assets/173d133f-f3f1-425d-b11b-e0f189dd82a7)
![Screenshot 2025-11-22 012413](https://github.com/user-attachments/assets/c87ca877-5607-4edc-afcd-aface6967673)
![Screenshot 2025-11-22 012441](https://github.com/user-attachments/assets/0d2138fd-720b-421c-80c4-1de879dc352f)
![Screenshot 2025-11-22 012659](https://github.com/user-attachments/assets/5a29f2f4-8a53-4d0f-a395-b7a4f5d2955a)
![Screenshot 2025-11-22 012639](https://github.com/user-attachments/assets/7f064983-79f2-4623-b1e1-d99e195163cd)

Link Repositório: https://github.com/skills-match/skills-match/

## 👨‍💻 Equipe

| Nome Completo           | RM     | Turma |
| ----------------------- | ------ | ----- |
| Iago Liziero            | RM564063 | 1TDSPG |
| Enrico Delesporte          | RM565760 | 1TDSPG |
| Vitor Souza             | RM565422 | 1TDSPG |
