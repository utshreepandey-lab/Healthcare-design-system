const QUESTION = "What is Critical Care?";
const ANSWER =
  "Critical Care is specialised care for patients with life-threatening conditions who require continuous monitoring and organ support. Our Critical Care Services are led by experienced critical care doctors who provide round-the-clock, evidence-based treatment.";

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      className={`shrink-0 text-emphasis transition-transform duration-300 ease-in-out ${expanded ? "rotate-180" : ""}`}
    >
      <path d="M9 13L16 20L23 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AccordionStatic({ expanded }: { expanded: boolean }) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between gap-4 py-6 text-left">
        <span className="font-sans text-2xl leading-7 font-medium text-emphasis">{QUESTION}</span>
        <ChevronIcon expanded={expanded} />
      </div>
      {expanded && (
        <p className="pt-2 pb-6 font-sans text-xl leading-6 font-normal text-body">{ANSWER}</p>
      )}
    </div>
  );
}
