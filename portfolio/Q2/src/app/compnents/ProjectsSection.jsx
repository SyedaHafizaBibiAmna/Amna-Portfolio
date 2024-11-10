"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Simple Calculator",
    description: "",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SyedaHafizaBibiAmna/SimpleCalculator.HTML-CSS-JS.git",
    previewUrl: "https://simple-calculator-two-tau.vercel.app/",
  },
  {
    id: 3,
    title: "HTML-CSS-WES",
    description: "IT is a Simple HTML-CSS Website non-responsive",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SyedaHafizaBibiAmna/HTML-CSS-WEB.git",
    previewUrl: "https://html-css-web-sepia.vercel.app/",
  },
  {
    id: 4,
    title: "TailorMade Website",
    description: "It is a Website for Online Tailor booking, by using Bootstrap.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SyedaHafizaBibiAmna/bootstrap-website.git",
    previewUrl: "https://tailormade-website.vercel.app/",
  },
  {
    id: 5,
    title: "Project 05",
    description: "Project 6 description",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://milestone-5-psi.vercel.app/",
  },
  {
    id: 6,
    title: "Static Interactive Resume",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SyedaHafizaBibiAmna/Hackathon-Projects.git",
    previewUrl: "https://milestone1-2-eosin.vercel.app//",
  },
  {
    id: 7,
    title: "Custom-CSS-Portfolio",
    description: "Portfolio Website using Next.js, Custom CSS",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SyedaHafizaBibiAmna/CSS-portfolio.git",
    previewUrl: "https://css-portfolio-eta.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;