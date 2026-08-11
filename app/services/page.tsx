import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { operationsImage, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore staffing services from WorkBridge Consulting NG, including cleaners, drivers, kitchen staff, receptionists, teachers, office assistants, warehouse staff, and support workers."
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-paper py-14 sm:py-18">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Services"
            title="Staffing Solutions for Every Business Need"
            text="We source and match dependable staff across multiple roles and industries, with a practical process for employers that need reliable people quickly."
          />
          <div className="overflow-hidden rounded-md shadow-soft">
            <Image
              src={operationsImage}
              alt="Worker coordinating operational tasks for a business"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-10 rounded-md border border-line bg-paper p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h2 className="text-2xl font-black text-navy-deep">
                Not sure which role category fits?
              </h2>
              <p className="mt-2 text-muted">
                Send your staffing requirements and WorkBridge can help clarify
                the right profile.
              </p>
            </div>
            <ButtonLink href="/request-staff" className="mt-6 sm:mt-0">
              Request Staff
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
