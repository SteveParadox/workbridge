import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import {
  benefits,
  company,
  heroImage,
  homeAboutImage,
  services,
  trustIndicators,
  whatsappMessage
} from "@/lib/content";

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-x grid gap-12 pb-16 pt-12 lg:min-h-[calc(100vh-var(--header-height))] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pb-20 lg:pt-16">
          <div>
            <p className="eyebrow">
              <span className="h-px w-9 bg-gold" aria-hidden="true" />
              Staffing support across Nigeria
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] text-navy-deep sm:text-5xl lg:text-6xl">
              Reliable Pre-Screened Staff for Businesses in Nigeria
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              We help companies hire trusted, verified, and ready-to-work staff
              quickly and stress-free.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/request-staff">Request Staff</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" icon={PhoneCall}>
                Contact Us
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm font-semibold text-navy">
              Trusted staffing support for businesses across Nigeria
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {trustIndicators.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-md border border-line bg-white p-3"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-gold" />
                    <span className="text-sm font-semibold text-ink">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 border border-gold/45" />
            <div className="relative overflow-hidden rounded-md bg-navy shadow-lift">
              <Image
                src={heroImage}
                alt="Professionals in a structured business meeting reviewing staffing needs"
                width={1400}
                height={1100}
                priority
                className="aspect-[4/3] h-full w-full object-cover opacity-92"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="max-w-sm rounded-md border border-white/16 bg-white/94 p-5 shadow-soft backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                    Staffing Brief
                  </p>
                  <p className="mt-2 text-lg font-bold text-navy">
                    Screened candidates, clear approval, fast deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden w-52 rounded-md bg-navy p-5 text-white shadow-lift sm:block">
              <p className="text-sm font-semibold text-white/72">Priority roles</p>
              <p className="mt-2 text-xl font-black">Operations, hospitality, admin</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-md shadow-soft">
              <Image
                src={homeAboutImage}
                alt="Business professional discussing hiring support in an office"
                width={1200}
                height={900}
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 right-4 max-w-xs rounded-md border border-line bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-muted">Built for employers who need</p>
              <p className="mt-2 text-xl font-black text-navy">dependable people, faster.</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About WorkBridge"
              title="Staffing Solutions Built Around Your Business"
              text="WorkBridge Consulting NG is a professional staffing and workforce support company that connects businesses with reliable and pre-screened employees for immediate and long-term placement."
            />
            <div className="mt-6 grid gap-5 text-base leading-8 text-muted">
              <p>
                We help organizations reduce hiring stress by providing qualified
                candidates across different roles including cleaners, drivers,
                kitchen staff, front desk officers, teachers, office assistants,
                warehouse personnel, and logistics support staff.
              </p>
              <p>
                Our goal is to make recruitment faster, easier, and more reliable
                for businesses across Nigeria.
              </p>
            </div>
            <ButtonLink href="/about" variant="secondary" className="mt-8">
              Learn More About Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="services" className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Staffing Solutions for Every Business Need"
              text="We source and match dependable staff across multiple roles and industries."
            />
            <ButtonLink href="/request-staff" className="lg:mb-1">
              Request Staff
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={index === 0 || index === 4 || index === 8 ? "lg:row-span-0" : ""}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-y bg-paper">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="From Staff Request to Deployment"
            text="A clear process keeps employers informed from the first request through candidate approval and support."
            align="center"
          />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-y bg-navy-deep">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Why WorkBridge"
            title="Why Businesses Choose WorkBridge"
            text="Hiring support should feel structured, fast, and human. WorkBridge focuses on practical staffing outcomes for Nigerian businesses."
            light
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-4"
              >
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 text-gold" />
                <span className="text-sm font-semibold leading-6 text-white">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <ButtonLink href="/request-staff" variant="light">
              Need Staff? Let&apos;s Talk
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-8 rounded-md border border-line bg-paper p-6 shadow-soft md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Ready when you are</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-navy-deep sm:text-4xl">
                Need Reliable Staff for Your Business?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Tell us what you need and our team will help you find suitable
                candidates.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/request-staff">Request Staff</ButtonLink>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-navy/15 bg-white px-5 text-sm font-bold text-navy transition hover:border-gold hover:bg-gold/10"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
