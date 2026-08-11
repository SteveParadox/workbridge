import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { company, contactItems, whatsappMessage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WorkBridge Consulting NG in Port Harcourt for staffing and workforce placement support."
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <section className="bg-paper py-14 sm:py-18">
        <div className="container-x">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Help You Find the Right Staff"
            text="Reach WorkBridge Consulting NG by phone, email, WhatsApp, or the inquiry form below."
          />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-md bg-navy-deep p-6 text-white md:p-8">
            <h2 className="text-2xl font-black">{company.name}</h2>
            <div className="mt-7 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="focus-ring flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/82 transition hover:bg-white/10"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 text-gold" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-5 text-sm font-bold text-navy transition hover:bg-gold-light"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </aside>
          <div className="rounded-md border border-line bg-white p-5 shadow-soft sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
