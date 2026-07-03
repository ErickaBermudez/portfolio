import Image from "next/image";
import { useLanguage } from "../../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[1080px] mx-auto">
      <div>
        <h2 className="m-0 mb-4 font-display font-extrabold text-[clamp(28px,4vw,36px)]">
          {t.about.heading}
        </h2>
        <p className="m-0 text-[clamp(16px,2vw,18px)] leading-[1.8] max-w-[620px]">
          {t.about.bio}
        </p>
        <p className="mt-5 mb-0 font-mono text-[13.5px] text-muted">
          {t.about.languages}
        </p>
      </div>

      <div className="justify-self-center max-w-[340px] w-full flex gap-4 items-center bg-card border-2 border-ink rounded-2xl px-6 py-[22px] shadow-[5px_5px_0_var(--salmon)] rotate-[1.5deg] hover:rotate-0 transition-transform">
        <div className="relative w-14 h-[84px] shrink-0 rounded-md overflow-hidden border-2 border-ink shadow-[2px_2px_0_var(--ink)]">
          <Image
            src="/photos/empire-of-ai-cover.jpg"
            alt="Empire of AI book cover"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="m-0 font-mono text-[11.5px] tracking-[.12em] uppercase text-muted2">
            {t.about.bookRecLabel}
          </p>
          <p className="mt-2 mb-0 text-[19px] font-extrabold font-display">
            <a
              href="https://www.goodreads.com/book/show/222725518-empire-of-ai"
              className="text-ink underline decoration-accent underline-offset-4"
            >
              Empire of AI
            </a>
          </p>
          <p className="mt-1 mb-0 text-[15px] text-muted">{t.about.bookAuthor}</p>
        </div>
      </div>
    </div>
  );
}
