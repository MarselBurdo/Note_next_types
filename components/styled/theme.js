import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  font-family: 'Srisakdi', cursive;
}

* {
  margin : 0;
  padding: 0;
}
body{
  font-size: 28px;
  display: grid;
  // justify-items: center;
  // grid-auto-flow: column;
  
}
`

export default GlobalStyle
