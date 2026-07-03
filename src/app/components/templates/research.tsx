const SCOPUS_URL = "https://www.scopus.com/authid/detail.uri?authorId=58250570100";

interface Publication {
  title: string;
  meta: string;
  url: string;
  badgeBg: string;
  shadow: string;
  rotate: string;
}

const PUBLICATIONS: Publication[] = [
  {
    title:
      "Activity Transitions for Semi-Supervised Federated Learning in Sensor-Based Human Activity Recognition",
    meta: "2025 · Tori Andika Bukit, Ericka Pamela Bermudez Pillado, Bernardo Nugroho Yahya, Seok-Lyong Lee",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1568494625011068",
    badgeBg: "bg-peach",
    shadow: "shadow-[5px_5px_0_var(--peach)]",
    rotate: "-rotate-[0.7deg]",
  },
  {
    title:
      "Federated Topology Preserving Domain Adaptation for Human Activity Recognition",
    meta: "2023 · Tori Andika Bukit, Ericka Pamela Bermudez Pillado, Bernardo Nugroho Yahya, Seok-Lyong Lee",
    url: "https://ieeexplore.ieee.org/document/10223939",
    badgeBg: "bg-salmon",
    shadow: "shadow-[5px_5px_0_var(--salmon)]",
    rotate: "rotate-[0.8deg]",
  },
  {
    title:
      "A Framework for Privacy-Preserved Collaborative Learning in Smart Factory Environments",
    meta: "2023 · Ericka Pamela Bermudez Pillado, Tori Andika Bukit, Bernardo Nugroho Yahya, Seok-Lyong Lee",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-27199-1_42",
    badgeBg: "bg-rose",
    shadow: "shadow-[5px_5px_0_var(--rose)]",
    rotate: "-rotate-[0.6deg]",
  },
];

export default function Research() {
  return (
    <div className="relative overflow-hidden ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[12%] left-[4%] w-24 h-24 rounded-full bg-sage opacity-40 animate-floaty"
        style={{ animationDuration: "6.5s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[16%] right-[6%] w-[70px] h-[70px] rounded-full bg-peach opacity-45 animate-floaty"
        style={{ animationDuration: "5.5s", animationDelay: ".9s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[60%] left-[26%] w-[26px] h-[26px] rounded-full bg-salmon opacity-50 animate-floaty"
        style={{ animationDuration: "4.8s", animationDelay: "1.4s" }}
      />

      <div className="relative max-w-[1080px] mx-auto mb-5">
        <p className="inline-flex items-center gap-2 m-0 mb-3.5 font-mono text-xs tracking-[.14em] uppercase text-chip-ink bg-rose border-2 border-ink rounded-full px-3.5 py-1.5 rotate-1 shadow-[2px_2px_0_var(--ink)]">
          <span aria-hidden="true">🔬</span> Peer-reviewed
        </p>
        <div className="flex items-center gap-4 flex-wrap mb-3">
          <h2 className="m-0 font-display font-extrabold text-[clamp(28px,4vw,36px)]">
            Research
          </h2>
          <a
            href={SCOPUS_URL}
            className="font-mono text-[13px] text-chip-ink no-underline border-2 border-ink rounded-full px-3.5 py-[5px] bg-sage hover:-translate-y-px transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            FIND ME IN SCOPUS →
          </a>
        </div>
        <p className="m-0 mb-9 text-[17px] leading-relaxed text-muted max-w-[640px]">
          I believe ML shouldn't cost people their privacy. That belief is basically what my published research is about: <mark className="bg-sage text-chip-ink px-2 py-0.5 rounded-md">federated learning</mark> and privacy-preserving ML.
        </p>

        <ol className="m-0 p-0 list-none flex flex-col gap-5 max-w-[900px]">
          {PUBLICATIONS.map(({ title, meta, url, badgeBg, shadow, rotate }, i) => (
            <li
              key={title}
              className={`bg-card border-2 border-ink rounded-2xl px-6 sm:px-7 py-[22px] ${shadow} ${rotate} hover:rotate-0 hover:-translate-x-0.5 hover:-translate-y-1 transition-transform flex gap-5 items-center flex-wrap`}
            >
              <span
                aria-hidden="true"
                className={`inline-flex items-center justify-center w-[58px] h-[58px] shrink-0 rounded-full border-2 border-ink ${badgeBg} font-serif text-2xl text-chip-ink shadow-[2px_2px_0_var(--ink)] ${rotate}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-[260px]">
                <h3 className="m-0 font-display font-extrabold text-lg leading-[1.4]">
                  {title}
                </h3>
                <p className="mt-2 mb-0 font-mono text-[13px] text-muted">
                  {meta}
                </p>
              </div>
              {url && (
                <a
                  href={url}
                  className="text-sm font-extrabold text-accent-ink bg-accent border-2 border-ink rounded-full px-[18px] py-2.5 no-underline shrink-0 shadow-[2px_2px_0_var(--ink)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_var(--ink)] transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  Read →
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
