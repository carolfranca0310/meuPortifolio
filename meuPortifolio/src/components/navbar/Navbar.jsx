import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portifólio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen} onclick={() => setMenuOpen(false)}`}>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#experience">Experiências</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Entre em contato</a></li>
                </ul>
            </div>
        </nav >
    );
}