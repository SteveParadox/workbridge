import {
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  CookingPot,
  Factory,
  Handshake,
  Headset,
  Home,
  Mail,
  MapPin,
  Phone,
  School,
  ShieldCheck,
  Sparkles,
  Truck,
  UserCheck,
  Users,
  Utensils,
  Warehouse
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const company = {
  name: "WorkBridge Consulting NG",
  brandTop: "WORKBRIDGE",
  brandBottom: "CONSULTING NG",
  location: "Port Harcourt, Nigeria",
  phonePrimary: "0808 149 0346",
  phoneSecondary: "0902 104 5545",
  email: "precioussaintisreal@gmail.com",
  whatsapp: "2349021045545"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Apply", href: "/apply" },
  { label: "Contact", href: "/contact" }
];

export const trustIndicators: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Pre-Screened Candidates", icon: ShieldCheck },
  { label: "Multiple Staff Categories", icon: Users },
  { label: "Fast Deployment", icon: CalendarClock },
  { label: "Replacement Support", icon: ClipboardCheck }
];

export const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
}> = [
  {
    title: "Cleaners & Housekeeping Staff",
    description:
      "Reliable cleaning and housekeeping support for offices, homes, hospitality, and facilities.",
    icon: Sparkles,
    featured: true
  },
  {
    title: "Drivers",
    description:
      "Screened drivers for daily operations, errands, executive movement, and business logistics.",
    icon: Truck
  },
  {
    title: "Private Drivers",
    description:
      "Discreet, dependable private drivers matched to household or executive mobility needs.",
    icon: UserCheck
  },
  {
    title: "Company Drivers",
    description:
      "Job-ready drivers for corporate fleets, staff buses, dispatch, and field movement.",
    icon: Building2
  },
  {
    title: "Kitchen & Restaurant Staff",
    description:
      "Kitchen assistants, cooks, servers, and support workers for food-service operations.",
    icon: Utensils,
    featured: true
  },
  {
    title: "Front Desk / Receptionists",
    description:
      "Professional front-office staff who welcome guests and support daily administration.",
    icon: Headset
  },
  {
    title: "Teachers",
    description:
      "Primary and secondary teaching support for schools seeking dependable educators.",
    icon: School
  },
  {
    title: "Office Assistants",
    description:
      "Organized assistants for records, errands, filing, scheduling, and workplace coordination.",
    icon: BriefcaseBusiness
  },
  {
    title: "Warehouse & Logistics Staff",
    description:
      "Support staff for inventory, loading, dispatch coordination, and warehouse operations.",
    icon: Warehouse,
    featured: true
  },
  {
    title: "General Support Workers",
    description:
      "Flexible workforce support for day-to-day operational and facility needs.",
    icon: Handshake
  },
  {
    title: "Software Engineers",
    description:
      "Experienced developers for web, mobile, backend and product engineering roles.",
    icon: Sparkles
  },
  {
    title: "Data Analysts",
    description:
      "Professionals who turn business data into insights for reporting and decision-making.",
    icon: ClipboardCheck
  },
  {
    title: "Project Managers",
    description:
      "Skilled coordinators to lead delivery, timelines, budgets and cross-functional teams.",
    icon: BriefcaseBusiness
  },
  {
    title: "Sales Executives",
    description:
      "Commercial talent for client acquisition, account growth and revenue generation.",
    icon: Handshake
  },
  {
    title: "Human Resources Officers",
    description:
      "HR professionals for recruitment, onboarding, staff welfare and people operations.",
    icon: Users
  }
];

export const processSteps = [
  {
    title: "Staff Request",
    text: "Client sends a staffing request.",
    icon: ClipboardCheck
  },
  {
    title: "Candidate Sourcing",
    text: "WorkBridge sources suitable candidates.",
    icon: Users
  },
  {
    title: "Screening & Verification",
    text: "Candidates undergo screening and verification.",
    icon: ShieldCheck
  },
  {
    title: "Client Approval",
    text: "Candidate profiles are shared for selection.",
    icon: CheckCircle2
  },
  {
    title: "Deployment",
    text: "Selected staff are deployed.",
    icon: Truck
  },
  {
    title: "Replacement Support",
    text: "Replacement support is available where necessary.",
    icon: Handshake
  }
];

export const benefits = [
  "Pre-screened and verified candidates",
  "Fast staffing process",
  "Reliable and job-ready workers",
  "Flexible staffing solutions",
  "Reduced hiring stress for businesses",
  "Replacement support available"
];

export const contactItems = [
  {
    label: company.location,
    href: "https://maps.google.com/?q=Port%20Harcourt%2C%20Nigeria",
    icon: MapPin
  },
  {
    label: company.phonePrimary,
    href: "tel:+2349021045545",
    icon: Phone
  },
  {
    label: company.phoneSecondary,
    href: "tel:+2348081490346",
    icon: Phone
  },
  {
    label: company.email,
    href: `mailto:${company.email}`,
    icon: Mail
  }
];

export const heroImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=82";

export const homeAboutImage =
  "/bodyflyer.jpg";

export const aboutImage = "/bodyflyer.jpg";

export const operationsImage =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=82";

export const whatsappMessage = `Hello 👋
Thank you for contacting WorkBridge Consulting NG.

We provide pre-screened and reliable staff for businesses.

Kindly tell us:

1. The role you need
2. Your company name
3. Your company location

Our team will respond shortly.`;
