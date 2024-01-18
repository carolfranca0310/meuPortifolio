import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre mim</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/Image.png")} alt="Uma ilustração de uma mulher negra com uma tiara e um livro nas mãos" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursor.svg")} alt="Cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Desensolvedora Front End</h3>
                            <p>Lorem ipsulum - sou uma _ com experiencia em _</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
