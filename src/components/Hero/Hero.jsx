import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, i'm Caroline!</h1>
                <p className={styles.description}>Software Developer</p>
                <a className={styles.contactBtn} href="mailto:carolfranca0310@gmail.com">Contact me!</a>
            </div>
            <img src={getImageUrl("hero/profile.png")} alt="Imagem de mim" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};