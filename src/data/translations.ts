export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    product: string;
    howItWorks: string;
    useCases: string;
    pricing: string;
    safety: string;
    download: string;
    login: string;
  };
  header: {
    cta: string;
  };
  hero: {
    eyebrow: string;
    h1Static: string;
    h1Line2Prefix: string;
    h1Words: string[];
    h1Suffix: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  heroDemo: {
    windowTitle: string;
    cameraLabel: string;
    cameraState: string;
    resultLabel: string;
    resultState: string;
    facesLabel: string;
    addFace: string;
    statusReady: string;
    statusProcessing: string;
    statusActive: string;
    floatingTitle: string;
    floatingCamera: string;
    floatingFace: string;
    floatingIntensity: string;
    floatingStatus: string;
  };
  useCaseIntro: {
    eyebrow: string;
    heading: string[];
    tabs: { id: string; label: string; title: string; description: string }[];
    chrome: {
      videoCall: string;
      mute: string;
      video: string;
      end: string;
      live: string;
      statusOn: string;
      character: string;
    };
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    addFaceCta: string;
  };
  localWorkflow: {
    title: string;
    description: string;
    diagram: {
      root: string;
      items: string[];
    };
  };
  pricing: {
    eyebrow: string;
    title: string[];
    description: string;
    free: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
    paidFeatures: string[];
    paidBadge: string;
    plans: {
      id: string;
      label: string;
      price: string;
      period: string;
      note: string;
      badge?: string;
    }[];
    cta: string;
  };
  systemRequirements: {
    eyebrow: string;
    title: string;
    description: string;
    columnMinimum: string;
    columnRecommended: string;
    platforms: {
      id: string;
      label: string;
      rows: { label: string; minimum: string; recommended: string }[];
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  responsibleUse: {
    title: string;
    description: string;
    links: { label: string; href: string }[];
  };
  finalCta: {
    eyebrow: string;
    title: string[];
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
    productHeading: string;
    productLinks: { label: string; href: string }[];
    legalHeading: string;
    legalLinks: { label: string; href: string }[];
    copyright: string;
  };
  ui: {
    camera: string;
    faces: string;
    addFace: string;
    selected: string;
    active: string;
    original: string;
    preview: string;
    settings: string;
    intensity: string;
    ready: string;
  };
}

export const translations: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "FaceFusion — Change Your Face in Real Time",
      description:
        "FaceFusion is a desktop face-changing app for streams, content, pranks and creative camera experiences. Upload a face and transform your look in seconds.",
    },
    nav: {
      product: "Product",
      howItWorks: "How it works",
      useCases: "Use cases",
      pricing: "Pricing",
      safety: "Safety",
      download: "Download",
      login: "Log in",
    },
    header: {
      cta: "Download FaceFusion",
    },
    hero: {
      eyebrow: "FaceFusion / Real-Time Face Changing",
      h1Static: "Your face.",
      h1Line2Prefix: "Your",
      h1Words: ["stream", "content", "character"],
      h1Suffix: "Your rules.",
      description:
        "Upload a face and transform your camera experience in seconds. Built for streams, content, characters and unforgettable pranks.",
      ctaPrimary: "Download FaceFusion",
      ctaSecondary: "See it in action",
    },
    heroDemo: {
      windowTitle: "FaceFusion",
      cameraLabel: "Camera",
      cameraState: "Original",
      resultLabel: "FaceFusion",
      resultState: "Active",
      facesLabel: "Faces",
      addFace: "Add face",
      statusReady: "Camera Ready",
      statusProcessing: "Applying face…",
      statusActive: "FaceFusion Active",
      floatingTitle: "FaceFusion",
      floatingCamera: "Camera",
      floatingFace: "Face",
      floatingIntensity: "Intensity",
      floatingStatus: "Status: Active",
    },
    useCaseIntro: {
      eyebrow: "( 1 ) What it does",
      heading: ["Change the moment.", "Not the fun."],
      tabs: [
        {
          id: "prank",
          label: "Prank",
          title: "Turn a normal call into chaos.",
          description:
            "Drop a new face into a friendly video call and watch reactions land in real time.",
        },
        {
          id: "stream",
          label: "Stream",
          title: "Give your stream a character.",
          description:
            "Keep your webcam frame and swap in a look your audience won't forget.",
        },
        {
          id: "create",
          label: "Create",
          title: "Shoot content in character.",
          description:
            "Film sketches, reactions and shorts with a face built for the bit.",
        },
        {
          id: "perform",
          label: "Perform",
          title: "Switch characters mid-scene.",
          description:
            "Move between looks instantly and keep the performance moving.",
        },
      ],
      chrome: {
        videoCall: "Video Call",
        mute: "Mute",
        video: "Video",
        end: "End",
        live: "LIVE",
        statusOn: "FaceFusion On",
        character: "Character",
      },
    },
    howItWorks: {
      eyebrow: "( How it works )",
      title: "From photo to character in a few steps.",
      steps: [
        {
          number: "01",
          title: "Choose",
          description: "Add the face you want to use.",
        },
        {
          number: "02",
          title: "Transform",
          description: "Select a face and let FaceFusion do the rest.",
        },
        {
          number: "03",
          title: "Perform",
          description: "Stay expressive while your appearance changes.",
        },
        {
          number: "04",
          title: "Create",
          description:
            "Turn it into a stream, a joke, a character or your next piece of content.",
        },
      ],
      addFaceCta: "Add face",
    },
    localWorkflow: {
      title: "Your faces stay in your workflow.",
      description:
        "FaceFusion is designed as a desktop experience, so your creative workflow happens on your computer rather than inside a public social platform.",
      diagram: {
        root: "Your Computer",
        items: ["Camera", "Face Library", "FaceFusion"],
      },
    },
    pricing: {
      eyebrow: "( Pricing )",
      title: ["Try it free.", "Unlock everything when you're ready."],
      description:
        "Start with a free trial to see how FaceFusion runs on your computer, then subscribe for full access.",
      free: {
        name: "Free Trial",
        price: "$0",
        description: "Try the platform and see how it works on your computer.",
        features: [
          "Explore the full interface",
          "Test camera performance on your PC",
          "No streaming or recording",
        ],
        cta: "Download the free trial",
      },
      paidFeatures: [
        "Full access to FaceFusion",
        "Stream with your transformed camera",
        "Record and export your content",
        "No trial restrictions",
      ],
      paidBadge: "Everything in Free, plus:",
      plans: [
        { id: "monthly", label: "Monthly", price: "$40", period: "/ month", note: "Billed monthly" },
        {
          id: "quarterly",
          label: "Quarterly",
          price: "$100",
          period: "/ 3 months",
          note: "Billed every 3 months",
          badge: "Save 17%",
        },
        {
          id: "annual",
          label: "Annual",
          price: "$300",
          period: "/ year",
          note: "Billed annually",
          badge: "Best value",
        },
      ],
      cta: "Subscribe",
    },
    systemRequirements: {
      eyebrow: "( System requirements )",
      title: "Will it run on your computer?",
      description: "FaceFusion is a desktop app. Here's what it currently supports.",
      columnMinimum: "Minimum",
      columnRecommended: "Recommended",
      platforms: [
        {
          id: "windows",
          label: "Windows",
          rows: [
            { label: "Operating System", minimum: "Windows 10 64-bit (22H2) or later", recommended: "Windows 11 64-bit" },
            {
              label: "Processor",
              minimum: "Intel Core i5 10th Gen / AMD Ryzen 5 3600 or better",
              recommended: "Intel Core i7 12th Gen+ / AMD Ryzen 7 5700X or better",
            },
            { label: "Memory", minimum: "16 GB RAM", recommended: "32 GB RAM or more" },
            {
              label: "Graphics",
              minimum: "NVIDIA RTX 2060 / RTX 3060 or better, 6GB+ VRAM",
              recommended: "NVIDIA RTX 4060 Ti 16 GB / RTX 5070 or better",
            },
            { label: "Storage", minimum: "10 GB available SSD space", recommended: "20 GB+ available NVMe SSD space" },
          ],
        },
        {
          id: "macos",
          label: "macOS",
          rows: [
            { label: "Operating System", minimum: "macOS 13 Ventura or later", recommended: "Latest macOS" },
            { label: "Processor", minimum: "Apple M1 / M2 or later", recommended: "Apple M4 Pro / M5 Pro or better" },
            { label: "Memory", minimum: "16 GB Unified Memory", recommended: "24 / 32 GB Unified Memory or more" },
            { label: "Graphics", minimum: "Apple Silicon integrated GPU", recommended: "Apple M4 Pro / M5 Pro / M5 Max GPU" },
            { label: "Storage", minimum: "10 GB available SSD space", recommended: "20 GB+ available SSD space" },
          ],
        },
      ],
    },
    faq: {
      eyebrow: "( FAQ )",
      title: "Questions, answered.",
      items: [
        {
          question: "What is FaceFusion?",
          answer:
            "FaceFusion is a desktop app that changes your face on camera in real time — built for streams, calls, content and pranks.",
        },
        {
          question: "Is FaceFusion free?",
          answer:
            "You can download and try FaceFusion for free to see how it works and whether it runs well on your computer. Streaming and recording require a paid subscription.",
        },
        {
          question: "What does the paid subscription include?",
          answer:
            "The paid plan unlocks full access to FaceFusion, including streaming and recording, with no trial restrictions. Choose monthly, quarterly or annual billing.",
        },
        {
          question: "What operating systems does FaceFusion support?",
          answer: "FaceFusion runs on Windows and macOS.",
        },
        {
          question: "Do I need to upload my own photos?",
          answer:
            "Yes. Add the face images you want to use to your library inside the app, then select one to apply it to your camera.",
        },
      ],
    },
    responsibleUse: {
      title: "Create responsibly.",
      description:
        "FaceFusion is built for entertainment and creative expression. Respect other people, their identity and their consent when creating or sharing content.",
      links: [
        { label: "Terms of Use", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    finalCta: {
      eyebrow: "Ready when you are.",
      title: ["Pick a face.", "Start creating."],
      description:
        "Download FaceFusion and turn your next stream, character or joke into something nobody expected.",
      ctaPrimary: "Download FaceFusion",
      ctaSecondary: "See how it works",
    },
    footer: {
      tagline: "Change your face. Create the moment.",
      productHeading: "Product",
      productLinks: [
        { label: "How it works", href: "/#how-it-works" },
        { label: "Use cases", href: "/#use-cases" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Download", href: "/download" },
      ],
      legalHeading: "Legal",
      legalLinks: [
        { label: "Terms of Use", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
      copyright: "© 2026 FaceFusion. All rights reserved.",
    },
    ui: {
      camera: "Camera",
      faces: "Faces",
      addFace: "Add Face",
      selected: "Selected",
      active: "Active",
      original: "Original",
      preview: "Preview",
      settings: "Settings",
      intensity: "Intensity",
      ready: "Ready",
    },
  },
  es: {
    meta: {
      title: "FaceFusion — Cambia tu Rostro en Tiempo Real",
      description:
        "FaceFusion es una aplicación de escritorio para cambiar tu rostro en streams, contenido, bromas y experiencias creativas. Sube un rostro y transforma tu apariencia en segundos.",
    },
    nav: {
      product: "Producto",
      howItWorks: "Cómo funciona",
      useCases: "Usos",
      pricing: "Precios",
      safety: "Uso responsable",
      download: "Descargar",
      login: "Iniciar sesión",
    },
    header: {
      cta: "Descargar FaceFusion",
    },
    hero: {
      eyebrow: "FaceFusion / Cambio de Rostro en Tiempo Real",
      h1Static: "Tu rostro.",
      h1Line2Prefix: "Tu",
      h1Words: ["stream", "contenido", "personaje"],
      h1Suffix: "Tus reglas.",
      description:
        "Sube un rostro y transforma la experiencia de tu cámara en segundos. Creado para streams, contenido, personajes y bromas inolvidables.",
      ctaPrimary: "Descargar FaceFusion",
      ctaSecondary: "Ver cómo funciona",
    },
    heroDemo: {
      windowTitle: "FaceFusion",
      cameraLabel: "Cámara",
      cameraState: "Original",
      resultLabel: "FaceFusion",
      resultState: "Activo",
      facesLabel: "Rostros",
      addFace: "Añadir rostro",
      statusReady: "Cámara lista",
      statusProcessing: "Aplicando rostro…",
      statusActive: "FaceFusion Activo",
      floatingTitle: "FaceFusion",
      floatingCamera: "Cámara",
      floatingFace: "Rostro",
      floatingIntensity: "Intensidad",
      floatingStatus: "Estado: Activo",
    },
    useCaseIntro: {
      eyebrow: "( 1 ) Qué hace",
      heading: ["Cambia el rostro.", "No la diversión."],
      tabs: [
        {
          id: "prank",
          label: "Bromear",
          title: "Convierte una llamada normal en caos.",
          description:
            "Añade un nuevo rostro a una videollamada con amigos y mira las reacciones en tiempo real.",
        },
        {
          id: "stream",
          label: "Transmitir",
          title: "Dale un personaje a tu stream.",
          description:
            "Conserva el encuadre de tu cámara y muestra una apariencia que tu audiencia no olvidará.",
        },
        {
          id: "create",
          label: "Crear",
          title: "Graba contenido en personaje.",
          description:
            "Filma sketches, reacciones y videos cortos con un rostro hecho para la idea.",
        },
        {
          id: "perform",
          label: "Interpretar",
          title: "Cambia de personaje a mitad de escena.",
          description:
            "Muévete entre apariencias al instante y mantén la interpretación en movimiento.",
        },
      ],
      chrome: {
        videoCall: "Videollamada",
        mute: "Silenciar",
        video: "Video",
        end: "Salir",
        live: "EN VIVO",
        statusOn: "FaceFusion Activo",
        character: "Personaje",
      },
    },
    howItWorks: {
      eyebrow: "( Cómo funciona )",
      title: "De una foto a un personaje en pocos pasos.",
      steps: [
        {
          number: "01",
          title: "Elegir",
          description: "Añade el rostro que quieres usar.",
        },
        {
          number: "02",
          title: "Transformar",
          description: "Selecciona un rostro y deja que FaceFusion haga el resto.",
        },
        {
          number: "03",
          title: "Actuar",
          description: "Mantén tus expresiones mientras cambia tu apariencia.",
        },
        {
          number: "04",
          title: "Crear",
          description:
            "Llévalo a un stream, una broma, un personaje o tu próximo contenido.",
        },
      ],
      addFaceCta: "Añadir rostro",
    },
    localWorkflow: {
      title: "Tus rostros permanecen en tu flujo de trabajo.",
      description:
        "FaceFusion está diseñado como una experiencia de escritorio, para que tu flujo creativo ocurra en tu computador y no dentro de una plataforma social pública.",
      diagram: {
        root: "Tu Computador",
        items: ["Cámara", "Biblioteca de rostros", "FaceFusion"],
      },
    },
    pricing: {
      eyebrow: "( Precios )",
      title: ["Pruébalo gratis.", "Desbloquea todo cuando estés listo."],
      description:
        "Empieza con una prueba gratuita para ver cómo corre FaceFusion en tu computador, luego suscríbete para acceso completo.",
      free: {
        name: "Prueba gratuita",
        price: "$0",
        description: "Prueba la plataforma y mira cómo funciona en tu computador.",
        features: [
          "Explora toda la interfaz",
          "Prueba el rendimiento en tu PC",
          "Sin transmisión ni grabación",
        ],
        cta: "Descargar la prueba gratuita",
      },
      paidFeatures: [
        "Acceso completo a FaceFusion",
        "Transmite en vivo con tu cámara transformada",
        "Graba y exporta tu contenido",
        "Sin restricciones de prueba",
      ],
      paidBadge: "Todo lo del plan gratis, más:",
      plans: [
        { id: "monthly", label: "Mensual", price: "$40", period: "/ mes", note: "Facturado mensualmente" },
        {
          id: "quarterly",
          label: "Trimestral",
          price: "$100",
          period: "/ 3 meses",
          note: "Facturado cada 3 meses",
          badge: "Ahorra 17%",
        },
        {
          id: "annual",
          label: "Anual",
          price: "$300",
          period: "/ año",
          note: "Facturado anualmente",
          badge: "Mejor precio",
        },
      ],
      cta: "Suscribirme",
    },
    systemRequirements: {
      eyebrow: "( Requisitos del sistema )",
      title: "¿Corre en tu computador?",
      description: "FaceFusion es una aplicación de escritorio. Esto es lo que soporta actualmente.",
      columnMinimum: "Mínimo",
      columnRecommended: "Recomendado",
      platforms: [
        {
          id: "windows",
          label: "Windows",
          rows: [
            { label: "Sistema operativo", minimum: "Windows 10 de 64 bits (22H2) o posterior", recommended: "Windows 11 de 64 bits" },
            {
              label: "Procesador",
              minimum: "Intel Core i5 10.ª Gen / AMD Ryzen 5 3600 o mejor",
              recommended: "Intel Core i7 12.ª Gen+ / AMD Ryzen 7 5700X o mejor",
            },
            { label: "Memoria", minimum: "16 GB de RAM", recommended: "32 GB de RAM o más" },
            {
              label: "Gráficos",
              minimum: "NVIDIA RTX 2060 / RTX 3060 o mejor, 6GB+ VRAM",
              recommended: "NVIDIA RTX 4060 Ti 16 GB / RTX 5070 o mejor",
            },
            { label: "Almacenamiento", minimum: "10 GB disponibles en SSD", recommended: "20 GB+ disponibles en SSD NVMe" },
          ],
        },
        {
          id: "macos",
          label: "macOS",
          rows: [
            { label: "Sistema operativo", minimum: "macOS 13 Ventura o posterior", recommended: "Última versión de macOS" },
            { label: "Procesador", minimum: "Apple M1 / M2 o posterior", recommended: "Apple M4 Pro / M5 Pro o mejor" },
            { label: "Memoria", minimum: "16 GB de memoria unificada", recommended: "24 / 32 GB de memoria unificada o más" },
            { label: "Gráficos", minimum: "GPU integrada de Apple Silicon", recommended: "GPU Apple M4 Pro / M5 Pro / M5 Max" },
            { label: "Almacenamiento", minimum: "10 GB disponibles en SSD", recommended: "20 GB+ disponibles en SSD" },
          ],
        },
      ],
    },
    faq: {
      eyebrow: "( Preguntas frecuentes )",
      title: "Preguntas, respondidas.",
      items: [
        {
          question: "¿Qué es FaceFusion?",
          answer:
            "FaceFusion es una aplicación de escritorio que cambia tu rostro en la cámara en tiempo real — creada para streams, llamadas, contenido y bromas.",
        },
        {
          question: "¿FaceFusion es gratis?",
          answer:
            "Puedes descargar y probar FaceFusion gratis para ver cómo funciona y si corre bien en tu computador. Transmitir y grabar requieren una suscripción de pago.",
        },
        {
          question: "¿Qué incluye la suscripción de pago?",
          answer:
            "El plan de pago desbloquea acceso completo a FaceFusion, incluyendo transmisión y grabación, sin restricciones de prueba. Elige facturación mensual, trimestral o anual.",
        },
        {
          question: "¿Qué sistemas operativos soporta FaceFusion?",
          answer: "FaceFusion corre en Windows y macOS.",
        },
        {
          question: "¿Necesito subir mis propias fotos?",
          answer:
            "Sí. Añade las imágenes de rostro que quieras usar a tu biblioteca dentro de la app, y luego selecciona una para aplicarla a tu cámara.",
        },
      ],
    },
    responsibleUse: {
      title: "Crea responsablemente.",
      description:
        "FaceFusion está creado para entretenimiento y expresión creativa. Respeta a las demás personas, su identidad y su consentimiento al crear o compartir contenido.",
      links: [
        { label: "Términos de Uso", href: "/terms" },
        { label: "Política de Privacidad", href: "/privacy" },
      ],
    },
    finalCta: {
      eyebrow: "Cuando quieras.",
      title: ["Elige un rostro.", "Empieza a crear."],
      description:
        "Descarga FaceFusion y convierte tu próximo stream, personaje o broma en algo que nadie esperaba.",
      ctaPrimary: "Descargar FaceFusion",
      ctaSecondary: "Ver cómo funciona",
    },
    footer: {
      tagline: "Cambia tu rostro. Crea el momento.",
      productHeading: "Producto",
      productLinks: [
        { label: "Cómo funciona", href: "/#how-it-works" },
        { label: "Usos", href: "/#use-cases" },
        { label: "Precios", href: "/#pricing" },
        { label: "Descargar", href: "/download" },
      ],
      legalHeading: "Legal",
      legalLinks: [
        { label: "Términos de Uso", href: "/terms" },
        { label: "Política de Privacidad", href: "/privacy" },
      ],
      copyright: "© 2026 FaceFusion. Todos los derechos reservados.",
    },
    ui: {
      camera: "Cámara",
      faces: "Rostros",
      addFace: "Añadir rostro",
      selected: "Seleccionado",
      active: "Activo",
      original: "Original",
      preview: "Vista previa",
      settings: "Ajustes",
      intensity: "Intensidad",
      ready: "Listo",
    },
  },
};
