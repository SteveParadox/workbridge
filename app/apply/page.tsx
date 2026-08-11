import type { Metadata } from "next";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Apply for Jobs",
  description:
    "Apply through WorkBridge Consulting NG for future staffing opportunities in Nigeria."
};

export default function ApplyPage() {
  return (
    <>
      <section className="bg-paper py-14 sm:py-18">
        <div className="container-x">
          <SectionHeading
            eyebrow="For Job Seekers"
            title="Looking for Your Next Opportunity?"
            text="Apply through WorkBridge Consulting NG. Candidate information can be routed to storage or an application API when a backend is connected."
          />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="rounded-md border border-line bg-paper p-6">
              <h2 className="text-xl font-black text-navy-deep">
                What to prepare
              </h2>
              <div className="mt-5 grid gap-4 text-sm leading-6 text-muted">
                <p>Your current phone number and email address.</p>
                <p>The position you are applying for.</p>
                <p>A CV in PDF, DOC, or DOCX format.</p>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-line bg-white p-5 shadow-soft sm:p-8">
            <JobApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
