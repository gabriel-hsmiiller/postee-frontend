import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: #FFFFFF;
    }
    &::-webkit-scrollbar-thumb {
      background: #6E951B;
    }
  }
  body {
    font-family: 'Inter', sans-serif;
    color: #222222;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
    &:hover {
      opacity: .9;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
`;