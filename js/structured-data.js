const SITE_URL = "https://tiom.nu/";
const BUSINESS_ID = "https://tiom.nu/#business";

const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tiom.nu/#website",
    "name": "TIOM",
    "url": "https://tiom.nu/",
    "inLanguage": "sv-SE",
    "publisher": { "@id": BUSINESS_ID }
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    "name": "TIOM",
    "description": "IT-support och teknikhjälp i Linköping med hembesök hos privatpersoner. Hjälp med datorer, Wi-Fi, skrivare, ny dator, backup och säkerhet.",
    "url": "https://tiom.nu/",
    "telephone": "+46706533535",
    "email": "tiom.info@gmail.com",
    "priceRange": "500 SEK/timme efter RUT-avdrag",
    "image": "https://tiom.nu/img/TIOM%20OG%20Banner.svg",
    "logo": "https://tiom.nu/img/TIOM%20Black.svg",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Linköping",
        "addressRegion": "Östergötland",
        "addressCountry": "SE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 58.4108,
        "longitude": 15.6214
    },
    "areaServed": [
        { "@type": "City", "name": "Linköping" },
        { "@type": "AdministrativeArea", "name": "Östergötland" }
    ],
    "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 58.4108,
            "longitude": 15.6214
        },
        "geoRadius": "40000"
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "15:00"
        }
    ],
    "serviceType": [
        "IT-support",
        "Teknikhjälp",
        "Datorhjälp",
        "Wi-Fi och nätverksinstallation",
        "Skrivarinstallation",
        "Säkerhet och backup",
        "Uppstart av ny dator"
    ],
    "knowsLanguage": ["sv", "en"]
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
        },
        {
            "@type": "Question",
            "name": "Vad kostar ett hembesök?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "500 kr per timme efter RUT-avdrag för privatpersoner i Linköping med omnejd."
            }
        }
    ]
};

function buildServiceSchema({ name, slug, description, serviceType }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "serviceType": serviceType,
        "description": description,
        "provider": { "@id": BUSINESS_ID },
        "areaServed": [
            { "@type": "City", "name": "Linköping" },
            { "@type": "AdministrativeArea", "name": "Östergötland" }
        ],
        "url": "https://tiom.nu/" + slug,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SEK",
            "price": "500",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "500",
                "priceCurrency": "SEK",
                "unitText": "HOUR"
            },
            "eligibleCustomerType": "Privatperson",
            "availability": "https://schema.org/InStock"
        }
    };
}

const datorhjalpService = buildServiceSchema({
    name: "Datorhjälp i Linköping",
    slug: "datorhjalp-linkoping.html",
    serviceType: "Datorhjälp och felsökning",
    description: "Hjälp på plats med långsam dator, krascher, uppdateringar, konton, lösenord och program som inte fungerar. Hembesök i Linköping med omnejd."
});

const wifiService = buildServiceSchema({
    name: "Wi-Fi och routerinstallation i Linköping",
    slug: "wifi-router-hjalp-linkoping.html",
    serviceType: "Wi-Fi-installation och nätverksoptimering",
    description: "Installation av router, bättre Wi-Fi-täckning, mesh-nätverk och felsökning av internet- och nätverksproblem. Hembesök i Linköping med omnejd."
});

const skrivareTvService = buildServiceSchema({
    name: "Installation av skrivare, TV och smarta enheter i Linköping",
    slug: "skrivare-tv-installation-linkoping.html",
    serviceType: "Installation av skrivare, TV och smarta enheter",
    description: "Installation och felsökning av skrivare, scanner, smart-TV, Chromecast, Apple TV och surfplattor. Hembesök i Linköping med omnejd."
});

const sakerhetBackupService = buildServiceSchema({
    name: "Ny dator, backup och säkerhet i Linköping",
    slug: "ny-dator-backup-sakerhet-linkoping.html",
    serviceType: "Uppstart av ny dator, backup och datasäkerhet",
    description: "Uppstart av ny dator, dataöverföring, backup av bilder och filer samt virusskydd och säkerhetsinställningar. Hembesök i Linköping med omnejd."
});

const authorSchema = {
    "@type": "Person",
    "name": "Theodor Lindberg",
    "url": "https://theodorlindberg.se"
};

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://tiom.nu/guider/#blog",
    "name": "TIOM Guider",
    "description": "Guider och praktiska råd om datorer, Wi-Fi, backup och säkerhet från TIOM i Linköping.",
    "url": "https://tiom.nu/guider/",
    "inLanguage": "sv-SE",
    "publisher": { "@id": BUSINESS_ID }
};

function buildArticleSchema({ headline, description, slug, datePublished, dateModified, image }) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": headline,
        "description": description,
        "image": image || "https://tiom.nu/img/TIOM%20OG%20Banner.svg",
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": authorSchema,
        "publisher": { "@id": BUSINESS_ID },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://tiom.nu/guider/" + slug
        },
        "url": "https://tiom.nu/guider/" + slug,
        "inLanguage": "sv-SE"
    };
}

const langsamDatorArticle = buildArticleSchema({
    headline: "Varför är datorn så långsam? Vanliga orsaker och vad du kan göra själv",
    description: "Praktisk guide: de fem vanligaste orsakerna till att en dator blir seg, och vad du kan göra för att få tillbaka tempot - utan att behöva köpa en ny.",
    slug: "varfor-blir-datorn-langsam.html",
    datePublished: "2026-05-28"
});

