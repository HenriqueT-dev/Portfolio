import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 120px;
    background-color: #151515;
    h1{
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 24px;
    }
    .xx__grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10%;
        row-gap: 3%;
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
    @media (min-width: 770px) and (max-width: 1024px) {
        .xx__grid{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            padding: 0rem 1rem 4rem 1rem;
        }
        h1{
            justify-content: center;
            padding: 4% 0%;
        }
    }
`;