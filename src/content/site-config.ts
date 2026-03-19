export type SiteNavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string }[] };

export type SiteMetric = {
  label: string;
  value: string;
  note?: string;
};

export type SiteTestimonial = {
  type: "Farmer story" | "Provider story" | "Partner quote";
  name: string;
  role: string;
  quote: string;
  isPlaceholder?: boolean;
};

export type SiteFaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "MechAfrica",
  tagline: "Mechanizing access to agricultural services across Africa",
  description:
    "MechAfrica is a Ghana-first agricultural services network connecting farmers, service providers, and field agents to request, manage, and deliver farm services — via mobile apps and USSD.",
  url: "https://mechafrica.example",

  ussd: {
    code: "*928*193#",
    telHref: "tel:*928*193%23",
  },

  appLinks: {
    farmer: {
      playStore: "https://example.com/farmers-play-store",
      appStore: "https://example.com/farmers-app-store",
    },
    provider: {
      playStore: "https://example.com/providers-play-store",
      appStore: "https://example.com/providers-app-store",
    },
    agents: {
      waitlist: "/contact?topic=agents",
    },
  },

  contact: {
    email: "hello@mechafrica.example",
    phone: "+233 XX XXX XXXX",
    address: "Accra, Ghana",
  },

  social: {
    x: "https://twitter.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },

  partnershipLine:
    "Built through the partnership of Agrinvest Limited and MechLink Limited, with support from AGRA.",
} as const;

export const navItems: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "Solutions",
    children: [
      { label: "For Farmers", href: "/solutions/farmers" },
      { label: "For Service Providers", href: "/solutions/service-providers" },
      { label: "For Agents", href: "/solutions/agents" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Download", href: "/download" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const partners = [
  { name: "Agrinvest Limited", note: "Founding partner" },
  { name: "MechLink Limited", note: "Founding partner" },
  { name: "AGRA", note: "Support" },
] as const;

export const platformHighlights = [
  {
    title: "Service request management",
    description:
      "Capture demand, route it to providers, and track each job from request to completion.",
  },
  {
    title: "Multi-farm support",
    description:
      "Manage multiple farms or communities while keeping requests and updates clear.",
  },
  {
    title: "Asset and provider management",
    description:
      "Coordinate jobs, teams, and equipment to improve utilization and delivery reliability.",
  },
  {
    title: "Notifications and updates",
    description:
      "Keep farmers and providers aligned with clear status updates and reminders.",
  },
  {
    title: "Offline-first sync",
    description:
      "Keep work moving in low-connectivity areas and sync when a connection returns.",
  },
  {
    title: "Voice notes and rich context",
    description:
      "Share voice notes and context when typing isn’t practical in the field.",
  },
  {
    title: "Location-aware operations",
    description:
      "Support routing and coordination when service delivery spans districts and communities.",
  },
  {
    title: "USSD access for reach",
    description:
      "USSD lets farmers request services without a smartphone.",
  },
] as const;

export const impactMetrics: SiteMetric[] = [
  { label: "Farmers registered", value: "11,000+" },
  { label: "Service providers onboarded", value: "10+" },
  { label: "USSD access for farmers", value: "*928*193#" },
  { label: "Current focus", value: "Ghana" },
];

export const testimonials: SiteTestimonial[] = [
  {
    type: "Farmer story",
    name: "Ama K.",
    role: "Maize farmer, Northern Ghana",
    quote:
      "I used to struggle to find timely ploughing. With MechAfrica, I can request early, get updates, and plan my season with more confidence.",
    isPlaceholder: true,
  },
  {
    type: "Provider story",
    name: "Kojo A.",
    role: "Mechanization service provider",
    quote:
      "Demand is easier to manage when jobs are organized in one place. I can accept requests, coordinate my team, and keep farmers updated.",
    isPlaceholder: true,
  },
  {
    type: "Partner quote",
    name: "Partner representative",
    role: "Partner perspective",
    quote:
      "MechAfrica strengthens service delivery by connecting people, tools, and workflows — including users who rely on USSD and offline access.",
    isPlaceholder: true,
  },
];

export const globalFaq: SiteFaqItem[] = [
  {
    question: "What is MechAfrica?",
    answer:
      "MechAfrica is a Ghana-first agricultural services network that connects farmers and service providers. Requests, delivery, and updates happen through mobile apps, with USSD as a basic-phone option for farmers.",
  },
  {
    question: "Who can use it?",
    answer:
      "Farmers request services. Service providers manage and deliver jobs. Agents support onboarding and coordination (the Agents App is planned for a future release).",
  },
  {
    question: "Is it only for Ghana?",
    answer:
      "MechAfrica is currently focused on Ghana. Expansion to additional markets is planned over time.",
  },
  {
    question: "How do farmers request services?",
    answer:
      "Farmers can request services through the Farmers App, or by dialing USSD. Updates come through the same channel.",
  },
  {
    question: "Do I need internet to use MechAfrica?",
    answer:
      "USSD works without internet. The apps are built for low-connectivity environments and can sync when a connection returns.",
  },
  {
    question: "Can I use USSD?",
    answer:
      `Yes. Farmers can dial ${siteConfig.ussd.code} to request services on a basic phone — no smartphone required.`,
  },
  {
    question: "Is the provider app different?",
    answer:
      "Yes. Service providers use a dedicated app for requests, scheduling, teams/equipment, and completion tracking.",
  },
  {
    question: "Is the agents app available now?",
    answer:
      "Not yet. The Agents App is planned for a future release. You can join the waitlist to learn about pilots and release timing.",
  },
  {
    question: "How do I partner with MechAfrica?",
    answer:
      "Use the contact form and select “Partnership inquiry”. We’ll route your message to the right team.",
  },
  {
    question: "How do I get support?",
    answer:
      "Use the contact form and select “Support inquiry”, or reach out via the contact details on the Contact page.",
  },
];

export const farmerServices = [
  "Ploughing and land preparation",
  "Planting",
  "Spraying and input application",
  "Harvesting",
  "Threshing and processing support",
  "Transportation and logistics",
  "Drone services (where available)",
  "Other mechanized and related services",
] as const;

export type AppScreenshot = {
  audience: "Farmers App" | "Provider App" | "Agents App";
  title: string;
  description: string;
  imageSrc?: string;
};

export const downloadScreenshots: AppScreenshot[] = [
  {
    audience: "Farmers App",
    title: "Request services in minutes",
    description:
      "Capture demand clearly (service type, farm details, timing) and receive updates as providers respond.",
    imageSrc: "/images/screenshots/farmers-01.png",
  },
  {
    audience: "Provider App",
    title: "Manage jobs and assets",
    description:
      "Accept requests, schedule work, assign equipment and operators, and track active delivery across locations.",
    imageSrc: "/images/screenshots/providers-01.png",
  },
  {
    audience: "Agents App",
    title: "Support onboarding and coordination",
    description:
      "Planned release: workflows for onboarding, follow-ups, issue management, and operational notifications.",
    imageSrc: "/images/screenshots/agents-01.png",
  },
];

