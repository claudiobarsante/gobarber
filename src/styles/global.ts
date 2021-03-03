import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*,* ::after,*::before{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
}

html{
    font-size:62.5%;  
}

:root{
  --background:#312E38;
  --black-medium:#28262E;
  --gray:#999591;
  --gray-hard:#666360;
  --inputs:#232129;
  --orange:#FF9000;
  --shape:#3E3B47;
  --white:#F4EDE8;
  --error:#c53030;
}

body{
  background: var(---background);
  color:#FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-family: 'Roboto Slab', serif;
  font-size:1.6rem;
}

h1,h2,h3,h4,h5,h6, strong{
  font-weight:500;
}

button {
  cursor: pointer;
}

`;
