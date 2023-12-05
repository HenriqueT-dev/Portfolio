import React from "react";
import { Container } from "./styles";
import CardProject from "../CardProject";

export default function ProjectComponent(){
    return(
        <Container id="projects">
            <h1>PROJETOS</h1>
            <div className="xx__grid">
                <CardProject
                    imageUrl="/myContact.png"
                    title="MyContacts"
                    description="Projeto FullStack, consiste em uma agenda de contatos, projeto inclui diversos tratamentos de erros, conta com diferentes telas e estilos."
                    technologies={["NodeExpress", "TypeScript", "React", "Vite", "Figma e Trello"]}
                    WebSiteUrl="https://github.com/HenriqueT-dev"
                    githubUrl="https://github.com/HenriqueT-dev"
                />
                <CardProject 
                    imageUrl="/myContact.png"
                    title="MyContacts"
                    description="Projeto FullStack, consiste em uma agenda de contatos, projeto inclui diversos tratamentos de erros, conta com diferentes telas e estilos."
                    technologies={["NodeExpress", "TypeScript", "React", "Vite", "Figma e Trello"]}
                    WebSiteUrl="https://github.com/HenriqueT-dev"
                    githubUrl="https://github.com/HenriqueT-dev"
                />
                <CardProject 
                    imageUrl="/myContact.png"
                    title="MyContacts"
                    description="Projeto FullStack, consiste em uma agenda de contatos, projeto inclui diversos tratamentos de erros, conta com diferentes telas e estilos."
                    technologies={["NodeExpress", "TypeScript", "React", "Vite", "Figma e Trello"]}
                    WebSiteUrl="https://github.com/HenriqueT-dev"
                    githubUrl="https://github.com/HenriqueT-dev"
                />
                <CardProject 
                    imageUrl="/myContact.png"
                    title="MyContacts"
                    description="Projeto FullStack, consiste em uma agenda de contatos, projeto inclui diversos tratamentos de erros, conta com diferentes telas e estilos."
                    technologies={["NodeExpress", "TypeScript", "React", "Vite", "Figma e Trello"]}
                    WebSiteUrl="https://github.com/HenriqueT-dev"
                    githubUrl="https://github.com/HenriqueT-dev"
                />
            </div>
        </Container>
    );
}