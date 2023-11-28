import styled from "styled-components";

export const Container = styled.div`
    h2{
        color: white;
        margin: 8% 0%;
    }
    p{
        max-width: 460px;
        overflow-wrap: break-word;
        word-wrap: break-word;
        margin-bottom: 8%;
        font-size: 16px;
    }
    span{
        display: inline-block;
        max-width: 460px;
        word-wrap: break-word;
        font-size: 14px;
        color: #28eb55;
        font-weight: 200;
    }
    .xx__Links{
        display: flex;
        justify-content: space-between;
        padding: 40px 30px 10px 0px;
    }
    .xx__Links a{
        margin-right: 3rem;
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
`;
export const AnimationImg = styled.img`
    max-width: 90%;
    /* border-left: 6px solid green; */
    margin-top: 8%;
    transition: transform 0.5s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;