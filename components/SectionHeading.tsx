type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            light ? "text-white" : "text-muted"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
