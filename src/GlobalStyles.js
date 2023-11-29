import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        letter-spacing: 2px;
        overflow-x: hidden;
        color: #a0a0c0;
    }
    h1{
        color: #FFFFFF;
        margin: 0;
    }
    
    h2,
    p {
        margin: 0;
    }
    a{
        text-decoration: none;
        color: inherit;
        &:hover {
          background-color: #272727;
        }
    }
    ul, ol{
        display: flex;
        list-style: none;
        color: white;
        margin: 0;
        padding: 0;
    }
    button{
        background-color: inherit;
        border: none;
        outline: none;
        cursor: pointer;
        transition-duration: .3s;
        transition-property: transform;
    }
    button:hover {
        background-color: #272727;;
        transform: scale(1.1);
    }
    button:active {
        background-color: #272727;
        transform: scale(0.95);
        transition: transform 0.5s ease;
    }
`;