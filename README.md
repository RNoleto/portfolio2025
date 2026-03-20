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

## ⚡ Otimizações de Performance (Lighthouse 100/100)

Este portfólio contém micro-otimizações agressivas para maximizar a experiência do usuário e as métricas do Core Web Vitals analisadas pelo Lighthouse:

* **Imagens Next-Gen:** Todas as fotografias pesadas e logos em `.png` transicionadas de forma nativa para o formato leve `.webp` usando tamanho estritamente dimensionado para a tela exibida (`width` e `height` explícitos para mitigação total de _Cumulative Layout Shift_).
* **Render-Blocking Zero:** Bloqueador nativo de renderização de CSS neutralizado através do uso do plugin `vite-plugin-css-injected-by-js`, empacotando os estilos no bundle minimalista assíncrono.
* **Acessibilidade Universal (a11y):** Taxas de limite de contraste de cores testadas e elevadas de acordo com as normas WCAG (WCAG AA). Tags interativas enriquecidas utilizando `aria-label` invisíveis.
* **SEO Validado:** Inclusão de atributos de rastreamento completos (`description` refinado) e `robots.txt` estrutural na pasta pública.

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
