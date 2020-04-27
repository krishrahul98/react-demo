import React from "react";
import Style from "./Cockpit.module.css";

const cockpit = (props) => {
  const pClasses = [];
  const buttonClass = [Style.Button];
  if (props.persons.length <= 2) {
    pClasses.push(Style.Red);
  }
  if (props.persons.length <= 1) {
    pClasses.push(Style.Bold);
  }
  if (props.showPerson) {
    buttonClass.push(Style.Red);
  }
  return (
    <div className={Style.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={pClasses.join(" ")}>This is really working!</p>
      <button className={buttonClass.join(" ")} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
