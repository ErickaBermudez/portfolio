import Image from "next/image";
import { FC } from "react";

interface ImageCredit {
  label: string;
  href: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  imageCredit?: ImageCredit; // shown as a small source pill over the image when it isn't an original screenshot
  placeholderLabel?: string; // shown instead of an image when there's no screenshot to show
  tags?: string[];
  link?: string;
  caption?: string; // shown instead of a link, e.g. for internal/private work
  shadow: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tavaro",
    description:
      "Omnichannel AI messaging & CRM platform integrating WhatsApp, Instagram, and Facebook for multi-tenant business clients. Built the multi-tenant AI agent system (LangChain + RAG, per-client personality and knowledge base) and a centralized Meta API OAuth middleware.",
    imageUrl: "/projects/platsage.png",
    tags: ["Next.js", "React", "LangChain", "Meta API", "AWS services"],
    link: "https://platsage.com/",
    shadow: "shadow-[6px_6px_0_var(--peach)] hover:shadow-[8px_8px_0_var(--peach)]",
  },
  {
    id: 2,
    title: "GraphRAG Legal Q&A System",
    description:
      "Context-aware Q&A system built on Neo4j + Azure OpenAI, grounding answers in a structured knowledge graph built from legal documents.",
    tags: ["Angular", "FastAPI", "Azure services", "Neo4j"],
    imageUrl: "/projects/graphrag-diagram.png",
    imageCredit: {
      label: "Sample graph · Benjamin Prescott",
      href: "https://www.linkedin.com/pulse/basics-graph-databases-part-1-benjamin-prescott/",
    },
    caption: "internal client work · no public link",
    shadow: "shadow-[6px_6px_0_var(--salmon)] hover:shadow-[8px_8px_0_var(--salmon)]",
  },
  {
    id: 3,
    title: "Pokemon Pokedex",
    description:
      "A simple pokedex app that lets you search for a pokemon and see its details. The fun-and-fundamentals entry.",
    imageUrl: "/projects/pokemon.png",
    tags: ["React", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ErickaBermudez/pokemon-pokedex",
    shadow: "shadow-[6px_6px_0_var(--peach)] hover:shadow-[8px_8px_0_var(--peach)]",
  },
];

const ProjectCard: FC<Project> = ({
  title,
  description,
  imageUrl,
  imageCredit,
  placeholderLabel,
  tags,
  link,
  caption,
  shadow,
}) => {
  return (
    <article
      className={`bg-card border-2 border-ink rounded-2xl overflow-hidden flex flex-col transition-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 ${shadow}`}
    >
      <div className="relative h-[180px] border-b-2 border-ink">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        ) : (
          <div
            role="img"
            aria-label={placeholderLabel}
            className="w-full h-full flex items-center justify-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--stripe1) 0 9px, var(--stripe2) 9px 18px)",
            }}
          >
            <span className="font-mono text-[11px] text-muted2 bg-bg px-[7px] py-[3px] border border-dashed border-dash">
              {placeholderLabel}
            </span>
          </div>
        )}
        {imageCredit && (
          <a
            href={imageCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 inline-flex items-center text-[10px] font-mono font-semibold text-chip-ink no-underline bg-bg/90 border-[1.5px] border-ink rounded-full px-2.5 py-1 backdrop-blur-sm hover:bg-bg transition-colors focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {imageCredit.label}
          </a>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="m-0 font-display font-extrabold text-[23px]">{title}</h3>
        {tags && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[12.5px] font-extrabold bg-bg-soft border-[1.5px] border-ink px-2.5 py-[3px] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="m-0 text-[15px] leading-[1.65] text-muted flex-1">
          {description}
        </p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-extrabold text-accent underline underline-offset-4 self-start focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            View project →
          </a>
        ) : caption ? (
          <span className="font-mono text-[12.5px] text-muted2 self-start border border-dashed border-dash rounded-full px-3 py-1">
            {caption}
          </span>
        ) : null}
      </div>
    </article>
  );
};

const Projects: FC = () => {
  return (
    <div className="max-w-[1080px] mx-auto">
      <h2 className="m-0 mb-8 font-display font-extrabold text-[clamp(28px,4vw,36px)]">
        Some stuff I&apos;ve worked on
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
