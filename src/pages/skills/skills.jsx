import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./skills.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // get all unique categories from skills data
    const categories = useMemo(() => {
        const allCategories = new Set();
        skillsData.forEach((skill) => {
            if (skill.categories && Array.isArray(skill.categories)) {
                skill.categories.forEach((cat) => allCategories.add(cat));
            }
        });

        // custom category order
        const categoryOrder = [
            "languages",
            "frameworks",
            "devops",
            "web & database",
            "ml & data",
            "technologies",
            "cloud"
        ];

        // sort categories according to custom order, then add any remaining categories
        const sortedCategories = categoryOrder.filter(cat => allCategories.has(cat));
        const remainingCategories = Array.from(allCategories)
            .filter(cat => !categoryOrder.includes(cat))
            .sort();

        return ["all", ...sortedCategories, ...remainingCategories];
    }, []);

    // count skills per category
    const getCategoryCount = (category) => {
        if (category === "all") return skillsData.length;
        return skillsData.filter((skill) =>
            skill.categories && skill.categories.includes(category)
        ).length;
    };

    // filter skills based on selected category
    const filteredSkills = useMemo(() => {
        if (selectedCategory === "all") return skillsData;
        return skillsData.filter(
            (skill) =>
                skill.categories && skill.categories.includes(selectedCategory)
        );
    }, [selectedCategory]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>skills</h1>
                <p className={styles.subtitle}>
                    a comprehensive overview of my technical expertise and tools i work with.
                </p>
            </div>

            <div className={styles.categories}>
                {categories.map((category) => {
                    const count = getCategoryCount(category);
                    return (
                        <button
                            key={category}
                            type="button"
                            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ""
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category} ({count})
                        </button>
                    );
                })}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory}
                    className={styles.skillsGrid}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {filteredSkills.length > 0 ? (
                        filteredSkills.map((skill, index) => (
                            <motion.div
                                key={`${selectedCategory}-${skill.title}-${index}`}
                                className={styles.skillItem}
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                <img
                                    src={getImageUrl(skill.imageSrc)}
                                    alt={`${skill.title} logo`}
                                    className={styles.skillLogo}
                                />
                                <span className={styles.skillName}>{skill.title}</span>
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            className={styles.noSkills}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            No skills found in this category.
                        </motion.p>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Skills;

