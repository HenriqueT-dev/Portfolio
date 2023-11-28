import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0% 15%;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: #151515;
    border-bottom: 2px solid #272727;
    .xx__h2{    
        font-family: 'Noto Serif Balinese', serif;
        color: #02fa31;;
        letter-spacing: 0;
        font-size: 14px;
    }
    .xx__ul{
        a{
            border-radius: 4px;
            padding: 5% 5%;
            cursor: pointer;
            
            &:hover{
                background-color: #272727;
            }
            &:not(:last-child) {
                margin-right: 60px;
        }   
    }
    }
    
`;