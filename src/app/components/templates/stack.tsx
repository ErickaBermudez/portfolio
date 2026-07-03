interface StackItem {
  name: string;
  mastery: number;
}

interface StackGroup {
  label: string;
  dotColor: string;
  pillColor: string;
  textColor: string;
  items: StackItem[];
}

const STACK: StackGroup[] = [
  {
    label: "Languages & Frameworks",
    dotColor: "bg-peach",
    pillColor: "bg-peach",
    textColor: "text-chip-ink",
    items: [
      { name: "Python", mastery: 80 },
      { name: "TypeScript", mastery: 90 },
      { name: "FastAPI", mastery: 60 },
      { name: "Angular", mastery: 30 },
      { name: "React", mastery: 80 },
      { name: "Next.js", mastery: 80 },
      { name: "Vue", mastery: 30 },
    ],
  },
  {
    label: "AI / ML",
    dotColor: "bg-salmon",
    pillColor: "bg-salmon",
    textColor: "text-chip-ink",
    items: [
      { name: "LangChain", mastery: 80 },
      { name: "GraphRAG", mastery: 35 },
      { name: "Neo4j", mastery: 50 },
      { name: "RAG pipelines", mastery: 85 },
      { name: "Prompt engineering", mastery: 100 },
    ],
  },
  {
    label: "Data & Cloud",
    dotColor: "bg-rose",
    pillColor: "bg-rose",
    textColor: "text-chip-ink",
    items: [
      { name: "PostgreSQL", mastery: 85 },
      { name: "MongoDB / CosmosDB", mastery: 90 },
      { name: "Azure", mastery: 60 },
      { name: "AWS", mastery: 70 },
      { name: "Docker", mastery: 80 },
      { name: "Pulumi", mastery: 60 },
    ],
  },
  {
    label: "Other",
    dotColor: "bg-card border-2 border-ink",
    pillColor: "bg-card",
    textColor: "text-ink",
    items: [
      { name: "gRPC", mastery: 65 },
      { name: "REST", mastery: 90 },
      { name: "WebSocket", mastery: 70 },
      { name: "Pydantic", mastery: 85 },
      { name: "SQLAlchemy", mastery: 80 },
      { name: "Figma", mastery: 60 },
      { name: "Storybook", mastery: 55 },
      { name: "Jest", mastery: 65 },
      { name: "pytest", mastery: 80 },
    ],
  },
];

// Cycled per-pill for the same hand-placed, slightly-off-kilter feel as the mockup.
const ROTATIONS = ["-rotate-1", "rotate-1", "rotate-0", "rotate-1", "-rotate-1", "rotate-0"];

export default function Stack() {
  return (
    <div className="max-w-[1080px] mx-auto">
      <h2 className="m-0 mb-2.5 font-display font-extrabold text-[clamp(28px,4vw,36px)]">
        What do I do?
      </h2>
      <p className="m-0 mb-8 text-[17px] leading-relaxed text-muted max-w-[620px]">
        I enjoy learning more than anything and I&apos;m always ready to jump to the right tool for the job.
        Here&apos;s the stack I&apos;ve used most
        so far.
      </p>

      <div className="flex flex-col gap-6">
        {STACK.map(({ label, dotColor, pillColor, textColor, items }) => (
          <div key={label} className="flex items-baseline gap-x-5 gap-y-3 flex-wrap">
            <h3 className="m-0 w-[210px] shrink-0 flex items-center gap-2.5 font-display font-semibold text-base">
              <span className={`w-3.5 h-3.5 rounded-full ${dotColor} shrink-0`} />
              {label}
            </h3>
            <ul className="m-0 p-0 list-none flex flex-wrap gap-2.5 flex-1 min-w-[320px]">
              {items.map(({ name, mastery }, i) => (
                <li
                  key={name}
                  className={`relative overflow-hidden text-[15px] font-extrabold border-2 border-ink px-4 py-2 rounded-full transition-transform hover:rotate-0 hover:scale-105 ${ROTATIONS[i % ROTATIONS.length]}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 ${pillColor}`}
                    style={{ opacity: mastery / 100 }}
                  />
                  <span className={`relative ${textColor}`}>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
