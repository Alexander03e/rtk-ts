import { createGlobalStyle  } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --main-color: var(--theme);
    --text-color: var(--invert)
  }
  body{
    margin:0;
    background-color: var(--main-color);
    color: var(--text-color);
    padding:0;
  }
  html[data-theme=dark]{
    --theme: #37352f;
    --invert: white;
  }
  html[data-theme=light]{
    --theme: white;
    --invert: #37352f;
  }
`