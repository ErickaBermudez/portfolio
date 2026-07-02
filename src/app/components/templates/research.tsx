const SCOPUS_URL = "https://www.scopus.com/authid/detail.uri?authorId=58250570100";

const PUBLICATIONS = [
  {
    title:
      "Activity Transitions for Semi-Supervised Federated Learning in Sensor-Based Human Activity Recognition",
    meta: "2025 · Tori Andika Bukit, Ericka Pamela Bermudez Pillado, Bernardo Nugroho Yahya, Seok-Lyong Lee",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1568494625011068"
  },
  {
    title:
      "Federated Topology Preserving Domain Adaptation for Human Activity Recognition",
    meta: "venue · year · co-authors",
    url: ""
  },
  {
    title:
      "A Framework for Privacy-Preserved Collaborative Learning in Smart Factory Environments",
    meta: "venue · year · co-authors",
    url: ""
  },
];

export default function Research() {
  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="flex items-baseline gap-4 flex-wrap mb-3">
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
      <p className="m-0 mb-8 text-[17px] leading-relaxed text-muted max-w-[640px]">
        Published work in federated learning and privacy-preserving machine
        learning.
      </p>

      <ol className="m-0 p-0 list-none flex flex-col gap-[18px] max-w-[900px]">
        {PUBLICATIONS.map((pub, i) => (
          <li
            key={pub.title}
            className="bg-card border-2 border-ink rounded-2xl px-6 sm:px-[26px] py-[22px] shadow-[5px_5px_0_var(--sage)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_var(--sage)] transition-all flex gap-5 items-center flex-wrap"
          >
            <span className="font-serif text-3xl text-accent shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-[260px]">
              <h3 className="m-0 font-display font-extrabold text-lg leading-[1.4]">
                {pub.title}
              </h3>
              <p className="mt-2 mb-0 font-mono text-[13px] text-muted">
                {pub.meta}
              </p>
            </div>
            <a
              href={pub.url}
              className="text-sm font-extrabold text-accent underline underline-offset-4 shrink-0 focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Read →
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
