import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>lorem ipsulum!</h1>
                <p className={styles.description}>Sou graduanda de Engenharia de Software, tenho 23 anos e sou desenvolvedora fullstack. </p>
                <a className={styles.contactBtn} href="mailto:carolfranca0310@gmail.com">Entre em contato!</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Imagem de mim" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};