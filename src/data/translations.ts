export const translations: Record<'en' | 'es', Record<string, string>> = {
  en: {
    'hero.role': 'Full Stack Engineer <span class="text-secondary mx-3">|</span> UI/UX Designer',
    'about.title': '<span class="text-primary italic">Transforming</span> ideas into<br/> purposeful interfaces.',
    "about.p1": "Fullstack developer with a strong focus on <strong class=\"text-secondary font-medium\">UI/UX</strong> — I believe code should not only work, it should feel good to use. I build clean, accessible, and intentionally designed products, currently finishing my Software Engineering degree.",
    'about.cv': 'Resume',
    'about.contactBtn': 'Contact_',
    'about.stackBtn': '&lt;Stack /&gt;',
    'tech.title': '<span class="text-primary italic">Tech</span> Stack',
    'tech.desc': 'Tools and technologies I use to build robust and scalable solutions.',
    'projects.title': '<span class="text-primary font-mono mr-2">&gt;</span>Work',
    'contact.title': 'Let\'s build something <br/>\n      <span class="text-secondary italic">meaningful.</span>',
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
    'project.anfitr-app.shortDesc': 'Full Stack web platform oriented to medium-term stays, with a three-role architecture, recurring payments and SSR for optimal SEO.',
    'project.cisco-pkt-designer.title': 'Cisco PKT Designer',
    'project.cisco-pkt-designer.role': 'Backend / Tooling Developer',
    'project.cisco-pkt-designer.shortDesc': 'Collaborative tool that automates CLI configuration of Cisco networks from a visual topology designer.',
    'project.safe-rent-app.title': 'Safe Rent',
    'project.safe-rent-app.role': 'Mobile Developer',
    'project.safe-rent-app.shortDesc': 'Cross-platform mobile app for renting and buying items between individuals, with secure payments and integrated warranty management.',
    'project.anfitr-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. The Problem</p><p class="text-text-main/80 leading-relaxed">Finding temporary accommodation as a student or mobile professional is often frustrating: the traditional market asks for long contracts, and tourist platforms are not designed for weeks or months. Anfitr was born to fill that gap, offering an environment where flexibility and security coexist.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Three Roles, One Flow</p><p class="text-text-main/80 leading-relaxed">The platform distinguishes three profiles with well-defined permissions and flows:</p><p class="text-text-main/80 leading-relaxed">- Host: manages availability calendars, verifies tenants and automates monthly collection.</p><p class="text-text-main/80 leading-relaxed">- Tenant: filters properties, uploads documentation and makes deposit and rent payments safely.</p><p class="text-text-main/80 leading-relaxed">- Moderator: audits the veracity of properties and user identities to maintain trust in the community.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack and Technical Decisions</p><p class="text-text-main/80 leading-relaxed">SSR with Angular 20: we chose Server-Side Rendering to achieve fast loading times and ensure each property is indexable in search engines.</p><p class="text-text-main/80 leading-relaxed">Recurring payments: we implemented logic for security deposits and automated rent subscriptions, eliminating administrative friction.</p><p class="text-text-main/80 leading-relaxed">Scalable Backend: Node.js and MongoDB allow dynamic modeling of variable property metadata - included services, nearby areas, system states - without schema rigidity.</p></div>`,
    'project.cisco-pkt-designer.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. The Problem</p><p class="text-text-main/80 leading-relaxed">Manually configuring a complex network topology in Cisco CLI is slow and prone to errors. In study or work teams, that time multiplies. This project arose from that real need: to build a tool together that reduced hours of repetitive configuration to minutes.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. A Team Project</p><p class="text-text-main/80 leading-relaxed">Cisco PKT Designer was developed in collaboration with classmates, and my participation focused on the bridge between frontend and backend. We divided the work clearly: while other classmates worked on the script generation logic and Packet Tracer integration, I took charge of the client side and server communication.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. My Technical Contribution</p><p class="text-text-main/80 leading-relaxed">Professional Interface: I designed the UI inspired by Cisco dashboards, with dynamic forms and real-time validations that detect IP conflicts or mask errors before sending data to the server.</p><p class="text-text-main/80 leading-relaxed">JS-Flask Connection: I implemented the asynchronous data flow between the JavaScript frontend and the Flask backend, ensuring that each user action generated a valid and well-structured JSON.</p><p class="text-text-main/80 leading-relaxed">Deliverables Download: I programmed the logic so that, after validation, the user can directly download the configuration scripts and .pkt files ready to deploy.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">04. Result</p><p class="text-text-main/80 leading-relaxed">Together with the team, we managed to reduce the configuration time for complex topologies from 4 hours to less than 30 minutes. For me, it was a valuable exercise in technical coordination, division of responsibilities, and delivering a functional tool with real impact.</p></div>`,
    'project.safe-rent-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. The Problem</p><p class="text-text-main/80 leading-relaxed">The peer-to-peer second-hand market has a trust problem: who guarantees that the seller delivers what is promised or that the buyer pays without problems? Safe Rent was born to give structure and security to those informal transactions, transforming them into something as reliable as buying in a store.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Two Profiles, a Secure Marketplace</p><p class="text-text-main/80 leading-relaxed">The app manages two complementary roles:</p><p class="text-text-main/80 leading-relaxed">- Owner: can list items for rent or sale, set prices, security deposits and manage availability in real time.</p><p class="text-text-main/80 leading-relaxed">- User: accesses a verified catalog with filters by category and condition, backed by a rating system that maintains community reputation.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack and Key Decisions</p><p class="text-text-main/80 leading-relaxed">Stripe Payments: I implemented the logic for holding deposits for rentals and automatic transfers between parties, ensuring financial transparency in each operation.</p><p class="text-text-main/80 leading-relaxed">Supabase (PostgreSQL): manages authentication and the database, with real-time updates for inventories and transaction history.</p><p class="text-text-main/80 leading-relaxed">Flutter: the app runs on iOS and Android with a single codebase, prioritizing fluidity in catalog navigation and the checkout process.</p></div>
      <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">04. Result</p><p class="text-text-main/80 leading-relaxed">The project solves a specific trust problem in peer-to-peer commerce, with an architecture that automates the most critical parts - payments, guarantees and verification - so that both owners and users can operate with peace of mind.</p></div>`
  },
  es: {
    'hero.role': 'Ingeniero Full Stack <span class="text-secondary mx-3">|</span> Diseñador UI/UX',
    'about.title': '<span class="text-primary italic">Transformando</span> ideas en<br/> interfaces con propósito.',
    "about.p1": "Desarrollador Fullstack con enfoque en <strong class=\"text-secondary font-medium\">UI/UX</strong> — creo que el código no solo debe funcionar, debe sentirse bien al usarse. Construyo productos limpios, accesibles y diseñados con intención, mientras termino mi carrera en Ingeniería de Software.",
    'about.cv': 'CV',
    'about.contactBtn': 'Contactar_',
    'about.stackBtn': '&lt;Stack /&gt;',
    'tech.title': '<span class="text-primary italic">Tech</span> Stack',
    'tech.desc': 'Herramientas y tecnologías que utilizo para construir soluciones robustas y escalables.',
    'projects.title': '<span class="text-primary font-mono mr-2">&gt;</span>Proyectos',
    'contact.title': 'Construyamos algo <br/>\n      <span class="text-secondary italic">significativo.</span>',
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
    'project.anfitr-app.shortDesc': 'Plataforma web Full Stack orientada a la media estancia, con arquitectura de tres roles, pagos recurrentes y SSR para un SEO óptimo.',
    'project.cisco-pkt-designer.title': 'Cisco PKT Designer',
    'project.cisco-pkt-designer.role': 'Desarrollador Backend / Herramientas',
    'project.cisco-pkt-designer.shortDesc': 'Herramienta colaborativa que automatiza la configuración CLI de redes Cisco a partir de un diseñador visual de topologías.',
    'project.safe-rent-app.title': 'Safe Rent',
    'project.safe-rent-app.role': 'Desarrollador Móvil',
    'project.safe-rent-app.shortDesc': 'App móvil multiplataforma para rentar y comprar artículos entre particulares, con pagos seguros y gestión de garantías integrada.',
    'project.anfitr-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. El Problema</p><p class="text-text-main/80 leading-relaxed">Encontrar alojamiento temporal como estudiante o profesional en movilidad suele ser frustrante: el mercado tradicional pide contratos largos, y las plataformas turísticas no están pensadas para semanas o meses. Anfitr nació para cubrir ese hueco, ofreciendo un entorno donde la flexibilidad y la seguridad coexisten.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Tres Roles, un Solo Flujo</p><p class="text-text-main/80 leading-relaxed">La plataforma distingue tres perfiles con permisos y flujos bien definidos:</p><p class="text-text-main/80 leading-relaxed">- Anfitrión: gestiona calendarios de disponibilidad, verifica inquilinos y automatiza el cobro mensual.</p><p class="text-text-main/80 leading-relaxed">- Inquilino: filtra propiedades, sube documentación y realiza pagos de depósito y renta de forma segura.</p><p class="text-text-main/80 leading-relaxed">- Moderador: audita la veracidad de los inmuebles y la identidad de los usuarios para mantener la confianza en la comunidad.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack y Decisiones Técnicas</p><p class="text-text-main/80 leading-relaxed">SSR con Angular 20: optamos por Server-Side Rendering para lograr tiempos de carga rápidos y que cada propiedad sea indexable en buscadores.</p><p class="text-text-main/80 leading-relaxed">Pagos recurrentes: implementamos lógica para depósitos en garantía y suscripciones de renta automatizadas, eliminando fricciones administrativas.</p><p class="text-text-main/80 leading-relaxed">Backend escalable: Node.js y MongoDB permiten modelar los metadatos variables de cada propiedad —servicios incluidos, zonas cercanas, estados del sistema— sin rigidez de esquema.</p></div>`,
    'project.cisco-pkt-designer.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. El Problema</p><p class="text-text-main/80 leading-relaxed">Configurar manualmente una topología de red compleja en Cisco CLI es lento y propenso a errores. En equipos de estudio o trabajo, ese tiempo se multiplica. Este proyecto surgió de esa necesidad real: construir entre varios una herramienta que redujera horas de configuración repetitiva a minutos.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Un Proyecto de Equipo</p><p class="text-text-main/80 leading-relaxed">Cisco PKT Designer fue desarrollado en colaboración con compañeros, y mi participación se concentró en el puente entre el frontend y el backend. Nos repartimos el trabajo de forma clara: mientras otros compañeros trabajaban en la lógica de generación de scripts y la integración con Packet Tracer, yo me encargué del lado del cliente y la comunicación con el servidor.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Mi Contribución Técnica</p><p class="text-text-main/80 leading-relaxed">Interfaz profesional: diseñé la UI inspirándome en los dashboards de Cisco, con formularios dinámicos y validaciones en tiempo real que detectan conflictos de IP o errores de máscara antes de enviar datos al servidor.</p><p class="text-text-main/80 leading-relaxed">Conexión JS-Flask: implementé el flujo de datos asíncrono entre el frontend en JavaScript y el backend en Flask, asegurando que cada acción del usuario generara un JSON válido y bien estructurado.</p><p class="text-text-main/80 leading-relaxed">Descarga de entregables: programé la lógica para que, tras la validación, el usuario pueda descargar directamente los scripts de configuración y los archivos .pkt listos para desplegar.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">04. Resultado</p><p class="text-text-main/80 leading-relaxed">Junto al equipo, logramos reducir el tiempo de configuración de topologías complejas de 4 horas a menos de 30 minutos. Para mí, fue un ejercicio valioso de coordinación técnica, división de responsabilidades y entrega de una herramienta funcional con impacto real.</p></div>`,
    'project.safe-rent-app.desc': `<div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">01. El Problema</p><p class="text-text-main/80 leading-relaxed">El mercado de artículos de segunda mano entre particulares tiene un problema de confianza: ¿quién garantiza que el vendedor entregue lo prometido o que el comprador pague sin problemas? Safe Rent nació para darle estructura y seguridad a esas transacciones informales, transformándolas en algo tan confiable como comprar en una tienda.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">02. Dos Perfiles, un Marketplace Seguro</p><p class="text-text-main/80 leading-relaxed">La app maneja dos roles complementarios:</p><p class="text-text-main/80 leading-relaxed">- Propietario: puede listar artículos para renta o venta, establecer precios, depósitos de garantía y gestionar su disponibilidad en tiempo real.</p><p class="text-text-main/80 leading-relaxed">- Usuario: accede a un catálogo verificado con filtros por categoría y estado, respaldado por un sistema de valoraciones que mantiene la reputación de la comunidad.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">03. Stack y Decisiones Clave</p><p class="text-text-main/80 leading-relaxed">Pagos con Stripe: implementé la lógica de retención de depósitos para rentas y las transferencias automáticas entre partes, garantizando transparencia financiera en cada operación.</p><p class="text-text-main/80 leading-relaxed">Supabase (PostgreSQL): maneja la autenticación y la base de datos, con actualizaciones en tiempo real para inventarios e historial de transacciones.</p><p class="text-text-main/80 leading-relaxed">Flutter: la app corre en iOS y Android con una sola base de código, priorizando la fluidez en la navegación del catálogo y el proceso de checkout.</p></div>
    <div class="space-y-2"><p class="text-xl font-display font-medium text-text-main mb-3">04. Resultado</p><p class="text-text-main/80 leading-relaxed">El proyecto resuelve un problema concreto de confianza en el comercio entre personas, con una arquitectura que automatiza las partes más críticas —pagos, garantías y verificación— para que tanto propietarios como usuarios puedan operar con tranquilidad.</p></div>`,

  }
};
