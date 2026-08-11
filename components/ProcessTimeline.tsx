import { processSteps } from "@/lib/content";

export function ProcessTimeline() {
  return (
    <ol className="relative mt-12 grid gap-5 lg:grid-cols-6 lg:gap-0">
      <span
        className="absolute left-0 right-0 top-8 hidden h-px bg-line lg:block"
        aria-hidden="true"
      />
      {processSteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <li key={step.title} className="relative">
            <article className="grid gap-4 rounded-md border border-line bg-white p-5 shadow-sm lg:mx-2">
              <div className="flex items-center gap-3 lg:grid lg:gap-3">
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-md border border-gold/35 bg-white text-navy shadow-sm">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-deep">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
