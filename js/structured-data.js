const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TIOM",
    "url": "https://tiom.nu/"
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TIOM",
    "description": "IT-support och teknikhjälp i Linköping med omnejd för privatpersoner.",
    "areaServed": ["Linköping", "Linköping med omnejd", "Östergötland"],
    "image": "https://tiom.nu/img/og-image.png",
    "logo": "https://tiom.nu/img/TIOM%20Black.svg",
    "serviceType": [
        "IT-support",
        "Teknikhjälp",
        "Datorhjälp",
        "Wi-Fi och nätverk",
        "Säkerhet och installation"
    ],
    "url": "https://tiom.nu/"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Vad hjälper TIOM med?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TIOM hjälper med datorer, Wi-Fi, skrivare, mobil, backup, lösenord, uppstart av ny teknik och generell teknikhjälp hemma."
            }
        },
        {
            "@type": "Question",
            "name": "Kommer du på hembesök i Linköping?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, jag arbetar främst med hembesök i Linköping med omnejd så att hjälpen sker där problemet finns."
            }
        },
        {
            "@type": "Question",
            "name": "Hjälper du med flera problem under samma besök?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, om du har flera teknikproblem kan vi ofta lösa flera saker under samma besök."
            }
        },
        {
            "@type": "Question",
            "name": "Tar du uppdrag från andra orter?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, TIOM tar även uppdrag från andra orter efter överenskommelse."
            }
        }
    ]
};

const structuredDataByPath = {
    "/": [webSiteSchema, localBusinessSchema, faqSchema],
    "/index.html": [webSiteSchema, localBusinessSchema, faqSchema],
    "/services.html": [localBusinessSchema, webSiteSchema],
    "/about.html": [webSiteSchema],
    "/book.html": [webSiteSchema]
};

function normalizePath(pathname) {
    if (!pathname || pathname === "/") {
        return "/";
    }

    return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function injectStructuredData() {
    const path = normalizePath(window.location.pathname);
    const entries = structuredDataByPath[path] || structuredDataByPath["/"];

    if (!entries || entries.length === 0) {
        return;
    }

    const head = document.head || document.getElementsByTagName("head")[0];

    entries.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(schema);
        head.appendChild(script);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectStructuredData);
} else {
    injectStructuredData();
}
