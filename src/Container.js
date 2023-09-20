import styled from "styled-components";

const Container = styled.div`
  .container {
    max-height: 100%;
    margin: auto;

    @media only screen and (min-width: 400px) {
      max-width: 80%;
    }
  }
`;

export default Container;
