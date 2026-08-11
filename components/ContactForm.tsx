"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { SelectField, TextAreaField, TextField } from "@/components/FormFields";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

const initialValues: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(name: keyof ContactFormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!values.fullName.trim()) nextErrors.fullName = "Enter your full name.";
    if (!values.email.trim()) nextErrors.email = "Enter your email address.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.phone.trim()) nextErrors.phone = "Enter your phone number.";
    if (!values.inquiryType.trim()) nextErrors.inquiryType = "Choose an inquiry type.";
    if (!values.message.trim()) nextErrors.message = "Write a short message.";
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
          label="Email Address"
          type="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          error={errors.email}
          autoComplete="email"
        />
        <TextField
          label="Phone Number"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          error={errors.phone}
          autoComplete="tel"
        />
        <SelectField
          label="Inquiry Type"
          value={values.inquiryType}
          onChange={(event) => update("inquiryType", event.target.value)}
          error={errors.inquiryType}
        >
          <option value="">Select one</option>
          <option value="Request Staff">Request Staff</option>
          <option value="Job Application">Job Application</option>
          <option value="General Inquiry">General Inquiry</option>
        </SelectField>
      </div>
      <TextAreaField
        label="Message"
        value={values.message}
        onChange={(event) => update("message", event.target.value)}
        error={errors.message}
      />

      {submitted ? (
        <div
          role="status"
          className="rounded-md border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
        >
          Your inquiry has been prepared on this website. Connect a backend or
          email service to send it automatically.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy px-6 text-sm font-bold text-white shadow-soft transition hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-70 md:w-fit"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        {submitting ? "Preparing inquiry..." : "Send Inquiry"}
      </button>
    </form>
  );
}
