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
    wazeLink: "https://waze.com/ul?q=Av.+Antônio+Sales,+707+-+Joaquim+Távora,+Fortaleza",
    googleMapsLink: "https://maps.google.com/?q=Av.+Antônio+Sales,+707+-+Joaquim+Távora,+Fortaleza"
  },

  map: {
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.26127743005!2d-38.53437051284182!3d-3.7413155999999925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74900030b9d35%3A0x7a857f0603f71f10!2sMedicao%20Cl%C3%ADnica%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1773013752366!5m2!1spt-BR!2sbr"
  },

  beforeAfter: {
    beforeImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1000"
  },

  vetChief: {
    name: "Dr(a). Nome Sobrenome",
    role: "Médico(a) Veterinário(a) Diretor(a)",
    crmv: "CRMV-CE 12345",
    description: "Com mais de 10 anos de experiência em clínica médica e cirúrgica de pequenos animais, lidero uma equipa apaixonada por salvar vidas e garantir o bem-estar do seu melhor amigo.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", 
  },

  // Galeria de Fotos Atualizada para usar arquivos locais
  gallery: [
    "/gallery/bia.jpeg",
    "/gallery/bia2.jpeg",
    "/gallery/marley.jpeg",
    "/gallery/marley2.jpeg",
    "/gallery/ice.jpeg",
    "/gallery/ice2.jpeg"
  ],

  faqs: [
    { question: "Vocês aceitam plano de saúde pet?", answer: "Sim! Trabalhamos com os principais planos de saúde pet do mercado. Consulte a nossa equipa pelo WhatsApp para verificar a cobertura do seu plano." },
    { question: "Como funciona o internamento 24h?", answer: "O nosso internamento conta com monitoramento veterinário constante, 24 horas por dia. O seu pet nunca fica sozinho e os tutores recebem boletins médicos diários com fotos e vídeos." },
    { question: "Preciso agendar o banho e tosa com antecedência?", answer: "Recomendamos o agendamento prévio para garantir o melhor horário para si, mas também aceitamos encaixes dependendo da disponibilidade no dia." },
    { question: "Quais as formas de pagamento aceitas?", answer: "Aceitamos PIX, cartões de crédito e débito. Parcelamos procedimentos cirúrgicos e exames complexos para facilitar o cuidado com o seu pet." },
  ],

  services: [
    { 
      id: "clinica", name: "Clínica & Especialidades", icon: "🩺", 
      desc: "Atendimento 24h, consultas de rotina e especialidades médicas para a saúde completa do seu pet.",
      activeBg: "bg-primary text-white", 
      subServices: [
        { name: "Urgência 24h", desc: "Atendimento imediato para salvar vidas.", whatsappText: "🚨 Olá! Preciso de atendimento de URGÊNCIA para o meu pet." },
        { name: "Consultas & Exames", desc: "Check-ups, Endoscopia e Oftalmologia.", whatsappText: "🩺 Olá! Gostaria de agendar uma consulta/exame para o meu pet." },
      ]
    },
    { 
      id: "estetica", name: "Estética & Bem-Estar", icon: "🛁", 
      desc: "Banhos relaxantes, tosas estilosas e um hotel seguro e divertido para quando você precisar viajar.",
      activeBg: "bg-accent text-primary-dark", 
      subServices: [
        { name: "Banho e Tosa", desc: "Estética animal com produtos premium.", whatsappText: "🛁 Olá! Gostaria de agendar um banho e tosa." },
        { name: "Hotel para Animais", desc: "Hospedagem segura e acompanhada.", whatsappText: "🏨 Olá! Gostaria de saber valores e disponibilidade do Hotel." },
      ]
    },
    { 
      id: "facilidades", name: "Pet Shop & Farmácia", icon: "🛍️", 
      desc: "As melhores rações, medicamentos e brinquedos disponíveis 24h para o seu melhor amigo.",
      activeBg: "bg-primary-dark text-white", 
      subServices: [
        { name: "Rações e Petiscos", desc: "Marcas premium e super premium.", whatsappText: "🛍️ Olá! Gostaria de comprar produtos no Pet Shop." },
        { name: "Farmácia Veterinária", desc: "Medicamentos com orientação.", whatsappText: "💊 Olá! Preciso verificar a disponibilidade de um medicamento." },
      ]
    },
  ],

  links: {
    instagram: "https://instagram.com/medicaovethospital24hrs",
  },

  products: [
    { id: "prod1", name: "Ração Premier Seleção Natural - Cães Adultos", price: "R$ 189,90", category: "Rações", img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400" },
    { id: "prod2", name: "Bravecto Antipulgas e Carrapatos 10 a 20kg", price: "R$ 245,00", category: "Farmácia", img: "https://images.unsplash.com/photo-1623387641177-e8a49c0b37f4?auto=format&fit=crop&q=80&w=400" },
    { id: "prod3", name: "Areia Higiênica Pipicat Floral 4kg", price: "R$ 22,90", category: "Gatos", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400" },
    { id: "prod4", name: "Brinquedo Osso de Borracha Resistente", price: "R$ 35,00", category: "Acessórios", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400" },
  ],

  reviews: [
    { name: "Mariana Souza", text: "Ótimo atendimento! Salvaram o meu cachorrinho de madrugada. A equipa é super atenciosa e o ambiente é impecável.", rating: 5, date: "Há 2 semanas" },
    { name: "João Pedro Alves", text: "O banho e tosa é espetacular. O meu pet volta super cheiroso e com os pelos super macios.", rating: 5, date: "Há 1 mês" },
    { name: "Ana Cláudia", text: "Sempre compro as rações lá. O preço é justo. O atendimento 24h salva muito a minha vida.", rating: 5, date: "Há 3 meses" },
    { name: "Ricardo Mendes", text: "Profissionais incríveis! A Dra. foi muito paciente a explicar o tratamento do meu gato.", rating: 5, date: "Há 4 meses" }
  ],
};