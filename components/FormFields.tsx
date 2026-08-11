import type {
  ChangeEvent,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from "react";

type FieldBase = {
  label: string;
  error?: string;
};

export function TextField({
  label,
  error,
  ...props
}: FieldBase & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      <span>{label}</span>
      <input
        {...props}
        className={`focus-ring min-h-12 rounded-md border bg-white px-4 text-base text-ink outline-none transition placeholder:text-muted/65 ${
          error ? "border-red-500" : "border-line focus:border-gold"
        }`}
        aria-invalid={Boolean(error)}
      />
      {error ? <span className="text-sm font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

export function SelectField({
  label,
  error,
  children,
  ...props
}: FieldBase & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      <span>{label}</span>
      <select
        {...props}
        className={`focus-ring min-h-12 rounded-md border bg-white px-4 text-base text-ink outline-none transition ${
          error ? "border-red-500" : "border-line focus:border-gold"
        }`}
        aria-invalid={Boolean(error)}
      >
        {children}
      </select>
      {error ? <span className="text-sm font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

export function TextAreaField({
  label,
  error,
  ...props
}: FieldBase & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      <span>{label}</span>
      <textarea
        {...props}
        className={`focus-ring min-h-32 rounded-md border bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted/65 ${
          error ? "border-red-500" : "border-line focus:border-gold"
        }`}
        aria-invalid={Boolean(error)}
      />
      {error ? <span className="text-sm font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

export function FileField({
  label,
  error,
  fileName,
  onFileChange
}: FieldBase & {
  fileName?: string;
  onFileChange: (file: File | null) => void;
}) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onFileChange(event.target.files?.[0] ?? null);
  }

  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      <span>{label}</span>
      <span
        className={`focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold grid cursor-pointer gap-2 rounded-md border border-dashed bg-white p-5 text-center transition hover:border-gold hover:bg-gold/5 ${
          error ? "border-red-500" : "border-line"
        }`}
      >
        <span className="text-base font-bold text-navy">
          {fileName || "Upload CV"}
        </span>
        <span className="text-sm font-medium text-muted">
          PDF, DOC, or DOCX. Frontend upload is ready for storage integration.
        </span>
        <input
          type="file"
          className="sr-only"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleChange}
          aria-invalid={Boolean(error)}
        />
      </span>
      {error ? <span className="text-sm font-medium text-red-600">{error}</span> : null}
    </label>
  );
}
