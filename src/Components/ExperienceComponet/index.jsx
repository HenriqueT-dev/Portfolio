import React, { useState } from "react";
import { Card, Container, InfoContainer } from "./styles";

export default function ExperienceComponet(){

    const options = ["MyContacts", "BetAway", "Freelancer"];

    const [selectedOption, setSelectedOption] = useState( 0 );

    function handleOptionClick(index){  
        setSelectedOption(index);
    }
    return(
        <Container>
            <div className="xx__menu">
                <h1>EXPERIÊNCIA</h1>
                {options.map((option, index) => (
                    <Card
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        $isSelected={selectedOption === index}
                    >   
                        {option}
                    </Card>
                ))}
            </div>

            {selectedOption === 2 && (
                <InfoContainer $isSelected={selectedOption === 2}>
                    <h2>Desenvolvedor Web</h2>
                    <h4>Freelancer</h4>
                    <p>Minha primeira oportunidade na área da tecnologia, sendo o projeto um aplicativo porém feito em ReactJS para empresas 
                        localizadas em Orlando - FL que fornecem locação de casas/apartamentos, sendo desenvolvido totalmente pensado na 
                        responsividade. Sou responsável pelo front-end da aplicação, assim como integração com o backend. Utiliza SCRUM como
                        metodologia ágil, juntamente com Trello. Projeto encaminhando para a fase final de desenvolvimento.
                    </p>
                </InfoContainer>
            )}
            {selectedOption === 1 && (
                <InfoContainer $isSelected={selectedOption === 1} >
                    <h2>Desenvolvedor Full Stack</h2>
                    <h4>BetAway</h4>
                    <p> Projeto full stack onde desenvolvo uma Fintech para um grupo de investidores ao qual eu estou incluso como
                        colaborador e socio majoritario, o projeto consiste em um App Fintech que conta com varias opções, tratamento
                        de erros e documentação git para possiveis novos colaboradores.
                    </p>
                </InfoContainer>
            )}
            {selectedOption === 0 && (
                <InfoContainer $isSelected={selectedOption === 0}>
                    <h2>Desenvolvedor Full Stack</h2>
                    <h4>Serviço prestado para empresa de Software</h4>
                    <p> Desenvolvi um software web usando as tecnologias, typescript, reactJs, NodeExpress, o projeto consiste
                        em uma pagina que armazena contatos, exatamente como uma agenda de contatos, nele pude treinar minhas
                        habilidades tanto no front como no back.
                    </p>
                </InfoContainer>
            )}
            
        </Container>
    );
}