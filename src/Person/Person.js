import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 3px solid #eee;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyleDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <input type='text' onChange={props.changed} defaultValue={props.name} />
    </StyleDiv>
  );
};
export default person;
