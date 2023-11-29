import React from "react";
import { Container } from "./styles";

import Button from "../button";

export default function Main(){
    return(
        <Container>
            <div className="xx__info">
                <div className="xx__span">
                    <span >
                        Olá mundo, me chamo
                        <h1>Henrique Torres</h1>
                        Desenvolvedor Web
                    </span>   
                </div>

                <div className="xx__button"> 
                    <a href="https://www.linkedin.com/in/henritorres/" target="_blank" rel="noreferrer"> 
                        <Button><img src="/LinkedIn.png"/><span>LinkedIn</span></Button>
                    </a>
                    <a href="https://github.com/HenriqueT-dev" target="_blank" rel="noreferrer">
                        <Button><img src="/GitHub.png" className="xx__github"/><span>GitHub</span></Button>
                    </a>
                </div>
            </div>
            <img src="/Main.png" alt="Main Image" className="xx__imgMobile"/>
 
        </Container>
    );
}