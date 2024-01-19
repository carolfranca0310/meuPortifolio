import React from 'react';

import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";


export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>

            <div className={styles.text}>
                <h2>Minhas redes </h2>
                <p>Entre em contato! </p>
                <img src={getImageUrl("footer/woman3d.png")} alt="Ícone do linkedin" />
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:carolfranca0310@gmail.com"> <img src={getImageUrl("contact/email.png")} alt="Ícone do email" /> MeuEmail</a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/carolinearaujodefranca/"> <img src={getImageUrl("contact/linkedin.png")} alt="Ícone do linkedin" /> Linkedin</a>
                </li>
                <li className={styles.link}>

                    <a href="https://github.com/carolfranca0310"><img src={getImageUrl("contact/github.png")} alt="Ícone do github" /> Github</a>
                </li>
            </ul>
        </footer>
    )
}
