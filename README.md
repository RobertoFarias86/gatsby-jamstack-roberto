# Projeto: Front-end Jamstack com Gatsby

Este repositório contém o projeto da disciplina **"Front-end Jamstack com Gatsby"**. O objetivo é demonstrar o uso de Gatsby em uma arquitetura Jamstack, com conteúdo em Markdown, rotas dinâmicas, formulário responsivo e pipeline de CI/CD.

## 1. Tecnologias utilizadas
- Gatsby
- React
- Markdown (conteúdo em `content/posts/`)
- styled-components (CSS-in-JS)
- CSS global (`src/styles/global.css`)
- gatsby-plugin-image, gatsby-plugin-sharp, gatsby-transformer-sharp
- gatsby-plugin-sitemap, gatsby-plugin-robots-txt
- GitHub Actions (CI/CD)
- GitHub Pages (CDN)

## 2. Requisitos atendidos
- ✅ Rota principal (`/`) listando últimos 20 posts
- ✅ Rotas geradas a partir de Markdown (`/posts/slug/`)
- ✅ Formulário responsivo com 3 campos, validação e envio para endpoint
- ✅ Componentização (Header, Footer, Layout, Seo, ContactForm, ArticleCard)
- ✅ Design responsivo
- ✅ Metadados (title, description, image)
- ✅ Sitemap e robots.txt
- ✅ Pipeline de build e deploy automático (GitHub Actions)
- ✅ Deploy para CDN (GitHub Pages)

## 3. Estrutura principal
```text
content/posts/        # arquivos .md usados para gerar rotas
src/pages/            # páginas estáticas (home, contato)
src/templates/        # template para posts gerados via Markdown
src/components/       # componentes reutilizáveis
src/styles/global.css # estilos globais
.github/workflows/    # pipeline de CI/CD
gatsby-config.js      # plugins, metadata e pathPrefix
gatsby-node.js        # criação das páginas dinâmicas




