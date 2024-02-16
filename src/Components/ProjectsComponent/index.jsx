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
                    description="Projeto FullStack, consiste em uma agenda de contatos, projeto inclui diversos tratamentos de erros, conta com diferentes telas e estilos."
                    technologies={["NodeExpress", "TypeScript", "React", "Vite", "Figma e Trello"]}
                    WebSiteUrl="https://github.com/HenriqueT-dev"
                    githubUrl="https://github.com/HenriqueT-dev"
                />
                <CardProject 
                    imageUrl="/front-end.gif"
                    title="WaiterApp"
                    description="Projeto Multi-plataformas que tem o objetivo de armazenar, editar e excluir ordens."
                    technologies={["NodeExpress", "TypeScript", "React", "ReactNative", "MongoDB", "Vite", "Figma e Trello"]}
                    WebSiteUrl="https://github.com/HenriqueT-dev"
                    githubUrl="https://github.com/HenriqueT-dev/FullProject-WaiterApp"
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