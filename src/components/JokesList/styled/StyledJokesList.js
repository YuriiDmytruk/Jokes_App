import styled from "styled-components";

const StyledJokesList = styled.ul`
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(1, minmax(0px, auto));

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0px, auto));
  }

  @media only screen and (min-width: 850px) {
    grid-template-columns: repeat(3, minmax(0px, auto));
  }

  @media only screen and (min-width: 1080px) {
    grid-template-columns: repeat(4, minmax(0px, auto));
  }

  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(5, minmax(0px, auto));
  }

  @media only screen and (min-width: 1980px) {
    grid-template-columns: repeat(6, minmax(0px, auto));
  }
`;

export default StyledJokesList;
