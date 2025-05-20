import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About me</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursor.svg")} alt="Cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Sofware Developer</h3>
                            <p>I’m 24 years old and currently pursuing a degree in Software Engineering. Before discovering my passion for the diverse world of technology, I was enrolled in an Accounting program. I paused those studies in 2022 after being selected for a Bootcamp sponsored by STONE, where I completed six intensive months focused on Web Development with an emphasis on React and Node.js. In April of the following year, I landed my first opportunity in tech as a development intern. In 2024, I joined the Dev Training program and secured my second role in the field. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
