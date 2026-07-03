interface LeadershipCard {
  icon: string;
  iconBg: string;
  title: string;
  text: string;
  shadow: string;
  rotate: string;
}

const CARDS: LeadershipCard[] = [
  {
    icon: "/icons/kitties/kitties-8.svg",
    iconBg: "bg-peach",
    title: "Leadership",
    text: "I stay close to the work — the team, the code, the decisions. Good systems come from teams who trust each other; that's what I love most. ",
    shadow: "shadow-[5px_5px_0_var(--peach)]",
    rotate: "-rotate-[1.2deg]",
  },
  {
    icon: "/icons/kitties/kitties-7.svg",
    iconBg: "bg-sage",
    title: "Responsible Technology",
    text: "Technology should leave people better off than it found them: ßthat's not a given, it's something you must build for on purpose. I spend real time on the intersection of AI and ethics. ",
    shadow: "shadow-[5px_5px_0_var(--sage)]",
    rotate: "rotate-1",
  },
  {
    icon: "/icons/kitties/kitties-10.svg",
    iconBg: "bg-salmon",
    title: "Teaching",
    text: "Teaching tech for a few years now; honestly, maybe the biggest impact I get to have, and I just love doing it. Grateful to add my grain of sand to future colleagues. Taught programming, databases, cloud, even Spanish.",
    shadow: "shadow-[5px_5px_0_var(--salmon)]",
    rotate: "-rotate-[0.8deg]",
  },
  {
    icon: "/icons/kitties/kitties-15.svg",
    iconBg: "bg-rose",
    title: "Always Learning",
    text: "I'm a book nerd first and foremost. But what really pulls me in isn't the next framework or tech stack, it's research, the impact tech has on society, and hearing what brilliant minds are figuring out right now. ",
    shadow: "shadow-[5px_5px_0_var(--rose)]",
    rotate: "rotate-[1.4deg]",
  },
  {
    icon: "/icons/kitties/kitties-12.svg",
    iconBg: "bg-salmon",
    title: "System Design",
    text: "I love a system that just makes sense, but it alone doesn't solve the problem: it only works when the whole team and the client are actually on the same page. So I spend as much energy listening and translating as I do designing.",
    shadow: "shadow-[5px_5px_0_var(--sage)]",
    rotate: "-rotate-[1.6deg]",
  }
];

const CERTS = [
  "Ethical Use of Data-Driven Technologies · CertNexus",
  "People & Soft Skills · IBM",
];

export default function Leadership() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[9%] right-[5%] w-[120px] h-[120px] rounded-full bg-salmon opacity-35 animate-floaty"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[14%] left-[3%] w-16 h-16 rounded-full bg-peach opacity-45 animate-floaty"
        style={{ animationDuration: "5.5s", animationDelay: ".7s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[52%] right-[22%] w-[30px] h-[30px] rounded-full bg-rose opacity-55 animate-floaty"
        style={{ animationDuration: "5s", animationDelay: "1.3s" }}
      />

      <div className="relative max-w-[1080px] mx-auto">
        <p className="inline-flex items-center gap-2 m-0 mb-3.5 font-mono text-xs tracking-[.14em] uppercase text-chip-ink bg-sage border-2 border-ink rounded-full px-3.5 py-1.5 -rotate-1 shadow-[2px_2px_0_var(--ink)]">
          <span aria-hidden="true">🌱</span> How I roll
        </p>
        <h2 className="m-0 mb-2.5 font-display font-extrabold text-[clamp(28px,4vw,36px)]">
          Tech is always about {" "}
          <mark className="bg-peach text-chip-ink px-2.5 py-0.5 rounded-md -rotate-1 inline-block">
            people
          </mark>.
        </h2>
        <p className="m-0 mb-9 text-[17px] leading-relaxed text-muted max-w-[680px]">
          I focus on products that make people happy and 
          building structure that actually helps engineers grow. 
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-[22px]">
          {CARDS.map(({ icon, iconBg, title, text, shadow, rotate }) => (
            <div
              key={title}
              className={`bg-card border-2 border-ink rounded-2xl px-6 py-6 ${shadow} ${rotate} transition-transform hover:rotate-0 hover:-translate-x-0.5 hover:-translate-y-1`}
            >
              <span
                aria-hidden="true"
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-ink ${iconBg} mb-3.5 shadow-[2px_2px_0_var(--ink)] overflow-hidden`}
              >
                <img src={icon} alt="" className="w-8 h-8 object-contain" />
              </span>
              <h3 className="m-0 mb-2.5 font-display font-extrabold text-[19px]">
                {title}
              </h3>
              <p className="m-0 text-[15.5px] leading-relaxed text-muted">{text}</p>
            </div>
          ))}

          <blockquote className="bg-peach border-2 border-ink rounded-2xl px-6 py-6 shadow-[5px_5px_0_var(--ink)] -rotate-[1.6deg] transition-transform hover:rotate-0 hover:-translate-x-0.5 hover:-translate-y-1">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-ink bg-card mb-3.5 shadow-[2px_2px_0_var(--ink)] overflow-hidden"
            >
              <img src="/icons/kitties/kitties-6.svg" alt="" className="w-8 h-8 object-contain" />
            </span>
            <p className="m-0 font-serif italic text-[19px] leading-snug text-chip-ink">
              &ldquo;Not finance. Not strategy. Not technology. It is teamwork
              that remains the ultimate competitive advantage.&rdquo;
            </p>
            <footer className="mt-3 font-mono text-xs text-chip-ink">
              — Patrick Lencioni · a leadership book I keep coming back to
            </footer>
          </blockquote>
        </div>

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
    </div>
  );
}
