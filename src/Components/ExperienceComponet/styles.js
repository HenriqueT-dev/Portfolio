import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 100px 120px;
    background-color: #121212;
    .xx__menu{
        h1{
            font-size: 24px;
            padding-bottom: 3rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 6rem 0rem;
        text-align: center;
        .xx__menu{
            margin-bottom: 4rem;
        }
    }
`;

export const Card = styled.div`
    position: relative;
    display: block;
    align-items: center;
    padding: 15px;
    color: white;
    cursor: pointer;
    border-left: 2px solid #272727;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    ${({ $isSelected }) => 
        $isSelected && 
        css`
            border-left: 2px solid #2d9140;
        `}
    &:hover {
        background-color: #272727;
    }
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        border-left: 0px;
        border-bottom: 2px solid #2d9140;
        width: 50%;
        margin-left: 24.5%;

        ${({ $isSelected }) => 
        $isSelected && 
        css`
           background-color: #272727;
        `}
    }
`;

export const InfoContainer = styled.div`
    margin-left: 4rem;
    margin-top: 5rem;
        h2{
            color: #FFFFFF;
        }
        h4{
            margin: 2.5rem 0rem;
            color: #2d9140;
        }
        p{
            width: 80%;
            overflow-wrap: break-word;
            word-wrap: break-word;
        }
        ${({ $isSelected }) => $isSelected && css`
            animation: ${slideInAnimation} 0.5s forwards;
  `}

  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        width: 90%;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    h4{
        width: 70%;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
  }
  @media (min-width: 1024px) {
        p{
            width: auto;
            overflow-wrap: break-word;
            word-wrap: break-word;
        }
    }
`;

const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;