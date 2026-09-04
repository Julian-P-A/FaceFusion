import type { Locale } from "@/data/translations";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export interface LegalCopy {
  terms: LegalDoc;
  privacy: LegalDoc;
}

const lastUpdatedEn = "Last updated: September 3, 2026";
const lastUpdatedEs = "Última actualización: 3 de septiembre de 2026";

export const legalContent: Record<Locale, LegalCopy> = {
  en: {
    terms: {
      eyebrow: "( Legal )",
      title: "Terms of Use",
      updated: lastUpdatedEn,
      intro:
        "These Terms of Use (\"Terms\") govern your access to and use of FaceFusion, a desktop application for real-time face changing, and the website and account services that support it. By downloading, installing, or using FaceFusion, you agree to these Terms.",
      sections: [
        {
          heading: "1. The Service",
          body: [
            "FaceFusion is a desktop application that lets you apply a face you upload to your live camera feed, for entertainment purposes such as pranks, streams, content creation and character performances.",
            "The application runs on your computer. Some features — including creating an account, managing your subscription and billing — are handled through this website.",
          ],
        },
        {
          heading: "2. Eligibility and Accounts",
          body: [
            "You must be at least 16 years old, or the age of digital consent in your country, to create a FaceFusion account. If you are creating an account on behalf of an organization, you confirm you have the authority to do so.",
            "You are responsible for keeping your account credentials secure and for all activity that happens under your account.",
          ],
        },
        {
          heading: "3. Free Trial and Subscriptions",
          body: [
            "FaceFusion offers a free trial so you can explore the interface and confirm the application runs well on your computer. The free trial does not include streaming or recording.",
            "Full access — including streaming and recording — requires a paid subscription, billed monthly, quarterly or annually as shown on our Pricing page. Subscriptions renew automatically for the same billing period until you cancel.",
            "You can cancel your subscription at any time; cancellation takes effect at the end of the current billing period. Prices and plans may change, and we will give you reasonable notice before any change applies to your subscription.",
          ],
        },
        {
          heading: "4. Acceptable Use",
          body: [
            "FaceFusion is built for entertainment and creative expression. When you use it, you agree to respect other people, their identity and their consent.",
            "You may not use FaceFusion to defraud or deceive anyone for financial gain, impersonate another person without consent, bypass identity verification or authentication systems, create or share non-consensual intimate content, harass or threaten anyone, or otherwise break the law.",
            "We may suspend or terminate accounts that violate this section.",
          ],
        },
        {
          heading: "5. Your Content",
          body: [
            "You keep ownership of the face images you add to FaceFusion and of the content you create with it. You are responsible for having the rights or consent needed to use any image you upload.",
            "The application processes your face images and camera feed as part of your local creative workflow on your device. We do not require you to upload your face library to our servers in order to use the desktop application.",
          ],
        },
        {
          heading: "6. Intellectual Property",
          body: [
            "FaceFusion, including its software, design and branding, is protected by intellectual property law. These Terms do not grant you any rights to our trademarks, logos or source code beyond what is needed to use the application as intended.",
          ],
        },
        {
          heading: "7. Termination",
          body: [
            "You may stop using FaceFusion and close your account at any time. We may suspend or terminate your access if you violate these Terms, including the Acceptable Use section above.",
          ],
        },
        {
          heading: "8. Disclaimers and Limitation of Liability",
          body: [
            "FaceFusion is provided \"as is.\" We do not guarantee that the application will be uninterrupted, error-free, or compatible with every computer configuration.",
            "To the maximum extent permitted by law, FaceFusion is not liable for indirect, incidental or consequential damages arising from your use of the application, including damages resulting from content created with it.",
          ],
        },
        {
          heading: "9. Changes to These Terms",
          body: [
            "We may update these Terms from time to time. If we make material changes, we will update the \"Last updated\" date above and, where appropriate, provide additional notice.",
          ],
        },
        {
          heading: "10. Contact",
          body: ["If you have questions about these Terms, you can reach us through the contact options listed on our website."],
        },
      ],
    },
    privacy: {
      eyebrow: "( Legal )",
      title: "Privacy Policy",
      updated: lastUpdatedEn,
      intro:
        "This Privacy Policy explains what information FaceFusion collects, how we use it, and the choices you have. It applies to our website, account services and desktop application.",
      sections: [
        {
          heading: "1. Information We Collect",
          body: [
            "Account information: when you create an account, we collect your email address and, if you subscribe to a paid plan, billing information handled by our payment processor.",
            "Face images and camera data: FaceFusion processes the face images you add and your camera feed on your own device, as part of your local creative workflow. We do not collect this content as part of operating the desktop application.",
            "Website usage information: like most websites, our site may use basic, privacy-respecting analytics and cookies to understand traffic and keep the site working correctly.",
          ],
        },
        {
          heading: "2. How We Use Information",
          body: [
            "We use account and billing information to create and manage your account, process subscription payments, provide customer support, and communicate important updates about the service.",
            "We use website usage information to maintain, secure and improve the site.",
          ],
        },
        {
          heading: "3. Sharing of Information",
          body: [
            "We do not sell your personal information. We share account and billing information only with service providers who help us operate FaceFusion — such as our payment processor — and only to the extent needed to provide the service, or where required by law.",
          ],
        },
        {
          heading: "4. Data Retention",
          body: [
            "We keep account information for as long as your account is active. If you close your account, we delete or anonymize your account information within a reasonable period, except where we need to keep it to comply with legal or accounting obligations.",
          ],
        },
        {
          heading: "5. Your Rights",
          body: [
            "Depending on where you live, you may have the right to access, correct, or request deletion of your personal information. You can exercise these rights through the contact options listed on our website.",
          ],
        },
        {
          heading: "6. Children's Privacy",
          body: [
            "FaceFusion is not directed at children under 16, and we do not knowingly collect account information from children under that age.",
          ],
        },
        {
          heading: "7. Security",
          body: [
            "We use reasonable technical and organizational measures to protect the account information we hold. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "8. Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. If we make material changes, we will update the \"Last updated\" date above and, where appropriate, provide additional notice.",
          ],
        },
        {
          heading: "9. Contact",
          body: ["If you have questions about this Privacy Policy, you can reach us through the contact options listed on our website."],
        },
      ],
    },
  },
  es: {
    terms: {
      eyebrow: "( Legal )",
      title: "Términos de Uso",
      updated: lastUpdatedEs,
      intro:
        "Estos Términos de Uso (\"Términos\") rigen tu acceso y uso de FaceFusion, una aplicación de escritorio para cambiar tu rostro en tiempo real, así como el sitio web y los servicios de cuenta que la acompañan. Al descargar, instalar o usar FaceFusion, aceptas estos Términos.",
      sections: [
        {
          heading: "1. El Servicio",
          body: [
            "FaceFusion es una aplicación de escritorio que te permite aplicar un rostro que subes a tu cámara en vivo, con fines de entretenimiento como bromas, streams, creación de contenido e interpretación de personajes.",
            "La aplicación corre en tu computador. Algunas funciones —incluyendo crear una cuenta y administrar tu suscripción y facturación— se manejan a través de este sitio web.",
          ],
        },
        {
          heading: "2. Elegibilidad y Cuentas",
          body: [
            "Debes tener al menos 16 años, o la edad de consentimiento digital en tu país, para crear una cuenta de FaceFusion. Si creas una cuenta en nombre de una organización, confirmas que tienes autoridad para hacerlo.",
            "Eres responsable de mantener seguras las credenciales de tu cuenta y de toda actividad que ocurra bajo tu cuenta.",
          ],
        },
        {
          heading: "3. Prueba Gratuita y Suscripciones",
          body: [
            "FaceFusion ofrece una prueba gratuita para que explores la interfaz y confirmes que la aplicación corre bien en tu computador. La prueba gratuita no incluye transmisión ni grabación.",
            "El acceso completo —incluyendo transmisión y grabación— requiere una suscripción de pago, facturada mensual, trimestral o anualmente como se muestra en nuestra página de Precios. Las suscripciones se renuevan automáticamente por el mismo período de facturación hasta que las canceles.",
            "Puedes cancelar tu suscripción en cualquier momento; la cancelación entra en vigor al final del período de facturación actual. Los precios y planes pueden cambiar, y te daremos aviso razonable antes de que cualquier cambio aplique a tu suscripción.",
          ],
        },
        {
          heading: "4. Uso Aceptable",
          body: [
            "FaceFusion está creado para entretenimiento y expresión creativa. Al usarlo, aceptas respetar a las demás personas, su identidad y su consentimiento.",
            "No puedes usar FaceFusion para defraudar o engañar a alguien con fines financieros, suplantar a otra persona sin su consentimiento, evadir sistemas de verificación de identidad o autenticación, crear o compartir contenido íntimo no consentido, acosar o amenazar a alguien, o infringir la ley de cualquier otra forma.",
            "Podemos suspender o cancelar cuentas que violen esta sección.",
          ],
        },
        {
          heading: "5. Tu Contenido",
          body: [
            "Conservas la propiedad de las imágenes de rostro que añades a FaceFusion y del contenido que creas con la aplicación. Eres responsable de contar con los derechos o el consentimiento necesarios para usar cualquier imagen que subas.",
            "La aplicación procesa tus imágenes de rostro y tu cámara como parte de tu flujo de trabajo creativo local en tu dispositivo. No necesitas subir tu biblioteca de rostros a nuestros servidores para usar la aplicación de escritorio.",
          ],
        },
        {
          heading: "6. Propiedad Intelectual",
          body: [
            "FaceFusion, incluyendo su software, diseño y marca, está protegido por la ley de propiedad intelectual. Estos Términos no te otorgan derechos sobre nuestras marcas, logotipos o código fuente más allá de lo necesario para usar la aplicación como fue pensada.",
          ],
        },
        {
          heading: "7. Terminación",
          body: [
            "Puedes dejar de usar FaceFusion y cerrar tu cuenta en cualquier momento. Podemos suspender o cancelar tu acceso si violas estos Términos, incluyendo la sección de Uso Aceptable.",
          ],
        },
        {
          heading: "8. Exenciones y Limitación de Responsabilidad",
          body: [
            "FaceFusion se ofrece \"tal cual\". No garantizamos que la aplicación sea ininterrumpida, libre de errores, o compatible con cualquier configuración de computador.",
            "En la máxima medida permitida por la ley, FaceFusion no es responsable por daños indirectos, incidentales o consecuentes derivados del uso de la aplicación, incluyendo daños resultantes del contenido creado con ella.",
          ],
        },
        {
          heading: "9. Cambios a estos Términos",
          body: [
            "Podemos actualizar estos Términos de vez en cuando. Si hacemos cambios importantes, actualizaremos la fecha de \"Última actualización\" indicada arriba y, cuando corresponda, daremos aviso adicional.",
          ],
        },
        {
          heading: "10. Contacto",
          body: ["Si tienes preguntas sobre estos Términos, puedes contactarnos a través de las opciones de contacto listadas en nuestro sitio web."],
        },
      ],
    },
    privacy: {
      eyebrow: "( Legal )",
      title: "Política de Privacidad",
      updated: lastUpdatedEs,
      intro:
        "Esta Política de Privacidad explica qué información recopila FaceFusion, cómo la usamos y las opciones que tienes. Aplica a nuestro sitio web, servicios de cuenta y aplicación de escritorio.",
      sections: [
        {
          heading: "1. Información que Recopilamos",
          body: [
            "Información de cuenta: cuando creas una cuenta, recopilamos tu correo electrónico y, si te suscribes a un plan de pago, la información de facturación manejada por nuestro procesador de pagos.",
            "Imágenes de rostro y datos de cámara: FaceFusion procesa las imágenes de rostro que añades y tu cámara en tu propio dispositivo, como parte de tu flujo de trabajo creativo local. No recopilamos este contenido como parte del funcionamiento de la aplicación de escritorio.",
            "Información de uso del sitio web: como la mayoría de sitios web, el nuestro puede usar analítica básica que respeta la privacidad y cookies para entender el tráfico y mantener el sitio funcionando correctamente.",
          ],
        },
        {
          heading: "2. Cómo Usamos la Información",
          body: [
            "Usamos la información de cuenta y facturación para crear y administrar tu cuenta, procesar pagos de suscripción, brindar soporte al cliente y comunicar actualizaciones importantes sobre el servicio.",
            "Usamos la información de uso del sitio web para mantener, proteger y mejorar el sitio.",
          ],
        },
        {
          heading: "3. Compartir Información",
          body: [
            "No vendemos tu información personal. Compartimos información de cuenta y facturación solo con proveedores de servicios que nos ayudan a operar FaceFusion —como nuestro procesador de pagos— y solo en la medida necesaria para brindar el servicio, o cuando la ley lo requiera.",
          ],
        },
        {
          heading: "4. Retención de Datos",
          body: [
            "Conservamos la información de cuenta mientras tu cuenta esté activa. Si cierras tu cuenta, eliminamos o anonimizamos tu información de cuenta dentro de un período razonable, salvo que necesitemos conservarla para cumplir obligaciones legales o contables.",
          ],
        },
        {
          heading: "5. Tus Derechos",
          body: [
            "Dependiendo de dónde vivas, puedes tener derecho a acceder, corregir o solicitar la eliminación de tu información personal. Puedes ejercer estos derechos a través de las opciones de contacto listadas en nuestro sitio web.",
          ],
        },
        {
          heading: "6. Privacidad de Menores",
          body: [
            "FaceFusion no está dirigido a menores de 16 años, y no recopilamos a sabiendas información de cuenta de menores de esa edad.",
          ],
        },
        {
          heading: "7. Seguridad",
          body: [
            "Usamos medidas técnicas y organizativas razonables para proteger la información de cuenta que manejamos. Ningún método de transmisión o almacenamiento es completamente seguro, por lo que no podemos garantizar seguridad absoluta.",
          ],
        },
        {
          heading: "8. Cambios a esta Política",
          body: [
            "Podemos actualizar esta Política de Privacidad de vez en cuando. Si hacemos cambios importantes, actualizaremos la fecha de \"Última actualización\" indicada arriba y, cuando corresponda, daremos aviso adicional.",
          ],
        },
        {
          heading: "9. Contacto",
          body: ["Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos a través de las opciones de contacto listadas en nuestro sitio web."],
        },
      ],
    },
  },
};
