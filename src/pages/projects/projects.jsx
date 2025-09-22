import React, { useEffect, useState } from "react";
import styles from "./projects.module.css";
import projectsData from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const VideoCarousel = ({ videos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videos || videos.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const currentVideo = videos[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselVideoWrapper}>
        <button
          type="button"
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={handlePrev}
          aria-label="Previous video"
        >
          ‹
        </button>

        <video
          key={currentIndex}
          className={styles.carouselVideo}
          src={getImageUrl(currentVideo.src)}
          controls
          playsInline
        />

        <button
          type="button"
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={handleNext}
          aria-label="Next video"
        >
          ›
        </button>
      </div>
      {currentVideo.caption && (
        <div className={styles.carouselCaption}>{currentVideo.caption}</div>
      )}
      {videos.length > 1 && (
        <div className={styles.carouselDots}>
          {videos.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.carouselDot} ${idx === currentIndex ? styles.carouselDotActive : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectsPage = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);

  useEffect(() => {
    setFeaturedProjects(projectsData.featuredProjects || []);
    setPersonalProjects(projectsData.personalProjects || []);
  }, []);

  const getTechnologyIcon = (tech) => {
    const iconMap = {
      "AWS": "skills/aws.png",
      "React": "skills/react.png",
      "React Native": "skills/react.png",
      "ExpoGo": "skills/expogo.png",
      "Node.js": "skills/node.png",
      "MongoDB": "skills/mongodb.png",
      "Firebase": "skills/firebase.png",
      "Next.js": "skills/nextjs.png",
      "Express.js": "skills/expressjs.png",
      "TypeScript": "skills/typescript.png",
      "JavaScript": "skills/javascript.png",
      "Python": "skills/python.png",
      "PyTorch": "skills/pytorch.png",
      "Django": "skills/django.png",
      "DigitalOcean": "skills/digitalocean.png",
      "Docker": "skills/dockers.png",
      "Kubernetes": "skills/kubernetes.png",
      "C++": "skills/c++.png",
      "HTML": "skills/html.png",
      "CSS": "skills/css.png",
      "Selenium": "skills/selenium.png",
      "PostgreSQL": "skills/postgresql.png",
      "OpenAI API": "skills/openai.png",
      "Google API": "skills/gmail.png",
      "BeautifulSoup": "skills/bs4.png",
      "LinkedIn API": "skills/linkedin.png",
      "Spotify API": "skills/spotify.png",
      "Pandas": "skills/pandas.png",
      "NumPy": "skills/numpy.png",
      "Scikit-learn": "skills/scikitlearn.png",
    };
    return iconMap[tech] || "skills/default.png";
  };

  return (
    <div className={styles.projectsPage}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A showcase of my recent work in web development, data visualization, and full-stack applications.
        </p>
      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className={styles.featuredSection}>
          <h2 className={styles.featuredTitle}>Featured Projects</h2>
          <div className={styles.featuredProjects}>
            {featuredProjects.map((project, index) => (
              <div key={index} className={styles.featuredProject}>
                <div className={styles.featuredMediaColumn}>
                  <div className={styles.featuredImageContainer}>
                    <img
                      src={getImageUrl(project.imageSrc)}
                      alt={`${project.title} screenshot`}
                      className={styles.featuredImage}
                    />
                  </div>

                  {/* Videos Carousel (Featured Only) - Left column under image */}
                  {project.videos && project.videos.length > 0 && (
                    <div className={styles.videoContainer}>
                      <VideoCarousel videos={project.videos} />
                    </div>
                  )}
                </div>

                <div className={styles.featuredDetails}>
                  <div className={styles.projectHeader}>
                    <span className={styles.projectYear}>{project.year}</span>
                    <div className={styles.yearUnderline}></div>
                  </div>

                  <h3 className={styles.featuredProjectTitle}>{project.title}</h3>

                  <p className={styles.featuredDescription}>{project.description}</p>

                  {/* Features List */}
                  {project.features && (
                    <div className={styles.featuresList}>
                      <h4 className={styles.featuresTitle}>Key Features:</h4>
                      <ul className={styles.features}>
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={styles.featureItem}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Videos Carousel moved to left column */}


                  {/* Technologies */}
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className={styles.techIcon} title={tech}>
                        <img
                          src={getImageUrl(getTechnologyIcon(tech))}
                          alt={tech}
                          className={styles.techIconImage}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                      >
                        <span className={styles.buttonIcon}>🌐</span>
                        View Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionButton}
                    >
                      <img
                        src={getImageUrl("contact/github.png")}
                        alt="GitHub"
                        className={styles.buttonIcon}
                        style={{ width: '16px', height: '16px' }}
                      />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal Projects Section */}
      {personalProjects.length > 0 && (
        <div className={styles.personalSection}>
          <h2 className={styles.personalTitle}>Other Projects</h2>
          <div className={styles.projectsSection}>
            {personalProjects.map((project, index) => (
              <div key={index} className={styles.projectContainer}>
                <div className={`${styles.projectContent} ${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}>
                  {/* Project Image */}
                  <div className={styles.projectImageContainer}>
                    <img
                      src={getImageUrl(project.imageSrc)}
                      alt={`${project.title} screenshot`}
                      className={styles.projectImage}
                    />
                  </div>

                  {/* Project Details */}
                  <div className={styles.projectDetails}>
                    <div className={styles.projectHeader}>
                      <span className={styles.projectYear}>{project.year}</span>
                      <div className={styles.yearUnderline}></div>
                    </div>

                    <h2 className={styles.projectTitle}>{project.title}</h2>

                    <p className={styles.projectDescription}>{project.description}</p>

                    {/* Technologies */}
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className={styles.techIcon} title={tech}>
                          <img
                            src={getImageUrl(getTechnologyIcon(tech))}
                            alt={tech}
                            className={styles.techIconImage}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className={styles.actionButtons}>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionButton}
                        >
                          <span className={styles.buttonIcon}>🌐</span>
                          View Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                      >
                        <img
                          src={getImageUrl("contact/github.png")}
                          alt="GitHub"
                          className={styles.buttonIcon}
                          style={{ width: '16px', height: '16px' }}
                        />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
