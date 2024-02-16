import styled from "styled-components";

export const Container = styled.div`
    h2{
        color: white;
        margin: 8% 0%;
    }
    p{
        max-width: 440px;
        overflow-wrap: break-word;
        word-wrap: break-word;
        margin-bottom: 8%;
        font-size: 16px;
    }
    span{
        display: inline-block;
        max-width: 440px;
        word-wrap: break-word;
        font-size: 14px;
        color: #28eb55;
        font-weight: 200;
    }
    .xx__Links{
        display: flex;
        padding: 40px 0;
    }
    .xx__Links a{
        margin-right: 20px;
    }
    .xx__Links a:hover {
        background-color: #272727;
    }
    .xx__Links button {
        width: 160px;
        padding: 15px 50px;
    }
    .xx__Links img{
        margin: 0px 20px 0px 0px;
        width: 40%;
        border: none;
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 40px;
        p{
            padding: 0px 10px;
        }
        span{
            padding: 0px 25px;
        }
        .xx__Links {
            display: block;
            padding: 40px 0px 20px 0px;
        }
        .xx__Links button {
            width: 140px;
            height: 60px;
        }
    }
    @media (min-width: 770px) and (max-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p{
            padding: 0;
            max-width: 70%;
        }
        span{
            padding: 0px 25px;
        }
        .xx__Links {
            display: flex;
            padding: 40px 0px;
        }
    }
`;
export const AnimationImg = styled.img`
    max-width: 90%;
    /* border-left: 6px solid #02fa31; */
    margin-top: 8%;
    transition: transform 0.5s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;