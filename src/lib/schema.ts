export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brancho.in/#organization",
      name: "Brancho",
      url: "https://brancho.in",
      logo: "https://brancho.in/logo2.png",
      description:
        "India's trusted home services platform connecting homeowners with background-verified professionals.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gir Somnath",
        addressLocality: "Veraval",
        addressRegion: "Gujarat",
        postalCode: "362265",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7572-836402",
        contactType: "customer service",
        email: "support@brancho.in",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      sameAs: [
        "https://www.linkedin.com/company/brancho-india/",
        "https://twitter.com/brancho",
        "https://www.instagram.com/brancho.group?stkn=anJxN25pOTA5NHo3&utm_source=qr",
        "https://youtube.com/@brancho",
        "https://facebook.com/brancho",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://brancho.in/#website",
      url: "https://brancho.in",
      name: "Brancho",
      publisher: { "@id": "https://brancho.in/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://brancho.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://brancho.in/#home-services",
      name: "Brancho Home Services",
      url: "https://brancho.in",
      parentOrganization: { "@id": "https://brancho.in/#organization" },
      areaServed: ["Veraval"],
      priceRange: "₹₹",
      image: "https://brancho.in/og-image.png",
    },
    {
      "@type": "Organization",
      "@id": "https://brancho.in/#brancho-foundation",
      name: "Brancho Foundation",
      parentOrganization: { "@id": "https://brancho.in/#organization" },
      url: "https://brancho.in/future/foundation",
    },
  ],
};

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How are Brancho professionals verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every professional passes multi-point verification including police background checks, identity and address proof, skill assessment and in-person training.",
      },
    },
    {
      "@type": "Question",
      name: "How does pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing is upfront and transparent. You see the exact cost before confirming a booking. There are no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "How do I become a service partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download the Brancho Partner app, complete your profile and pass verification and skill assessment to start receiving jobs.",
      },
    },
  ],
};
