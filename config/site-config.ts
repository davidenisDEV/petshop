export const siteConfig = {
  name: "Medicao Clínica Veterinária",
  shortName: "Medicao",
  description: "Clínica Veterinária, Pet Shop, Internamento 24 horas e Hotel para animais. O cuidado que o seu pet merece com atendimento humanizado.",
  url: "https://medicao-petshop.vercel.app", 
  
  rating: {
    score: 4.2,
    reviewsCount: 49,
    trustedText: "Veterinário em Fortaleza, Ceará"
  },

  contact: {
    phone: "(85) 99105-7850",
    whatsapp: "https://wa.me/5585991057850", 
    address: "Av. Antônio Sales, 707 - Joaquim Távora, Fortaleza - CE, 60135-101",
    serviceArea: "Dionísio Torres e proximidades",
    hours: "Aberto 24 horas",
  },

  map: {
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.26127743005!2d-38.53437051284182!3d-3.7413155999999925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74900030b9d35%3A0x7a857f0603f71f10!2sMedicao%20Cl%C3%ADnica%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1773013752366!5m2!1spt-BR!2sbr"
  },

  beforeAfter: {
    beforeImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000"
  },

  services: [
    { 
      id: "clinica", 
      name: "Clínica & Especialidades", 
      icon: "🩺", 
      desc: "Atendimento 24h, consultas de rotina e especialidades médicas para a saúde completa do seu pet.",
      activeBg: "bg-primary text-[#3160a6]", // Amarelo com texto Azul (Novo contraste)
      subServices: [
        { name: "Urgência 24h", desc: "Atendimento imediato para salvar vidas.", whatsappText: "🚨 Olá! Preciso de atendimento de URGÊNCIA para o meu pet." },
        { name: "Consultas & Exames", desc: "Check-ups, Endoscopia e Oftalmologia.", whatsappText: "🩺 Olá! Gostaria de agendar uma consulta/exame para o meu pet." },
        { name: "Internamento", desc: "Monitoramento intensivo dia e noite.", whatsappText: "🌙 Olá! Preciso de informações sobre o internamento." },
        { name: "Oncologia", desc: "Tratamento oncológico humanizado.", whatsappText: "🎗️ Olá! Gostaria de falar sobre o tratamento oncológico." },
      ]
    },
    { 
      id: "estetica", 
      name: "Estética & Bem-Estar", 
      icon: "🛁", 
      desc: "Banhos relaxantes, tosas estilosas e um hotel seguro e divertido para quando você precisar viajar.",
      activeBg: "bg-accent text-white", // Vermelho com texto Branco
      subServices: [
        { name: "Banho e Tosa", desc: "Estética animal com produtos premium.", whatsappText: "🛁 Olá! Gostaria de agendar um banho e tosa." },
        { name: "Hotel para Animais", desc: "Hospedagem segura e acompanhada.", whatsappText: "🏨 Olá! Gostaria de saber valores e disponibilidade do Hotel." },
      ]
    },
    { 
      id: "facilidades", 
      name: "Pet Shop & Facilidades", 
      icon: "🛍️", 
      desc: "As melhores rações, brinquedos, farmácia e o nosso Táxi Dog para buscar e levar o seu melhor amigo.",
      activeBg: "bg-[#3160a6] text-white", // Fundo Azul com texto Branco (Super premium!)
      subServices: [
        { name: "Pet Shop & Farmácia", desc: "Rações, petiscos e medicamentos.", whatsappText: "🛍️ Olá! Queria saber se vocês têm um produto disponível no Pet Shop." },
        { name: "Táxi Dog", desc: "Transporte seguro porta a porta.", whatsappText: "🚐 Olá! Preciso agendar o Táxi Dog para buscar/levar o meu pet." },
      ]
    },
  ],

  links: {
    instagram: "https://instagram.com/medicaovethospital24hrs",
  },

  products: [
    { 
      id: "prod1", 
      name: "Ração Premier Seleção Natural - Cães Adultos", 
      price: "R$ 189,90", 
      category: "Rações",
      img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400", 
    },
    { 
      id: "prod2", 
      name: "Bravecto Antipulgas e Carrapatos 10 a 20kg", 
      price: "R$ 245,00", 
      category: "Farmácia",
      img: "https://images.unsplash.com/photo-1623387641177-e8a49c0b37f4?auto=format&fit=crop&q=80&w=400",
    },
    { 
      id: "prod3", 
      name: "Areia Higiênica Pipicat Floral 4kg", 
      price: "R$ 22,90", 
      category: "Gatos",
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400",
    },
    { 
      id: "prod4", 
      name: "Brinquedo Osso de Borracha Resistente", 
      price: "R$ 35,00", 
      category: "Acessórios",
      img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400",
    },
  ],

  reviews: [
    { name: "Mariana Souza", text: "Ótimo atendimento! Salvaram o meu cachorrinho de madrugada. A equipa é super atenciosa e o ambiente é impecável.", rating: 5, date: "Há 2 semanas" },
    { name: "João Pedro Alves", text: "O banho e tosa é espetacular. O meu pet volta super cheiroso e com os pelos super macios.", rating: 5, date: "Há 1 mês" },
    { name: "Ana Cláudia", text: "Sempre compro as rações lá. O preço é justo. O Táxi Dog também salva muito a minha vida.", rating: 5, date: "Há 3 meses" },
    { name: "Ricardo Mendes", text: "Profissionais incríveis! A Dra. foi muito paciente a explicar o tratamento do meu gato.", rating: 5, date: "Há 4 meses" }
  ],
};