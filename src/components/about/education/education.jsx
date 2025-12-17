import styles from "./education.module.css";
import { getImageUrl } from "../../../utils";

const EducationSection = () => {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.educationTitle}>education</h2>
      <div className={styles.educationContent}>
        <div className={styles.schoolCardsContainer}>
          <div className={styles.schoolCard}>
            <img
              src={getImageUrl("about/ucla-logo.png")}
              alt="UCLA Logo"
              className={styles.schoolLogo}
            />
            <div className={styles.schoolDetails}>
              <h3>university of california, los angeles (ucla)</h3>
              <p>bachelor of science in computer science</p>
              <p>2022-2026</p>
              <p>gpa 3.6</p>
              <ul>
                <li>technical breadth in technology management</li>
                <li>scientific breadth in life sciences</li>
                <li>switched from cognitive science in 2023</li>
                <li>dean's list - 2022 & 2023</li>
              </ul>
            </div>
          </div>

          <div className={styles.schoolCard}>
            <img
              src={getImageUrl("soccer/beckman.png")}
              alt="Beckman Logo"
              className={styles.schoolLogo}
            />
            <div className={styles.schoolDetails}>
              <h3>arnold o. beckman high school</h3>
              <p>high school diploma</p>
              <p>2018-2022</p>
              <p>gpa 4.8</p>
              <ul>
                <li>sat: 1530</li>
                <li>state seal of triliteracy (english, japanese, spanish)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.courseworkSection}>
          <h3>relevant coursework:</h3>
          <ul>
            <li>cs 181 - theory of computing</li>
            <li>cs 180 - algorithms and complexity</li>
            <li>cs 163 - deep learning for computer vision</li>
            <li>cs m152a - digital design laboratory</li>
            <li>cs m151b - computer architecture</li>
            <li>cs m148 - data science and machine learning</li>
            <li>cs 143 - database management system</li>
            <li>cs 136 - computer security</li>
            <li>cs 131 - programming languages</li>
            <li>cs 118 - computer network fundamentals</li>
            <li>cs 111 - operating systems principles</li>
            <li>cs m51a - digital design laboratory</li>
            <li>cs 35l - software construction laboratory</li>
            <li>cs 33 - computer organization</li>
            <li>
              cs 31 & 32 - intro to computer science and objected oriented
              programming
            </li>
            <li> math 170e: introduction to probability and statistics </li>
            <li> math 61: discrete mathematics </li>
            <li> math 33a & 33b: linear algebra and differential equations </li>
            <li> math 32a & 32b: multivariable calculus </li>
            <li> math 31a & 31b: calculus: differential and integration, infinite series </li>
          </ul>
        </div>

        <div className={styles.involvementsSection}>
          <h3>campus involvements:</h3>
          <div className={styles.involvementsList}>
            <div className={styles.involvementItem}>
              <img
                src={getImageUrl("work/bsa.png")}
                alt="Bruin Sports Analytics logo"
                className={styles.involvementLogo}
              />
              <div className={styles.involvementContent}>
                <div className={styles.involvementOrgContainer}>
                  <div className={styles.involvementOrg}>bruin sports analytics</div>
                  <a
                    href="https://www.bruinsportsanalytics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    aria-label="Visit Bruin Sports Analytics website"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <div className={styles.involvementDetails}>
                  <div className={styles.involvementPosition}>software engineer, consultant</div>
                  <div className={styles.involvementTimeline}>oct. 2024 - present</div>
                </div>
              </div>
            </div>
            <div className={styles.involvementItem}>
              <img
                src={getImageUrl("work/studentmedia.png")}
                alt="UCLA Student Media logo"
                className={styles.involvementLogo}
              />
              <div className={styles.involvementContent}>
                <div className={styles.involvementOrgContainer}>
                  <div className={styles.involvementOrg}>ucla student media</div>
                  <a
                    href="https://uclastudentmedia.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    aria-label="Visit UCLA Student Media website"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <div className={styles.involvementDetails}>
                  <div className={styles.involvementPosition}>software + devops engineer, member of core leadership team</div>
                  <div className={styles.involvementTimeline}>oct. 2024 - present</div>
                </div>
              </div>
            </div>
            <div className={styles.involvementItem}>
              <img
                src={getImageUrl("work/db.png")}
                alt="Daily Bruin logo"
                className={styles.involvementLogo}
              />
              <div className={styles.involvementContent}>
                <div className={styles.involvementOrgContainer}>
                  <div className={styles.involvementOrg}>daily bruin</div>
                  <a
                    href="https://dailybruin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    aria-label="Visit Daily Bruin website"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <div className={styles.involvementDetails}>
                  <div className={styles.involvementPosition}>software engineer intern</div>
                  <div className={styles.involvementTimeline}>oct. 2024 - mar. 2025</div>
                </div>
              </div>
            </div>
            <div className={styles.involvementItem}>
              <img
                src={getImageUrl("work/sama.png")}
                alt="Samahang Modern logo"
                className={styles.involvementLogo}
              />
              <div className={styles.involvementContent}>
                <div className={styles.involvementOrgContainer}>
                  <div className={styles.involvementOrg}>samahang modern</div>
                  <a
                    href="https://www.instagram.com/samahangmodern/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    aria-label="Visit Samahang Modern Instagram"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <div className={styles.involvementDetails}>
                  <div className={styles.involvementPosition}>multimedia producer, competition dancer</div>
                  <div className={styles.involvementTimeline}>jan. 2023 - jun. 2024, summer 2025</div>
                </div>
              </div>
            </div>
            <div className={styles.involvementItem}>
              <img
                src={getImageUrl("work/fc.png")}
                alt="Foundations Choreography logo"
                className={styles.involvementLogo}
              />
              <div className={styles.involvementContent}>
                <div className={styles.involvementOrgContainer}>
                  <div className={styles.involvementOrg}>foundations choreography</div>
                  <a
                    href="https://www.instagram.com/foundationschoreo/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    aria-label="Visit Foundations Choreography Instagram"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <div className={styles.involvementDetails}>
                  <div className={styles.involvementPosition}>director</div>
                  <div className={styles.involvementTimeline}>jan. 2026 - mar. 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
