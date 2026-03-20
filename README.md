# Portfólio RNoleto 🚀

Bem-vindo ao repositório do meu portfólio pessoal corporativo. Este projeto foi desenvolvido para apresentar minha experiência como Desenvolvedor Fullstack Senior, exibindo meus projetos, habilidades técnicas, formação acadêmica e contatos práticos.

O projeto foi inteiramente construído com foco em **Alta Performance, Acessibilidade e SEO**, atingindo a marca de **100/100 no Google Lighthouse (Mobile e Desktop)**.

---

## 🛠️ Tecnologias e Ferramentas

O projeto utiliza as mais modernas tecnologias de desenvolvimento Frontend:

- **[Vue 3](https://vuejs.org/)** (Composition API via `<script setup>`)
- **[Vite 6](https://vitejs.dev/)** (Build tool extremamente rápido)
- **[Tailwind CSS v4](https://tailwindcss.com/)** (Estilização utilitária e design responsivo)
- **[Swiper](https://swiperjs.com/)** (Carousel e sliders fluidos para a seção de projetos)
- **[Vue Router](https://router.vuejs.org/)** (Navegação da aplicação)

---

## ⚡ Otimizações de Performance e SEO

Este portfólio atingiu a nota máxima em todas as métricas do **Google Lighthouse** (Mobile e Desktop), atestando a qualidade técnica e eficiência no desenvolvimento:

| Métrica Lighthouse | Desktop | Mobile |
| :--- | :---: | :---: |
| 🚀 **Desempenho** | **100** | **100** |
| ♿ **Acessibilidade** | **100** | **100** |
| 💡 **Práticas Recomendadas**| **100** | **100** |
| 🔍 **SEO** | **100** | **100** |

Para atingir esses resultados absolutos nos testes nativos (Sem extensões de terceiros e navegando em aba Anônima), o projeto conta com práticas agressivas para Web Vitals:

* **Imagens Next-Gen:** Todas as fotografias pesadas e logos em `.png` foram redimensionados pixel a pixel (`crop`/`resize`) e minificados para `.webp`. Foram inseridas tags HTML rigorosas para mitigação de _Cumulative Layout Shift (CLS)_.
* **Render-Blocking Zero:** O bloqueador de renderização causado pelo arquivo central `.css` foi neutralizado; todos estilos inlines migrados diretamente para o payload final em `.js` via Vite.
* **Acessibilidade Universal:** Taxas de contraste cromático revisadas e elevadas de acordo com as normas globais (WCAG AA). Tags interativas e logomarcas ganharam atributos `aria-label` invisíveis para leitores de tela.
* **Crawlability:** Arquitetado para indexação do motor de busca em todas as escalas (via arquivos `robots.txt` criados com precisão no servidor público).

---

## 📂 Estrutura do Projeto

* `src/views/` - Contém todas as páginas e seções que juntas compõem a Landing Page (`Hero`, `AboutMe`, `Work`, `Projects`, `Skills`, etc.).
* `src/components/` - Componentes reutilizáveis de interface pura (ex: `Navbar`, `Header`, `Swiper`, `ui/Ticket`, `ui/Polaroid`).
* `public/img/` - Imagens cruciais que não precisam de passarela pelo JS, como selos de certificações, tecnologias minimizadas e Favicons.
* `index.html` - Arquivo de entrada enxuto e principal para o SPAs (Single Page Applications).
* `tailwind.config.js` / `style.css` - Identidade visual de cores corporativas (como `turquoise`, `darkCream`, `redCream` e `cobaltBlue`) com as importações de temas e utilitários.

---

## 🚦 Como rodar o projeto localmente

Siga as instruções abaixo para executar o servidor de desenvolvimento na sua máquina local.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/) (versão 18+ recomendada)
* Um gerenciador de pacotes (npm, pnpm ou yarn)

```bash
# Clone o repositório
git clone https://github.com/RNoleto/portfolio2025.git

# Entre na pasta do projeto
cd portfolio2025

# Instale as dependências
npm install

# Inicie o servidor em modo de desenvolvimento
npm run dev
```

Você poderá visualizar a aplicação abrindo a URL (geralmente `http://localhost:5173/`) do seu navegador. O recurso HMR (Hot Module Replacement) vai refletir as edições de código instantaneamente.

---

## 📦 Scripts Disponíveis

No diretório principal você possui atalhos do Vue criados pelo Vite via `package.json`:

- `npm run dev`: Inicia o servidor local para desenvolvimento assistido com Vite.
- `npm run build`: Compila a aplicação pronta para ambiente de produção, executando as minificações e bundle sizing. Os arquivos estáticos estarão na pasta `/dist`.
- `npm run preview`: Inicia uma simulação do servidor local usando apenas os arquivos finais localizados em `/dist` (excelente para prever o comportamento em produção real e efetuar varredura final no Lighthouse).

---

## 📬 Contato

- **Desenvolvedor:** Ramon Noleto
- **Ocupação:** Desenvolvedor Fullstack Senior
- **Email:** [devnoleto@gmail.com](mailto:devnoleto@gmail.com)
- **LinkedIn:** [linkedin.com/in/ramon-noleto](https://www.linkedin.com/in/ramon-noleto-b0913545/)
- **GitHub:** [@RNoleto](https://github.com/RNoleto)

---
> Desenvolvido com dedicação, acessibilidade e muita vontade técnica. 💡
