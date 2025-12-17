import React from "react";
import EducationSection from "../../components/about/education/education";
import styles from "./background.module.css";

const Background = () => {
    return (
        <div className={styles.backgroundPage}>
            <EducationSection />
        </div>
    );
};

export default Background;

