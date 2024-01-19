import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, eu sou Caroline!</h1>
                <p className={styles.description}>Breve descrição</p>
                <a className={styles.contactBtn} href="mailto:carolfranca0310@gmail.com">Entre em contato!</a>
            </div>
            <img src={getImageUrl("hero/heroImage2.png")} alt="Imagem de mim" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};