const wifiTackningArticle = buildArticleSchema({
    headline: "Bättre Wi-Fi hemma - så får du täckning i hela bostaden",
    description: "Guide till bättre Wi-Fi-täckning hemma: placering av router, mesh-system, kanaler och de vanligaste misstagen som gör att signalen inte räcker.",
    slug: "battre-wifi-tackning-hemma.html",
    datePublished: "2026-05-28"
});

const backupBilderArticle = buildArticleSchema({
    headline: "Backup av bilder och dokument - guide för 2026",
    description: "Så tar du backup på dina bilder, dokument och mejl på ett sätt som faktiskt fungerar i längden. Jämförelse av iCloud, OneDrive, Google och extern hårddisk.",
    slug: "backup-av-bilder-och-dokument.html",
    datePublished: "2026-05-28"
});

const tvVm2026Article = buildArticleSchema({
    headline: "Välja TV inför fotbolls-VM 2026 - så hittar du rätt modell",
    description: "Praktisk guide om storlek, OLED vs QLED, 120 Hz, HDR och smart-TV-appar inför sommarens fotbolls-VM. Vad spelar roll och vad kan du strunta i?",
    slug: "valja-tv-vm-2026.html",
    datePublished: "2026-05-28"
});

function breadcrumb(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((it, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": it.name,
            "item": it.url
        }))
    };
}

const structuredDataByPath = {
    "/": [webSiteSchema, localBusinessSchema, faqSchema],
    "/index.html": [webSiteSchema, localBusinessSchema, faqSchema],
    "/services.html": [webSiteSchema, localBusinessSchema, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Tjänster", url: "https://tiom.nu/services.html" }
    ])],
    "/about.html": [webSiteSchema, localBusinessSchema, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Om mig", url: "https://tiom.nu/about.html" }
    ])],
    "/book.html": [webSiteSchema, localBusinessSchema, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Boka tid", url: "https://tiom.nu/book.html" }
    ])],
    "/datorhjalp-linkoping.html": [webSiteSchema, localBusinessSchema, datorhjalpService, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Tjänster", url: "https://tiom.nu/services.html" },
        { name: "Datorhjälp i Linköping", url: "https://tiom.nu/datorhjalp-linkoping.html" }
    ])],
    "/wifi-router-hjalp-linkoping.html": [webSiteSchema, localBusinessSchema, wifiService, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Tjänster", url: "https://tiom.nu/services.html" },
        { name: "Wi-Fi och routerhjälp i Linköping", url: "https://tiom.nu/wifi-router-hjalp-linkoping.html" }
    ])],
    "/skrivare-tv-installation-linkoping.html": [webSiteSchema, localBusinessSchema, skrivareTvService, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Tjänster", url: "https://tiom.nu/services.html" },
        { name: "Installation av skrivare och TV i Linköping", url: "https://tiom.nu/skrivare-tv-installation-linkoping.html" }
    ])],
    "/ny-dator-backup-sakerhet-linkoping.html": [webSiteSchema, localBusinessSchema, sakerhetBackupService, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Tjänster", url: "https://tiom.nu/services.html" },
        { name: "Ny dator, backup och säkerhet i Linköping", url: "https://tiom.nu/ny-dator-backup-sakerhet-linkoping.html" }
    ])],
    "/guider": [webSiteSchema, localBusinessSchema, blogSchema, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Guider", url: "https://tiom.nu/guider/" }
    ])],
    "/guider/": [webSiteSchema, localBusinessSchema, blogSchema, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Guider", url: "https://tiom.nu/guider/" }
    ])],
    "/guider/index.html": [webSiteSchema, localBusinessSchema, blogSchema, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Guider", url: "https://tiom.nu/guider/" }
    ])],
    "/guider/varfor-blir-datorn-langsam.html": [webSiteSchema, localBusinessSchema, langsamDatorArticle, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Guider", url: "https://tiom.nu/guider/" },
        { name: "Varför blir datorn långsam?", url: "https://tiom.nu/guider/varfor-blir-datorn-langsam.html" }
    ])],
    "/guider/battre-wifi-tackning-hemma.html": [webSiteSchema, localBusinessSchema, wifiTackningArticle, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Guider", url: "https://tiom.nu/guider/" },
        { name: "Bättre Wi-Fi-täckning hemma", url: "https://tiom.nu/guider/battre-wifi-tackning-hemma.html" }
    ])],
    "/guider/backup-av-bilder-och-dokument.html": [webSiteSchema, localBusinessSchema, backupBilderArticle, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Guider", url: "https://tiom.nu/guider/" },
        { name: "Backup av bilder och dokument", url: "https://tiom.nu/guider/backup-av-bilder-och-dokument.html" }
    ])],
    "/guider/valja-tv-vm-2026.html": [webSiteSchema, localBusinessSchema, tvVm2026Article, breadcrumb([
        { name: "Hem", url: "https://tiom.nu/" },
        { name: "Guider", url: "https://tiom.nu/guider/" },
        { name: "Välja TV inför fotbolls-VM 2026", url: "https://tiom.nu/guider/valja-tv-vm-2026.html" }
    ])]
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
