import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company, contactItems, navItems, services, whatsappMessage } from "@/lib/content";

export function Footer() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-navy">
              <span className="h-4 w-6 border-y-4 border-gold" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-[0.12em]">
                {company.brandTop}
              </span>
              <span className="block text-[11px] font-semibold tracking-[0.22em] text-white/65">
                {company.brandBottom}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
            Professional staffing and workforce solutions for businesses across
            Nigeria.
          </p>
          <a
            href={whatsappUrl}
            className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-4 text-sm font-bold text-navy transition hover:bg-gold-light"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <FooterColumn title="Navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="footer-link">
              {item.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {services.slice(0, 6).map((item) => (
            <Link key={item.title} href="/services" className="footer-link">
              {item.title}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} className="footer-link flex gap-2">
                <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 text-gold" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </FooterColumn>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-sm text-white/55">
          © 2026 WorkBridge Consulting NG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
        {title}
      </h2>
      <div className="mt-5 grid gap-3 text-sm text-white/68">{children}</div>
    </div>
  );
}
