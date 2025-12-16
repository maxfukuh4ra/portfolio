import React from "react";
import styles from "./experience.module.css";
import { getImageUrl } from "../../utils";
import workData from "../../data/history.json";

const Experience = () => {
    return (
        <section className={styles.experienceSection}>
            <h2 className={styles.sectionTitle}>experience</h2>
            <div className={styles.introText}>
                <p>
                    my journey in software development, cybersecurity, and technical leadership.
                </p>
                <p>
                    opportunities across different domains, from building production systems at scale, contributing to security side of things, to making workflows more efficient, i am blessed to be able to learn lessons in problem-solving, collaboration, and the craft of software development.
                </p>
            </div>
            <div className={styles.timeline}>
                {workData.map((job, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineLeft}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineDate}>
                                <div>start: {job.startDate}</div>
                                <div>end: {job.endDate}</div>
                                <div className={styles.location}>{job.location}</div>
                            </div>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.contentHeader}>
                                <img
                                    src={getImageUrl(job.imageSrc)}
                                    alt={`${job.organisation} logo`}
                                    className={styles.workLogo}
                                />
                                <div>
                                    <h3 className={styles.orgName}>{job.organisation}</h3>
                                    <p className={styles.role}>{job.role}</p>
                                </div>
                            </div>

                            {/* Work experience bullet list */}
                            {job.experiences.length > 0 && (
                                <ul className={styles.experienceList}>
                                    {job.experiences.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

