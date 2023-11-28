import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 50px;
    background-color: #151515;
    img{
        width: 20%;
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
        width: 810px;
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
    }
    //final do código para a classe .xx__button
`;