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
                            <h3>Dsenvolvedora Fullstack</h3>
                            <p>Tenho 23 anos, sou graduanda em Engenharia de Software e estagiária de desenvolvimento na empresa Grendene. Mas antes de me encontrar no mundo diverso da tecnologia, fui graduanda do curso de Ciências Contábeis. Tranquei em 2022,e consegui uma vaga em um Bootcamp pratrocinada pela STONE. Foram seis intensos meses de aulas voltadas para o Desenvolvimento Web com foco em React e Nodejs. Em abril do ano seguinte, foi quando consegui minha primeira oportunidade na área. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
