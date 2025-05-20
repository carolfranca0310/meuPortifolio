import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>{skills}</li>
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>
                    Repository
                </a>
                <a href={source} className={styles.link}>
                    Web Site
                </a>
            </div>
        </div>
    );
};