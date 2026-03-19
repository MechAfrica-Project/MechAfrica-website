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
    "MechAfrica connects farmers, service providers, and field agents through one digital platform for requesting, managing, and delivering agricultural services — via mobile apps and USSD.",
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
    address: "Accra, Ghana (placeholder office/location)",
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
      "Capture demand fast, route it to the right providers, and track delivery from request to completion.",
  },
  {
    title: "Multi-farm support",
    description:
      "Organize multiple farms, plots, or communities while keeping requests and updates clear.",
  },
  {
    title: "Asset and provider management",
    description:
      "Help providers stay visible and coordinated with jobs, teams, and equipment in one place.",
  },
  {
    title: "Notifications and updates",
    description:
      "Keep farmers and providers aligned with clear status updates and timely reminders.",
  },
  {
    title: "Offline-first sync",
    description:
      "Designed for low-connectivity environments so teams can keep working and sync when ready.",
  },
  {
    title: "Voice notes and rich context",
    description:
      "Support clearer communication when typing isn’t practical in the field.",
  },
  {
    title: "Location-aware operations",
    description:
      "Better routing and coordination when service delivery spans districts and communities.",
  },
  {
    title: "USSD access for reach",
    description:
      "Farmers can request services without a smartphone — expanding inclusion across the ecosystem.",
  },
] as const;

export const impactMetrics: SiteMetric[] = [
  { label: "Farmers reached", value: "XX,XXX", note: "Replace with verified data" },
  { label: "Providers onboarded", value: "X,XXX", note: "Replace with verified data" },
  { label: "Requests fulfilled", value: "XX,XXX", note: "Replace with verified data" },
  { label: "Districts covered", value: "XX", note: "Replace with verified data" },
  { label: "Jobs supported", value: "X,XXX", note: "Replace with verified data" },
  { label: "Service categories", value: "XX+", note: "Replace with verified data" },
];

export const testimonials: SiteTestimonial[] = [
  {
    type: "Farmer story",
    name: "Placeholder Farmer",
    role: "Maize farmer, Northern Ghana",
    quote:
      "Placeholder story: “I used to struggle to find timely ploughing. With MechAfrica, I can request early, get updates, and plan my season with more confidence.”",
    isPlaceholder: true,
  },
  {
    type: "Provider story",
    name: "Placeholder Provider",
    role: "Mechanization service provider",
    quote:
      "Placeholder story: “Demand is easier to manage when jobs are organized in one place. I can accept requests, coordinate my team, and keep farmers updated.”",
    isPlaceholder: true,
  },
  {
    type: "Partner quote",
    name: "Placeholder Partner",
    role: "Ecosystem partner",
    quote:
      "Placeholder quote: “MechAfrica strengthens service delivery by connecting people, tools, and processes — including users who rely on USSD and offline workflows.”",
    isPlaceholder: true,
  },
];

export const globalFaq: SiteFaqItem[] = [
  {
    question: "What is MechAfrica?",
    answer:
      "MechAfrica is a digital agricultural services platform that connects farmers, service providers, and field agents to request, manage, and deliver farm services through mobile apps and USSD.",
  },
  {
    question: "Who can use it?",
    answer:
      "Farmers can request services; service providers can receive and manage jobs; and agents support onboarding and operations (the Agents App is planned for a future release).",
  },
  {
    question: "Is it only for Ghana?",
    answer:
      "MechAfrica is currently focused on Ghana. The platform model is built to scale to additional markets over time.",
  },
  {
    question: "How do farmers request services?",
    answer:
      "Farmers can request services through the Farmers App or by dialing the USSD code. They can then track updates through the same channel.",
  },
  {
    question: "Do I need internet to use MechAfrica?",
    answer:
      "Some features work best with internet, but the platform is designed for low-connectivity environments with offline-first workflows and USSD access for farmers.",
  },
  {
    question: "Can I use USSD?",
    answer:
      "Yes. Farmers can access MechAfrica via USSD by dialing the provided code — no smartphone required.",
  },
  {
    question: "Is the provider app different?",
    answer:
      "Yes. Service providers use a dedicated app experience focused on job management, team/equipment coordination, and delivery tracking.",
  },
  {
    question: "Is the agents app available now?",
    answer:
      "The Agents App is planned for a future release. You can join the waitlist or contact us to learn more.",
  },
  {
    question: "How do I partner with MechAfrica?",
    answer:
      "Use the contact form and select “Partnership inquiry”. We’ll follow up with the right team.",
  },
  {
    question: "How do I get support?",
    answer:
      "Use the contact form and select “Support inquiry”, or reach out via the contact details listed on the Contact page.",
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

