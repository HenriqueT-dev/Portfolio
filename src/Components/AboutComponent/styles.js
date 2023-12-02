import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 50px;
    background-color: #151515;
    img{
        width: 20%;
        border-left: 6px solid #02fa31;
    }        
    .xx__info{
        margin-left: 4rem;
        h2{
            color: #FFFFFF;
        }
        h4{
            color: #2d9140;
        }
        p{
        width: 85%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        }
    }
    //pedaço de código para a classe .xx__button
    .xx__button{
        display: flex;
        margin-top: 2rem;
    }
    .xx__button a {
        margin-right: 3rem;
    }
    .xx__button a:hover {
        background-color: #272727;
    }
    .xx__button button {
        display: flex;
        justify-content: space-evenly;
        width: 140px;
        height: 60px;
    }
    .xx__button img{
        border-left: 0;
    }
    //final do código para a classe .xx__button

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 100px 50px;
        img{
            width: 80%;
        }
        .xx__info{
            text-align: center;
            margin: 0;
            margin-top: 2rem;
            p{
                width: 100%;
            }
        }
        .xx__button{
            justify-content: space-evenly;
        }
        .xx__button button {
            width: 140px;
            height: 60px;
        }
        .xx__button a {
            margin-right: 1rem;
        }
        .xx__button img {
            width: 20%;
        }
    }
    @media (min-width: 1024px) {
        .xx__info{
        p{
            width: auto;
            overflow-wrap: break-word;
            word-wrap: break-word;
        }
    }
    }
`;