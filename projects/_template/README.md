# 📂 Project Template

> Copie esta pasta como base para adicionar um novo projeto ao ForbesFolio.
> Renomeie a pasta com o slug do projeto (ex: `vault-tech-website`).

## Estrutura Esperada

```
projects/
└── nome-do-projeto/
    ├── README.md       ← Este arquivo (preenchido)
    ├── cover.png       ← Imagem de capa (16:9, mín. 800x450px)
    └── assets/         ← Opcional: imagens extras, diagramas, etc.
```

---

## Como Adicionar um Novo Projeto

1. Duplique a pasta `_template/` para `projects/seu-projeto/`
2. Preencha o `README.md` com os dados do projeto
3. Adicione a imagem de capa (`cover.png` ou `cover.jpg`)
4. Registre o projeto em `website/src/data/projects.js`
5. Copie a imagem de capa para `website/public/images/projects/`
6. Abra um PR — o CI validará automaticamente

---

<!-- ⬇️ INÍCIO DO TEMPLATE — Preencha abaixo ⬇️ -->

# [Nome do Projeto]

> Breve descrição de uma linha do que o projeto faz (Aparece na página da revista).

## 📋 Informações

| Campo | Valor |
|-------|-------|
| **Categoria** | `Web Development` / `UI/UX Design` / `Data Analysis` / `DevOps` |
| **Ano** | `2025` |
| **Cliente/Empresa** | Nome do cliente ou empresa |
| **Papel** | Seu papel no projeto (ex: Full-Stack Developer) |

## 🛠️ Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| React | Frontend |
| Node.js | Backend API |

## 🔗 Links

| Link | URL |
|------|-----|
| **Live Demo** | [URL do projeto ao vivo] (Irá aparecer como botão "Visit Live Site" no Deep Dive) |
| **Repositório** | [GitHub repo] |

## 🌊 Deep Dive (Overlay Content)

Preencha as seções abaixo para alimentar o overlay de detalhes do projeto. Estes textos irão aparecer quando o usuário clicar em "Read Full Case Study":

### The Challenge (O Desafio)
Qual foi o problema inicial? (Ex: "O cliente precisava de uma plataforma escalável capaz de suportar alto tráfego sem perder a identidade visual premium...")

### The Solution (A Solução)
O que você fez para resolver? (Ex: "Adotamos uma abordagem design-first, utilizando Next.js para SSG e Tailwind CSS para garantir performance e responsividade...")

### The Result (O Resultado)
Qual foi o impacto? (Ex: "Aumento de 40% na retenção de usuários e redução de 2s no tempo de carregamento da página inicial...")

---

> **Atenção Desenvolvedor:** Quando for registrar o projeto em `website/src/data/projects.js`, lembre-se de adicionar as propriedades `link`, `challenge`, `solution` e `result` no objeto do projeto para que o Modal de Detalhes renderize o conteúdo corretamente!

<!-- ⬆️ FIM DO TEMPLATE ⬆️ -->
