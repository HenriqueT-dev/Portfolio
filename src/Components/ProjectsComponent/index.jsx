import React from "react";
import { Container } from "./styles";
import CardProject from "../CardProject";

export default function ProjectComponent(){
    return(
        <Container>
            <h1>PROJETOS</h1>
            <div className="xx__grid">
                <CardProject
                    imageUrl="/myContact.png"
                    title="MyContacts"
                    description="Projeto FullStack desenvolvido, consiste em uma agenda de contatos, projeto inclui diversos tratamentos de erros, conta com diferentes telas e estilos."
                    technologies={["NodeExpress", "TypeScript", "ReactJS", "Vite", "Figma", "Trello"]}
                    WebSiteUrl="https://gabrielaguaru.github.io"
                    githubUrl="https://github.com/HenriqueT-dev"
                />
                <CardProject 
                    imageUrl="/myContact.png"
                    title="MyContacts"
                    description="Projeto FullStack desenvolvido, consiste em uma agenda de contatos, projeto inclui diversos tratamentos de erros, conta com diferentes telas e estilos."
                    technologies={["NodeExpress", "TypeScript", "ReactJS", "Vite", "Figma", "Trello"]}
                    WebSiteUrl="https://gabrielaguaru.github.io"
                    githubUrl="https://github.com/HenriqueT-dev"
                />
            </div>
        </Container>
    );
}