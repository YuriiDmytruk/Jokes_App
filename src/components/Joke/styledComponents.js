import styled from "styled-components";

const Wrapper = styled.li`
  height: 200px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border: 3px solid;
  border-color: #4831d4;
  border-radius: 25px;
  width: 250px;
`;

const CategoryPlace = styled.div`
  display: flex;
  height: 50px;
  border-radius: 25px;
  background-color: #ccf381;
`;

const CategoryText = styled.div`
  display: inline;
  margin: auto;
  font-size: 25px;
`;

const ButtonPlace = styled.div`
  display: flex;
  height: 50px;
  border-radius: 25px;
  background-color: #ccf381;
`;

const Button = styled.button`
  width: 80%;
  height: 70%;
  display: inline;
  margin: auto;
  font-size: 25px;
  border-radius: 10px;
  background-color: #4831d4;
  color: #ccf381;

  &:hover {
    background-color: #2602fa;
  }
`;

const JokeText = styled.div`
  margin: 5px;
  text-align: center;
  font-size: 25px;
`;

export default Wrapper;

export { CategoryPlace, Wrapper, CategoryText, ButtonPlace, Button, JokeText };
