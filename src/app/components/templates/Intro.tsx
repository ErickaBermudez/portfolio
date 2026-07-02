import Image from "next/image";
import { InteractiveBackground } from "../organisms";

export default function Intro() {
  return (
    <InteractiveBackground>
      <header className="text-center px-5 sm:px-8 lg:px-[52px] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-[84px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[8%] left-[6%] w-[110px] h-[110px] rounded-full bg-peach opacity-80 animate-floaty"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[24%] right-[8%] w-[70px] h-[70px] rounded-full bg-salmon opacity-80 animate-floaty"
          style={{ animationDuration: "7s", animationDelay: ".8s" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[10%] left-[18%] w-11 h-11 rounded-full bg-rose opacity-90 animate-floaty"
          style={{ animationDuration: "6s", animationDelay: "1.6s" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[22%] right-[24%] w-[26px] h-[26px] rounded-full bg-peach animate-floaty"
          style={{ animationDuration: "4.5s", animationDelay: ".4s" }}
        />

        <div className="relative inline-flex flex-col items-center gap-5 max-w-[720px]">
          <div className="relative w-[clamp(120px,18vw,150px)] h-[clamp(120px,18vw,150px)] rounded-full border-[3px] border-ink shadow-[5px_5px_0_var(--salmon)] overflow-hidden">
            <Image
              src="/profile.png"
              alt="Ericka Bermúdez"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="m-0 font-display font-extrabold text-[clamp(40px,7.5vw,72px)] leading-[1.04]">
            Hi! I&apos;m Ericka{" "}
            <Image
              src="/icons/paw-print.png"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="inline-block align-middle w-[0.75em] h-[0.75em] animate-pawWiggle origin-bottom"
            />
          </h1>

          <p className="m-0 text-[clamp(19px,3vw,24px)] leading-normal font-semibold">
            <mark className="bg-peach text-chip-ink px-2.5 py-0.5 rounded-md -rotate-1 inline-block">
              Cat Mom
            </mark>{" "}
            &amp;{" "}
            <mark className="bg-rose text-chip-ink px-2.5 py-0.5 rounded-md rotate-1 inline-block">
              Full-stack AI Developer
            </mark>
          </p>

          <p className="m-0 text-[17px] text-muted max-w-[520px]">
            I like building things with people, not just for them. Books and
            coffee the rest of the time.
          </p>

          <div className="flex gap-3.5 mt-2 flex-wrap justify-center">
            <a
              href="#projects"
              className="text-base font-extrabold text-bg bg-ink px-[26px] py-[13px] rounded-full no-underline hover:-translate-y-0.5 transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="text-base font-extrabold text-ink bg-card border-2 border-ink px-6 py-[11px] rounded-full no-underline shadow-[3px_3px_0_var(--peach)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_var(--peach)] transition-transform focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Say hi →
            </a>
          </div>
        </div>
      </header>
    </InteractiveBackground>
  );
}
