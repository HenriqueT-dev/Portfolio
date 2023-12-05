import React, { useState } from "react";
import { Card, Container, InfoContainer } from "./styles";

export default function ExperienceComponet(){

    const options = ["Desenvolvedor", "BetAway", "G.Primavera"];

    const [selectedOption, setSelectedOption] = useState( 0 );

    function handleOptionClick(index){  
        setSelectedOption(index);
    }
    return(
        <Container id="experience">
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
                    <h4>Galeria Primavera-Freelancer</h4>
                    <p>Minha introdução à tecnologia foi marcada por uma emocionante oportunidade:
                        desenvolver várias páginas web personalizadas para profissionais autônomos.
                        Utilizei o ReactJS, focando em código limpo e modular para facilitar futuras atualizações.
                        A experiência não apenas aprimorou minhas habilidades técnicas, 
                        mas também destacou a importância de compreender as necessidades dos usuários. 
                        A satisfação do cliente e o aprendizado significativo tornaram esse projeto inicial inesquecível, 
                        solidificando minha paixão pelo desenvolvimento de software.
                        Desde então, continuo crescendo e enfrentando novos desafios com entusiasmo.

                    </p>
                </InfoContainer>
            )}
            {selectedOption === 1 && (
                <InfoContainer $isSelected={selectedOption === 1} >
                    <h2>Desenvolvedor Full Stack</h2>
                    <h4>BetAway</h4>
                    <p>Participo ativamente do desenvolvimento de um aplicativo Fintech,
                        onde atuo como colaborador e sócio majoritário. O projeto está em andamento, 
                        com um robusto back-end em Ruby e um frontend eficiente em React. 
                        Destaco a ênfase na documentação Git abrangente, facilitando a integração de novos colaboradores. 
                        Este empreendimento representa não apenas um desafio técnico, mas uma oportunidade de 
                        aprimorar minhas habilidades. Estou empolgado com a jornada e ansioso para ver o 
                        desenvolvimento contínuo deste projeto.
                    </p>
                </InfoContainer>
            )}
            {selectedOption === 0 && (
                <InfoContainer $isSelected={selectedOption === 0}>
                    <h2>Desenvolvedor</h2>
                    <h4>Loading...</h4>
                    <p>Ao longo dos últimos dois anos, mergulhei de cabeça no universo da tecnologia, 
                        absorvendo conhecimentos e enfrentando desafios que moldaram minha jornada profissional. 
                        Desde os primeiros passos até projetos complexos, cada experiência contribuiu para meu crescimento e 
                        amadurecimento como profissional da área. Agora, ansiosamente, aguardo por novas oportunidades para 
                        aplicar e ampliar os conhecimentos adquiridos nesse período, prontificando-me incansavelmente
                        para os desafios que me aguardam.
                    </p>
                </InfoContainer>
            )}
            
        </Container>
    );
}