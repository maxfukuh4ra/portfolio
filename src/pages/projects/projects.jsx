import React, { useEffect, useState } from "react";
import styles from "./projects.module.css";
import projectsData from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
      }, []);

    return (
        <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
                <img
                    src={getImageUrl(project.imageSrc)}
                    alt={`${project.title} screenshot`}
                    className={styles.projectImage}
                />
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectLinks}>
                    <a 
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                    >
                        Live Demo
                    </a>
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                    >
                        GitHub
                    </a>
                </div>
            </div>
            ))}
        </div>
  );
};

export default ProjectsPage;