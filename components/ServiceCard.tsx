import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  featured = false
}: ServiceCardProps) {
  return (
    <article
      className={`group rounded-md border p-6 transition hover:-translate-y-1 hover:shadow-soft ${
        featured
          ? "border-gold/40 bg-navy text-white"
          : "border-line bg-white hover:border-gold/55"
      }`}
    >
      <div
        className={`grid h-12 w-12 place-items-center rounded-md ${
          featured ? "bg-white/10 text-gold-light" : "bg-navy/6 text-navy"
        }`}
      >
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3
        className={`mt-5 text-lg font-bold ${
          featured ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-sm leading-6 ${
          featured ? "text-white/72" : "text-muted"
        }`}
      >
        {description}
      </p>
    </article>
  );
}
