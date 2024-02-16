import React from "react";
import { Container } from "./styles";

import Button from "../button";

export default function AboutComponent(){
    const arquivoPDF = "/archives/CurrículoHenrique.pdf";
    return(
        <Container>
            <img src="/Myself.png" alt="Imagem propria"/>
            <div className="xx__info" >
                <p> Olá, Sou desenvolvedor web atualmente focado no back end, estudando a linguagem ruby
                    e estou cursando Análise e desenvolvimento de sistemas na UniCesumar, A 2 anos atrás pude conhecer de perto
                    o trabalho e rotina de um programador senior e desde então sigo trilhando meu caminho para um dia tambem
                    partilhar da mesma rotina. 
                </p>
                <div className="xx__button">
                    <a href={ arquivoPDF } download={"Henrique Torres.pdf"}>
                        <Button><img src="/Nuvem.png"/> Currículo</Button>
                    </a>
                    <a href="mailto:ph564131@gmail.com">
                        <Button><img src="/Email.png"/> E-mail </Button>
                    </a>
                </div>
                
            </div>
        </Container>
    );
}