import type { Metadata } from "next";
import { StaffRequestForm } from "@/components/StaffRequestForm";
import { SectionHeading } from "@/components/SectionHeading";
import { trustIndicators } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request Staff",
  description:
    "Request reliable, pre-screened staff from WorkBridge Consulting NG for your business in Nigeria."
};

export default function RequestStaffPage() {
  return (
    <>
      <section className="bg-paper py-14 sm:py-18">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Request Staff"
            title="Tell Us the Staff You Need"
            text="Share the role, location, and start date. The form is structured for a future API or email workflow without pretending to submit data today."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {trustIndicators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-md border border-line bg-white p-4"
                >
                  <Icon aria-hidden="true" className="h-5 w-5 text-gold" />
                  <span className="text-sm font-bold text-navy">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-md bg-navy-deep p-6 text-white md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
              Hiring Details
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight">
              The clearer the request, the faster the match.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Include role expectations, work location, number of staff, preferred
              start date, shift requirements, and any special screening needs.
            </p>
            <div className="mt-8 h-px bg-white/12" />
            <p className="mt-6 text-sm leading-7 text-white/70">
              WorkBridge can support immediate and longer-term placement needs
              across office, hospitality, facility, education, warehouse, and
              logistics roles.
            </p>
          </aside>
          <div className="rounded-md border border-line bg-white p-5 shadow-soft sm:p-8">
            <StaffRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
