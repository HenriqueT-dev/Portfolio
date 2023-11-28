import React from "react";
import PropTypes from "prop-types";

import { AnimationImg, Container } from "./styles";
import Button from "../button";

export default function CardProject({ imageUrl, title, description, technologies, WebSiteUrl, githubUrl }){
    return(
        <Container>
            <a href={WebSiteUrl} target="_blank" rel="noreferrer">
                <AnimationImg src={imageUrl} alt={`Imagem ilustrativa de ${title}`} />
            </a>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Tecnologias usadas no projeto: {technologies.join(", ")}</span>
            <div className="xx__Links">
                <a href={WebSiteUrl} target="_blank" rel="noreferrer">
                    <Button><img src="/Link.png" alt="Link Icon"/> Visualizar</Button>
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    <Button><img src="/GitHub.png" alt="GitHub Icon"/> Visualizar</Button>
                </a>
            </div>
        </Container>
    );
}
CardProject.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    WebSiteUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
};