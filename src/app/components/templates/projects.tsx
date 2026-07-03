import Image from "next/image";
import { FC } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

interface Project {
  id: number;
  title: string;
  imageUrl?: string;
  imageCreditHref?: string; // paired with translations.projects.items[i].imageCreditLabel
  tags?: string[];
  link?: string;
  shadow: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tavaro",
    imageUrl: "/projects/platsage.png",
    tags: ["Next.js", "React", "LangChain", "Meta API", "AWS services"],
    link: "https://platsage.com/",
    shadow: "shadow-[6px_6px_0_var(--peach)] hover:shadow-[8px_8px_0_var(--peach)]",
  },
  {
    id: 2,
    title: "GraphRAG Legal Q&A System",
    tags: ["Angular", "FastAPI", "Azure services", "Neo4j"],
    imageUrl: "/projects/graphrag-diagram.png",
    imageCreditHref:
      "https://www.linkedin.com/pulse/basics-graph-databases-part-1-benjamin-prescott/",
    shadow: "shadow-[6px_6px_0_var(--salmon)] hover:shadow-[8px_8px_0_var(--salmon)]",
  },
  {
    id: 3,
    title: "Pokemon Pokedex",
    imageUrl: "/projects/pokemon.png",
    tags: ["React", "TypeScript", "TailwindCSS"],
    link: "https://github.com/ErickaBermudez/pokemon-pokedex",
    shadow: "shadow-[6px_6px_0_var(--peach)] hover:shadow-[8px_8px_0_var(--peach)]",
  },
];

interface ProjectCardProps extends Project {
  description: string;
  caption?: string;
  imageCreditLabel?: string;
  viewProjectLabel: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  imageCreditHref,
  imageCreditLabel,
  tags,
  link,
  caption,
  shadow,
  viewProjectLabel,
}) => {
  return (
    <article
      className={`bg-card border-2 border-ink rounded-2xl overflow-hidden flex flex-col transition-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 ${shadow}`}
    >
      <div className="relative h-[180px] border-b-2 border-ink">
        {imageUrl && (
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        )}
        {imageCreditHref && imageCreditLabel && (
          <a
            href={imageCreditHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 inline-flex items-center text-[10px] font-mono font-semibold text-chip-ink no-underline bg-bg/90 border-[1.5px] border-ink rounded-full px-2.5 py-1 backdrop-blur-sm hover:bg-bg transition-colors focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {imageCreditLabel}
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
            {viewProjectLabel}
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
  const { t } = useLanguage();

  return (
    <div className="max-w-[1080px] mx-auto">
      <h2 className="m-0 mb-8 font-display font-extrabold text-[clamp(28px,4vw,36px)]">
        {t.projects.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            {...project}
            {...t.projects.items[i]}
            viewProjectLabel={t.projects.viewProject}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
