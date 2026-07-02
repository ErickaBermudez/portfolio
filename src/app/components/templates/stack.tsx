interface StackGroup {
  label: string;
  dotColor: string;
  pillColor: string;
  items: string[];
}

const STACK: StackGroup[] = [
  {
    label: "Languages & Frameworks",
    dotColor: "bg-peach",
    pillColor: "bg-peach",
    items: ["Python", "TypeScript", "FastAPI", "Angular", "React", "Next.js", "Vue"],
  },
  {
    label: "AI / ML",
    dotColor: "bg-salmon",
    pillColor: "bg-salmon",
    items: [
      "Azure OpenAI",
      "LangChain",
      "GraphRAG",
      "Neo4j",
      "RAG pipelines",
      "Prompt engineering",
    ],
  },
  {
    label: "Data & Cloud",
    dotColor: "bg-rose",
    pillColor: "bg-rose",
    items: ["PostgreSQL", "MongoDB / CosmosDB", "Azure", "AWS", "Docker", "Pulumi"],
  },
  {
    label: "Other",
    dotColor: "bg-card border-2 border-ink",
    pillColor: "bg-card",
    items: [
      "gRPC",
      "REST",
      "WebSocket",
      "Pydantic",
      "SQLAlchemy",
      "Figma",
      "Storybook",
      "Jest",
      "pytest",
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
        I enjoy learning and adapting to new technologies when they&apos;re
        the right tool for the job. Here&apos;s the stack I&apos;ve used most
        so far.
      </p>

      <div className="flex flex-col gap-6">
        {STACK.map(({ label, dotColor, pillColor, items }) => (
          <div key={label} className="flex items-baseline gap-x-5 gap-y-3 flex-wrap">
            <h3 className="m-0 w-[210px] shrink-0 flex items-center gap-2.5 font-display font-semibold text-base">
              <span className={`w-3.5 h-3.5 rounded-full ${dotColor} shrink-0`} />
              {label}
            </h3>
            <ul className="m-0 p-0 list-none flex flex-wrap gap-2.5 flex-1 min-w-[320px]">
              {items.map((item, i) => (
                <li
                  key={item}
                  className={`text-[15px] font-extrabold ${pillColor} text-chip-ink border-2 border-ink px-4 py-2 rounded-full transition-transform hover:rotate-0 hover:scale-105 ${ROTATIONS[i % ROTATIONS.length]}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
