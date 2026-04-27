import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PERSON, SEO, ALL_KEYWORDS, SITE_URL } from "./metadata";

// ─── Font Optimization ────────────────────────────────────────────────────────
// Using Inter for broad readability; display:swap prevents FOIT
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// ─── Root Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },

  description: SEO.description,

  keywords: ALL_KEYWORDS,

  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ─── Canonical & Robots ─────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ─── OpenGraph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${PERSON.name} — Portfolio`,
    title: SEO.defaultTitle,
    description: SEO.description,
    firstName: "Bhoomil",
    lastName: "Dayani",
    username: "bhoomildayani182",
    gender: "male",
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: SEO.ogImageAlt,
        type: "image/png",
      },
    ],
  },

  // ─── Twitter / X Card ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: SEO.twitterHandle,
    creator: SEO.twitterHandle,
    title: SEO.defaultTitle,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        alt: SEO.ogImageAlt,
      },
    ],
  },

  // ─── Google Search Console Verification ──────────────────────────────────
  // Steps to get your token:
  // 1. Go to https://search.google.com/search-console
  // 2. Add property → URL prefix → https://bhoomildayani.dev
  // 3. Choose "HTML tag" verification method
  // 4. Copy the content value from the meta tag and paste it below
  verification: {
    google: "OYD67jJrKrcpdKlC2XllmvO61pm51Qnwi18oTDSdbTo",
    // bing: "REPLACE_WITH_BING_WEBMASTER_TOKEN",
  },

  // ─── App / PWA ───────────────────────────────────────────────────────────
  applicationName: `${PERSON.name} Portfolio`,
  category: "technology",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/img/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/assets/img/favicon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f8fb",
  colorScheme: "light",
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PERSON.name,
  givenName: "Bhoomil",
  familyName: "Dayani",
  jobTitle: PERSON.jobTitle,
  description: SEO.description,
  url: SITE_URL,
  email: `mailto:${PERSON.email}`,
  telephone: PERSON.phone,
  image: {
    "@type": "ImageObject",
    url: PERSON.image,
    width: 400,
    height: 400,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSON.location.city,
    addressRegion: PERSON.location.region,
    addressCountry: PERSON.location.countryCode,
  },
  sameAs: [
    PERSON.linkedin,
    PERSON.github,
    PERSON.twitter,
    PERSON.hackerrank,
  ],
  knowsAbout: [
    "DevOps Engineering",
    "Kubernetes",
    "Docker",
    "AWS",
    "Microsoft Azure",
    "Terraform",
    "Ansible",
    "CI/CD Pipelines",
    "GitHub Actions",
    "Jenkins",
    "Argo CD",
    "SonarQube",
    "Trivy",
    "Snyk",
    "Prometheus",
    "Grafana",
    "DevSecOps",
    "Server Hardening",
    "High Availability Architecture",
    "Microservices",
    "Cloud Security",
    "Infrastructure as Code",
    "SOC 2 Compliance",
    "Linux",
    "Bash Scripting",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Cloud Practitioner",
      credentialCategory: "certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Amazon Web Services",
        url: "https://aws.amazon.com",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Microsoft Azure Fundamentals (AZ-900)",
      credentialCategory: "certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Microsoft",
        url: "https://microsoft.com",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "IBM DevOps and Software Engineering",
      credentialCategory: "certification",
      recognizedBy: {
        "@type": "Organization",
        name: "IBM",
        url: "https://ibm.com",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${PERSON.name} — DevOps Engineer Portfolio`,
  description: SEO.description,
  author: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-IN",
};

const projectItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/projects#projects`,
  name: "Selected Cloud and DevOps Projects",
  itemListElement: [
    "SmartATP Enterprise Automation Platform",
    "Cloud-Native DevSecOps CI/CD Platform",
    "Quantum RUDDER",
    "Clusterized Microservices Architecture",
    "Server Security Hardening with Ansible",
  ].map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    url: `${SITE_URL}/projects`,
  })),
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: `${PERSON.name} — DevOps & Cloud Engineer Portfolio`,
  description: SEO.description,
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  dateModified: new Date().toISOString(),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: `${SITE_URL}/experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/img/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/img/favicon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectItemListSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
