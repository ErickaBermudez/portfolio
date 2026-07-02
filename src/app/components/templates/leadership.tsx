const LINES = [
  "I lead by staying close to the work — the team, the code, the decisions.",
  "Good systems are built by teams who trust each other. That's the part I actually love.",
  "Still writing code. Still in the reviews. Still figuring it out with the people around me.",
  "Always got a leadership book going — there's genuinely something new to learn every time. Ask me for recs, I've got a list.",
];

const CERTS = [
  "Ethical Use of Data-Driven Technologies · CertNexus",
  "People & Soft Skills · IBM",
];

export default function Leadership() {
  return (
    <div className="max-w-[1080px] mx-auto">
      <h2 className="m-0 mb-2.5 font-display font-extrabold text-[clamp(28px,4vw,36px)]">
        Leading people, not just projects
      </h2>
      <p className="m-0 mb-8 text-[17px] leading-relaxed text-muted max-w-[680px]">
        I care about building structure that actually helps people grow — not
        process for its own sake.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        <ul className="m-0 p-0 list-none">
          {LINES.map((line, i) => (
            <li
              key={line}
              className={`py-4 text-[17px] leading-[1.7] ${
                i < LINES.length - 1 ? "border-b border-dashed border-dash" : ""
              }`}
            >
              {line}
            </li>
          ))}
        </ul>

        <blockquote className="bg-card border-2 border-ink border-l-[6px] rounded-2xl px-6 sm:px-7 py-6 shadow-[5px_5px_0_var(--peach)]">
          <p className="m-0 font-serif italic text-xl leading-relaxed">
            &ldquo;Not finance. Not strategy. Not technology. It is teamwork
            that remains the ultimate competitive advantage, both because it
            is so powerful and so rare.&rdquo;
          </p>
          <footer className="mt-3 font-mono text-[13px] text-muted">
            — Patrick Lencioni,{" "}
            <cite className="not-italic">
              The Five Dysfunctions of a Team: A Leadership Fable
            </cite>
          </footer>
        </blockquote>
      </div>

      <p className="mt-6 mb-0 italic text-sm text-muted max-w-[680px]">
        The specifics — leveling frameworks, review structure, mentoring —
        are all in the CV.
      </p>

      <div className="flex flex-wrap gap-3 mt-9 items-center">
        <span className="font-mono text-xs tracking-[.1em] uppercase text-muted2">
          Certified:
        </span>
        {CERTS.map((cert) => (
          <span
            key={cert}
            className="text-[13.5px] font-extrabold bg-card border-2 border-ink px-3.5 py-1.5 rounded-full"
          >
            {cert}
          </span>
        ))}
      </div>
    </div>
  );
}
