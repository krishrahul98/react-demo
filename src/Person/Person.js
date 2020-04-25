import React from "react";
import "./Person.css";

const person = (props) => {
  //console.log(children);
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className='Person' style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <input type='text' onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};
export default person;
