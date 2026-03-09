# 🐾 Medicao Clínica Veterinária & Pet Shop

Uma Landing Page **Premium** e de alta conversão desenvolvida para clínicas veterinárias e pet shops. Este projeto foi construído com foco absoluto na Experiência do Utilizador (UX), utilizando interações modernas como **Glassmorphism 3D**, micro-animações e integração direta de agendamentos via WhatsApp.

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## ✨ Funcionalidades em Destaque (Features)

- **Design Premium (Glassmorphism 3D):** Cartões translúcidos com efeito de vidro fosco, sombras dinâmicas e pontos de luz (glows) que reagem ao hover.
- **Bot Inteligente de WhatsApp:** Um botão flutuante não intrusivo que abre um mini-menu de triagem (Emergência, Banho, Geral) antes de redirecionar para o WhatsApp com mensagens pré-formatadas.
- **Slider "Antes & Depois" Interativo:** Um componente mágico onde o cliente arrasta o dedo/rato para ver a transformação do serviço de Estética Animal.
- **Grid de Serviços Dinâmico:** Cartões de serviços compactos que se expandem com animações suaves revelando sub-serviços específicos.
- **Carrosséis Nativos (Snap-Scroll):** Navegação fluida por arrasto horizontal para os produtos do Pet Shop e Avaliações do Google.
- **Proteção Ocular (Off-White):** Fundo da aplicação num tom `#F8FAFC` suave acompanhado de texturas de bolinhas (dots) para conforto visual e leitura.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as ferramentas mais modernas do ecossistema front-end para garantir máxima performance e facilidade de manutenção:

- **[Next.js (App Router)](https://nextjs.org/):** Framework React para renderização rápida, otimização automática de imagens e roteamento moderno.
- **[Tailwind CSS v4](https://tailwindcss.com/):** O novíssimo motor do Tailwind configurado diretamente via `@theme` no CSS, sem necessidade de arquivos de configuração externos.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para um código robusto, previsível e livre de erros estruturais.
- **[Lucide React](https://lucide.dev/):** Biblioteca de ícones vetoriais leves, limpos e altamente customizáveis.
- **[Google Fonts (Otimizado)](https://nextjs.org/docs/app/building-your-application/optimizing/fonts):** Uso das fontes *Lily Script One* e *Sofia Sans* injetadas no momento do build (Zero Layout Shift).

---

## 🧠 Arquitetura Inteligente (O "Mini-CMS")

Uma das maiores vantagens deste projeto é a separação total entre a **Lógica de Design** e o **Conteúdo**. 

Todo o conteúdo dinâmico do site (serviços, produtos, avaliações, links do WhatsApp, iframe do mapa de localização) está centralizado num único ficheiro: `src/config/site-config.ts`. 

Isto significa que qualquer atualização de informações, mudança de preços ou novas fotos de "Antes e Depois" podem ser feitas em segundos por qualquer pessoa, sem risco de quebrar o layout da aplicação.

```typescript
// Exemplo da facilidade de edição no site-config.ts
export const siteConfig = {
  contact: {
    phone: "(85) 99105-7850",
    whatsapp: "[https://wa.me/5585991057850](https://wa.me/5585991057850)", 
    serviceArea: "Dionísio Torres e proximidades",
  },
  beforeAfter: {
    beforeImage: "/fotos/antes-sujo.jpg",
    afterImage: "/fotos/depois-limpo.jpg"
  }
  // ... produtos, avaliações e serviços!
};

```

---
## 🌍 Como Fazer o Deploy (Vercel)
Este projeto está perfeitamente otimizado para ser publicado na Vercel, a plataforma oficial dos criadores do Next.js. O processo é 100% gratuito e leva menos de 3 minutos:

Crie uma conta gratuita na Vercel.

No painel inicial, clique no botão "Add New" e depois em "Project".

Conecte a sua conta do GitHub e clique em "Import" ao lado do repositório deste Pet Shop.

A Vercel vai detetar automaticamente que é um projeto Next.js. Não precisa de alterar nenhuma configuração de build.

Clique no botão azul "Deploy" e aguarde a magia acontecer.

Pronto! O seu site estará online, rápido e com um link seguro (HTTPS) pronto a ser enviado aos clientes.

## 👨‍💻 Autor / Créditos
Desenvolvido com muita dedicação, código limpo e foco absoluto em UI/UX para conversão de vendas.

Portfólio: Coloque aqui o link do seu portfólio

LinkedIn: Coloque aqui o seu LinkedIn

GitHub: Coloque aqui o seu GitHub

Se este projeto o ajudou ou inspirou de alguma forma, sinta-se à vontade para deixar uma ⭐ neste repositório!
