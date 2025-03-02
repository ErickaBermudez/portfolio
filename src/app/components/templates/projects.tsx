import Image from "next/image";
import { FC } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string; // Optional project link
}

const projects: Project[] = [
  {
    id: 1,
    title: "Platsage",
    description:
      "Platsage is an omnichannel messaging and customer relationship management (CRM) platform designed to streamline and enhance communication between businesses and their customers across various messaging applications.",
    imageUrl: "/projects/platsage.png",
    technologies: [],
    link: "https://platsage.com/",
  },
  {
    id: 2,
    title: "Pokemon Pokedex",
    description:
      "A simple pokedex app that allows you to search for a pokemon and see its details.",
    imageUrl: "/projects/pokemon.png",
    technologies: ["React", "Typescript", "TailwindCSS"],
    link: "https://github.com/ErickaBermudez/pokemon-pokedex",
  },
  // Add more projects as needed
];

const ProjectCard: FC<Project> = ({
  title,
  description,
  imageUrl,
  technologies,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Some stuff I&apos;ve worked on
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
