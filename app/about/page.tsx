import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import { aboutImage, operationsImage } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about WorkBridge Consulting NG, a staffing and workforce placement company based in Port Harcourt, Nigeria."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper py-14 sm:py-18">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About WorkBridge"
              title="Connecting Businesses With Reliable People"
              text="WorkBridge Consulting NG is a staffing and workforce placement company based in Nigeria."
            />
            <div className="mt-6 grid gap-5 text-base leading-8 text-muted">
              <p>
                We specialize in sourcing, screening, and deploying qualified
                candidates to businesses that require reliable and dependable staff.
              </p>
              <p>
                We understand that hiring can be stressful and time-consuming,
                which is why we handle the process from sourcing to basic screening
                to ensure employers receive suitable and job-ready candidates.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-md shadow-soft">
            <Image
              src={aboutImage}
              alt="Professional discussing workforce needs in a modern office"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <article className="rounded-md border border-line bg-white p-8 shadow-soft">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-4 text-2xl font-black text-navy-deep">
              Simplify Hiring
            </h2>
            <p className="mt-4 leading-7 text-muted">
              To simplify hiring for businesses by providing dependable and
              verified staff across multiple sectors.
            </p>
          </article>
          <article className="rounded-md border border-line bg-navy p-8 text-white shadow-soft">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 text-2xl font-black">
              Become a Trusted Staffing Partner
            </h2>
            <p className="mt-4 leading-7 text-white/72">
              To become one of Nigeria&apos;s most trusted staffing and workforce
              solutions partners.
            </p>
          </article>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="overflow-hidden rounded-md shadow-soft">
            <Image
              src={operationsImage}
              alt="Operational worker using technology while coordinating workplace tasks"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Focus"
              title="Practical Workforce Support for Daily Operations"
              text="WorkBridge is built for employers who need staffing help that is clear, responsive, and grounded in real operational roles."
            />
            <ButtonLink href="/request-staff" className="mt-8">
              Request Staff
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
