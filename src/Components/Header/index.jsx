import React from "react";
import { Container } from "./styles";

export default function Header(){
    return(
        <Container>
            <a href='/' className="xx__h2">
                <h2>‹HT/›</h2>
            </a>
            <div className="xx__ul">
                <ul>
                    <a><li>Home</li></a>
                    <a><li>About</li></a>
                    <a><li>Projects</li></a>
                </ul>
            </div>
        </Container>
    );
}