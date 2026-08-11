"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { SelectField, TextAreaField, TextField } from "@/components/FormFields";
import { services } from "@/lib/content";

type StaffForm = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  location: string;
  role: string;
  count: string;
  startDate: string;
  requirements: string;
};

const initialValues: StaffForm = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  location: "",
  role: "",
  count: "",
  startDate: "",
  requirements: ""
};

export function StaffRequestForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof StaffForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(name: keyof StaffForm, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof StaffForm, string>> = {};
    if (!values.fullName.trim()) nextErrors.fullName = "Enter your full name.";
    if (!values.companyName.trim()) nextErrors.companyName = "Enter your company name.";
    if (!values.phone.trim()) nextErrors.phone = "Enter a phone number.";
    if (!values.email.trim()) nextErrors.email = "Enter an email address.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.location.trim()) nextErrors.location = "Enter the company location.";
    if (!values.role.trim()) nextErrors.role = "Select or enter the role needed.";
    if (!values.count.trim()) nextErrors.count = "Enter the number of staff required.";
    if (Number(values.count) < 1) nextErrors.count = "Staff count must be at least 1.";
    if (!values.startDate.trim()) nextErrors.startDate = "Select a preferred start date.";
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
          label="Company Name"
          value={values.companyName}
          onChange={(event) => update("companyName", event.target.value)}
          error={errors.companyName}
          autoComplete="organization"
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
        <TextField
          label="Company Location"
          value={values.location}
          onChange={(event) => update("location", event.target.value)}
          error={errors.location}
          autoComplete="street-address"
        />
        <SelectField
          label="Position / Role Needed"
          value={values.role}
          onChange={(event) => update("role", event.target.value)}
          error={errors.role}
        >
          <option value="">Select a role</option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </SelectField>
        <TextField
          label="Number of Staff Required"
          type="number"
          min="1"
          value={values.count}
          onChange={(event) => update("count", event.target.value)}
          error={errors.count}
        />
        <TextField
          label="Preferred Start Date"
          type="date"
          value={values.startDate}
          onChange={(event) => update("startDate", event.target.value)}
          error={errors.startDate}
        />
      </div>
      <TextAreaField
        label="Additional Requirements"
        value={values.requirements}
        onChange={(event) => update("requirements", event.target.value)}
        placeholder="Tell us about shift type, location details, experience expectations, or any special requirements."
      />

      {submitted ? (
        <div
          role="status"
          className="rounded-md border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
        >
          Your request has been prepared on this website. Connect an API or email
          service to send it to the WorkBridge team automatically.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy px-6 text-sm font-bold text-white shadow-soft transition hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-70 md:w-fit"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        {submitting ? "Preparing request..." : "Request Staff"}
      </button>
    </form>
  );
}
