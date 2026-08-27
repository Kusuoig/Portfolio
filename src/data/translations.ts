export const translations: Record<'en' | 'es', Record<string, string>> = {
  en: {
    'hero.role': 'Full Stack Engineer <span class="text-secondary mx-3">|</span> UI/UX Designer',
    'about.title': '<span class="text-primary italic">Transforming</span> ideas into<br/> purposeful interfaces.',
    "about.p1": "I'm Diego Villalobos, a Software Engineer focused on end-to-end web and mobile product development. I connect business logic and backend architectures with dynamic, accessible, and high-performance interfaces, with a special interest in UI/UX engineering and frontend technologies. I have hands-on experience turning Figma prototypes into production code, building reusable components, and optimizing data communication between servers and user interfaces. My product vision led me to become a National Finalist in the Hult Prize leading UI/UX design and frontend implementation, and to collaborate in the NASA Space Apps Challenge developing interactive 3D experiences centered on accessibility for multilingual communities.",
    'about.cv': 'Resume',
    'about.cvLink': '/cv/Diego_Villalobos_CV_EN.pdf',
    'about.contactBtn': 'Contact_',
    'about.stackBtn': '&lt;Stack /&gt;',
    'tech.title': '<span class="text-primary italic">Tech</span> Stack',
    'tech.desc': 'Tools and technologies I use to build robust and scalable solutions.',
    'projects.title': '<span class="text-primary font-mono mr-2">&gt;</span>Work',
    'contact.title': "Let's build something <br/>\n      <span class=\"text-secondary italic\">meaningful.</span>",
    'contact.desc': 'Currently open to new opportunities and collaborations. If you have a project in mind or just want to say "hi", my inbox is open.',
    'contact.name': 'Name_',
    'contact.email': 'Email_',
    'contact.msg': 'Message_',
    'contact.btn': 'send()',
    'nav.hero': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.contact': 'Contact',
    'project.back': 'Back to projects',
    'project.whyAndHow': 'The Why and How',
    'project.tech': 'Technologies',
    'project.links': 'Links',
    'project.repo': '&lt;View Repository /&gt;',
    'project.learnMore': 'Learn more →',
    'project.anfitr-app.title': 'Anfitr',
    'project.anfitr-app.role': 'Full Stack Developer',
    'project.anfitr-app.shortDesc': 'Full-stack web platform for medium-term stays — three-role architecture, recurring payments, and Angular SSR for SEO.',
    'project.cisco-pkt-designer.title': 'Cisco PKT Designer',
    'project.cisco-pkt-designer.role': 'Frontend & Backend Bridge',
    'project.cisco-pkt-designer.shortDesc': 'College team project: a tool that turns a visual network topology designer into ready-to-deploy Cisco CLI configuration scripts.',
    'project.safe-rent-app.title': 'Safe Rent',
    'project.safe-rent-app.role': 'Mobile Developer',
    'project.safe-rent-app.shortDesc': 'Cross-platform mobile app for renting and selling items between individuals, with Stripe deposit holds and integrated warranty management.',
    'project.anfitr-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. The Problem</p><p class="text-text-main/80 leading-relaxed">Finding medium-term housing as a student is a mess — landlords want 12-month contracts and Airbnb is too expensive for anything beyond a weekend. I built Anfitr to sit in that gap: a platform specifically for stays of weeks to months, not days.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Three Roles, One System</p><p class="text-text-main/80 leading-relaxed">The platform handles three user types with different permissions: hosts who list and manage their spaces, tenants who search, apply and pay, and moderators who verify listings and identities. The tricky part was designing a permission and payment flow that works cleanly for all three without each role feeling like an afterthought.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack &amp; Decisions</p><p class="text-text-main/80 leading-relaxed">We used Angular with SSR because SEO actually matters for a housing platform — each property page needs to be indexable. On the backend, Node.js with MongoDB handles the recurring payment subscriptions and the variable metadata each property has (amenities, availability, rules). Docker keeps the dev/prod environments consistent across the team.</p></div>`,
    'project.cisco-pkt-designer.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. The Problem</p><p class="text-text-main/80 leading-relaxed">Configuring a Cisco network topology from scratch in CLI takes hours and is error-prone, especially when you're doing it as a team. We built PKT Designer as a 4-person college project to cut that time down significantly.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Team Project — My Role</p><p class="text-text-main/80 leading-relaxed">My contribution was the frontend interface and the JS-to-Flask data bridge. While my 3 teammates handled the script generation logic and Packet Tracer integration, I built the UI with dynamic forms and real-time IP/mask validations, plus the file download system for the generated configuration scripts.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Result</p><p class="text-text-main/80 leading-relaxed">We got complex topology configuration time from ~4 hours to under 30 minutes. More importantly for me: I learned how to coordinate on a technical project where people own different layers and you still need clean data contracts between them.</p></div>`,
    'project.safe-rent-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. The Problem</p><p class="text-text-main/80 leading-relaxed">Lending or renting items between people has a trust problem — there's no guarantee the item comes back in good shape or that payment actually goes through. Safe Rent adds structure to that: secure payments, deposit holding, and a reputation system so both sides can actually trust the transaction.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Two Roles</p><p class="text-text-main/80 leading-relaxed">Owners list items with pricing and availability. Users browse, filter by condition and category, and book with an integrated payment flow. The reputation system on both sides is what keeps the marketplace honest — it's the same reason eBay worked before everything was on Amazon.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack &amp; Key Decisions</p><p class="text-text-main/80 leading-relaxed">Built with Flutter for true cross-platform coverage: one codebase, runs on iOS and Android. Supabase handles auth and the PostgreSQL database with real-time sync — useful for inventory updates. Stripe manages the deposit holds and automatic transfers so neither party has to trust a manual process.</p></div>`
  },
  es: {
    'hero.role': 'Ingeniero Full Stack <span class="text-secondary mx-3">|</span> Diseñador UI/UX',
    'about.title': '<span class="text-primary italic">Transformando</span> ideas en<br/> interfaces con propósito.',
    "about.p1": "Mi nombre es Diego Villalobos, Ingeniero de Software enfocado en el desarrollo de productos web y móviles de extremo a extremo. Conecto lógica de negocio y arquitecturas backend con interfaces dinámicas, accesibles y de alto rendimiento, con especial interés en ingeniería UI/UX y tecnologías frontend. Tengo experiencia transformando prototipos de Figma en código de producción, construyendo componentes reutilizables y optimizando la comunicación de datos entre servidores e interfaces de usuario. Mi visión de producto me llevó a ser Finalista Nacional en Hult Prize liderando diseño UI/UX e implementación frontend, y a colaborar en el NASA Space Apps Challenge desarrollando experiencias 3D interactivas centradas en accesibilidad para comunidades multilingües.",
    'about.cv': 'CV',
    'about.cvLink': '/cv/Diego_Villalobos_CV_ES.pdf',
    'about.contactBtn': 'Contactar_',
    'about.stackBtn': '&lt;Stack /&gt;',
    'tech.title': '<span class="text-primary italic">Tech</span> Stack',
    'tech.desc': 'Herramientas y tecnologías que utilizo para construir soluciones robustas y escalables.',
    'projects.title': '<span class="text-primary font-mono mr-2">&gt;</span>Proyectos',
    'contact.title': "Construyamos algo <br/>\n      <span class=\"text-secondary italic\">significativo.</span>",
    'contact.desc': 'Actualmente abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres decir "hola", mi bandeja de entrada está disponible.',
    'contact.name': 'Nombre_',
    'contact.email': 'Email_',
    'contact.msg': 'Mensaje_',
    'contact.btn': 'enviar()',
    'nav.hero': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.stack': 'Tecnologías',
    'nav.contact': 'Contacto',
    'project.back': 'Volver a proyectos',
    'project.whyAndHow': 'El Por Qué y el Cómo',
    'project.tech': 'Tecnologías',
    'project.links': 'Enlaces',
    'project.repo': '&lt;Ver Repositorio /&gt;',
    'project.learnMore': 'Conocer más →',
    'project.anfitr-app.title': 'Anfitr',
    'project.anfitr-app.role': 'Desarrollador Full Stack',
    'project.anfitr-app.shortDesc': 'Plataforma web full stack para estancias medianas — arquitectura de tres roles, pagos recurrentes y Angular SSR para SEO.',
    'project.cisco-pkt-designer.title': 'Cisco PKT Designer',
    'project.cisco-pkt-designer.role': 'Puente Frontend & Backend',
    'project.cisco-pkt-designer.shortDesc': 'Proyecto universitario en equipo: una herramienta que convierte un diseñador visual de topologías de red en scripts de configuración Cisco CLI listos para desplegar.',
    'project.safe-rent-app.title': 'Safe Rent',
    'project.safe-rent-app.role': 'Desarrollador Móvil',
    'project.safe-rent-app.shortDesc': 'App móvil multiplataforma para rentar y vender artículos entre particulares, con retención de depósito por Stripe y gestión de garantías integrada.',
    'project.anfitr-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. El Problema</p><p class="text-text-main/80 leading-relaxed">Encontrar alojamiento a mediano plazo siendo estudiante es complicado — los propietarios piden contratos de un año y las plataformas turísticas son caras para más de un fin de semana. Construí Anfitr para ocupar ese espacio: una plataforma para estancias de semanas o meses, no de días.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Tres Roles, un Sistema</p><p class="text-text-main/80 leading-relaxed">La plataforma maneja tres tipos de usuario con permisos distintos: anfitriones que publican y administran sus espacios, inquilinos que buscan, aplican y pagan, y moderadores que verifican inmuebles e identidades. El reto fue diseñar un flujo de permisos y pagos que funcione limpio para los tres sin que ningún rol se sienta descuidado.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack y Decisiones</p><p class="text-text-main/80 leading-relaxed">Usamos Angular con SSR porque el SEO sí importa en una plataforma de vivienda — cada página de propiedad tiene que ser indexable. En el backend, Node.js con MongoDB maneja las suscripciones de pago recurrente y los metadatos variables de cada propiedad (servicios, disponibilidad, reglas). Docker mantiene los entornos de dev y producción consistentes entre el equipo.</p></div>`,
    'project.cisco-pkt-designer.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. El Problema</p><p class="text-text-main/80 leading-relaxed">Configurar una topología de red Cisco desde cero en CLI tarda horas y es propenso a errores, especialmente cuando lo hace un equipo. Construimos PKT Designer como proyecto universitario de 4 personas para reducir ese tiempo significativamente.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Proyecto de Equipo — Mi Rol</p><p class="text-text-main/80 leading-relaxed">Mi contribución fue la interfaz frontend y el puente de datos entre JS y Flask. Mientras mis 3 compañeros trabajaban en la lógica de generación de scripts y la integración con Packet Tracer, yo construí la UI con formularios dinámicos y validaciones en tiempo real de IP y máscaras, más el sistema de descarga de archivos de configuración generados.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Resultado</p><p class="text-text-main/80 leading-relaxed">Logramos bajar el tiempo de configuración de topologías complejas de ~4 horas a menos de 30 minutos. Lo más importante para mí fue aprender a coordinar en un proyecto técnico donde cada quien tiene capas distintas y aun así necesitan contratos de datos limpios entre ellas.</p></div>`,
    'project.safe-rent-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. El Problema</p><p class="text-text-main/80 leading-relaxed">Prestar o rentar artículos entre personas tiene un problema de confianza — no hay garantía de que el artículo regrese en buen estado o de que el pago llegue. Safe Rent le da estructura a eso: pagos seguros, retención de depósito y un sistema de reputación para que ambas partes puedan confiar en la transacción.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Dos Roles</p><p class="text-text-main/80 leading-relaxed">Los propietarios publican artículos con precio y disponibilidad. Los usuarios buscan, filtran por condición y categoría, y reservan con un flujo de pago integrado. El sistema de reputación en ambos lados es lo que mantiene el marketplace honesto — es la misma razón por la que eBay funcionó antes de que todo fuera Amazon.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack y Decisiones Clave</p><p class="text-text-main/80 leading-relaxed">Construida con Flutter para cobertura real multiplataforma: una sola base de código, corre en iOS y Android. Supabase maneja la autenticación y la base de datos PostgreSQL con sincronización en tiempo real — útil para actualizaciones de inventario. Stripe maneja la retención de depósitos y las transferencias automáticas para que ninguna parte tenga que confiar en un proceso manual.</p></div>`
  }
};
