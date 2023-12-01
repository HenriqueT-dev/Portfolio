import styled from "styled-components";

export const Container = styled.div`
    background-color: #151515;
    h1{
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 24px;
        padding: 5% 0% 0% 6%;
    }
    .xx__grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10%;
        row-gap: 3%;
        padding: 0% 6% 6% 6%;
    }
    @media (max-width: 768px) {
        text-align: center;
        h1{
            justify-content: center;
            padding: 8% 0%;
        }
        .xx__grid{
            display: block;
            padding: 0;
        }
    }
`;