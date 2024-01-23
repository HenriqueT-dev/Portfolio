import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 120px;
    background-color: #121212;
    img{
        width: 45%;
    }
    .xx__info{
        text-transform: uppercase;
    }
    .xx__span{
        margin-bottom: 30px;
        h1{
            color: #02fa31;
            padding: 20px 0px;
        }
    }
    .xx__button{
        display: flex;
        justify-content: space-between;
    }
    .xx__button a:hover {
        background-color: #272727;
    }
    .xx__button img{
        width: 20%;
        background-color: transparent;
    }

    .xx__button button {
        display: flex;
        width: 140px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        .xx__info{
            padding: 6rem 0rem;
        }
        .xx__button{
            a{
                margin: 0;
            }
        }
        .xx__imgMobile{
            display: none;
        }
    }
`;