import React, { useState } from "react";
import { Container } from "./styles";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Container $isMenuOpen={isMenuOpen}>
            <a href='/' className="xx__h2">
                <h2>‹HT/›</h2>
            </a>
            <div className="xx__ul">
                <ul>
                    <a href='/'><li>Home</li></a>
                    <a href='/about'><li>About</li></a>
                    <a href='/projects'><li>Projects</li></a>
                </ul>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
        </Container>
    );
}