import styled, { css, keyframes } from "styled-components";

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

  .xx__h2 {
    font-family: 'Noto Serif Balinese', serif;
    color: #02fa31;
    letter-spacing: 0;
    font-size: 14px;
    padding: 1%;
    border-radius: 4px;
  }

  .xx__ul {
    display: flex;
    align-items: center;
    padding: 1.5% ;
    a {
        border-radius: 4px;
        padding: 8%;
        cursor: pointer;

        &:hover {
          background-color: #272727;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
  }

  .menu-toggle {
    display: none;
    cursor: pointer;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    padding: 5%;
    .xx__h2{
        font-size: 16px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .xx__ul {
      display: none;
    }

    .menu-toggle {
      display: block;
      font-size: 2rem;
      color: #02fa31;
    }

    ${({ $isMenuOpen }) => $isMenuOpen && css`
        .xx__ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 80px;
            right: 5px;
            padding: 2rem;
            background-color: #151515;
            animation: ${slideInAnimation} 0.5s forwards;
            ul {
                display: flex;
                flex-direction: column;
                a {
                    width: 100%;
                    text-align: left;
                    padding: 1rem;
                    border-bottom: 2px solid #2d9140;
                    border-radius: 0;
                }
            }
        }
    `}
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