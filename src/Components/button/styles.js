import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    line-height: 1;
    padding: 15px;
    border: 2px solid #3C5C42;
    border-radius: 8px;
    letter-spacing: 1.5px;
    background-color: transparent;
    :hover{
        background: #272727;
    }
    img{
        margin-right: 20px;
    }
`;