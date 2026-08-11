"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { FileField, SelectField, TextField } from "@/components/FormFields";
import { services } from "@/lib/content";

type ApplicationForm = {
  fullName: string;
  phone: string;
  email: string;
  position: string;
};

const initialValues: ApplicationForm = {
  fullName: "",
  phone: "",
  email: "",
  position: ""
};

const roleOptions = [
  ...services.map((service) => service.title),
  "Accountant",
  "Administrative Assistant",
  "Architect",
  "Business Development Manager",
  "Civil Engineer",
  "Compliance Officer",
  "Content Writer",
  "Customer Success Manager",
  "Customer Support Specialist",
  "Data Analyst",
  "Digital Marketing Specialist",
  "Electrical Engineer",
  "Executive Assistant",
  "Financial Analyst",
  "Human Resources Officer",
  "IT Support Specialist",
  "Legal Assistant",
  "Logistics Coordinator",
  "Mechanical Engineer",
  "Nurse",
  "Operations Manager",
  "Pharmacist",
  "Procurement Officer",
  "Product Manager",
  "Project Manager",
  "Public Relations Officer",
  "Recruiter",
  "Sales Executive",
  "Sales Manager",
  "Social Media Manager",
  "Software Engineer",
  "Supply Chain Manager",
  "Teacher",
  "UX Designer"
];

export function JobApplicationForm() {
  const [values, setValues] = useState(initialValues);
  const [cv, setCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationForm | "cv", string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(name: keyof ApplicationForm, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof ApplicationForm | "cv", string>> = {};
    if (!values.fullName.trim()) nextErrors.fullName = "Enter your full name.";
    if (!values.phone.trim()) nextErrors.phone = "Enter your phone number.";
    if (!values.email.trim()) nextErrors.email = "Enter your email address.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.position.trim()) nextErrors.position = "Select a position.";
    if (!cv) nextErrors.cv = "Upload your CV.";
    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="Full Name"
          value={values.fullName}
          onChange={(event) => update("fullName", event.target.value)}
          error={errors.fullName}
          autoComplete="name"
        />
        <TextField
          label="Phone Number"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          error={errors.phone}
          autoComplete="tel"
        />
        <TextField
          label="Email Address"
          type="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <SelectField
          label="Position Applying For"
          value={values.position}
          onChange={(event) => update("position", event.target.value)}
          error={errors.position}
        >
          <option value="">Select a position</option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </SelectField>
      </div>
      <FileField
        label="Upload CV"
        fileName={cv?.name}
        onFileChange={(file) => {
          setCv(file);
          setErrors((current) => ({ ...current, cv: undefined }));
          setSubmitted(false);
        }}
        error={errors.cv}
      />

      <p className="text-sm leading-6 text-muted">
        Only shortlisted candidates will be contacted when opportunities become
        available.
      </p>

      {submitted ? (
        <div
          role="status"
          className="rounded-md border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
        >
          Your application has been prepared on this website. Connect file storage
          and an API endpoint to submit it to WorkBridge automatically.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy px-6 text-sm font-bold text-white shadow-soft transition hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-70 md:w-fit"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        {submitting ? "Preparing application..." : "Apply for Jobs"}
      </button>
    </form>
  );
}
