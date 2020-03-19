import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Rahul", age: 28 },
      { name: "Raj", age: 21 },
      { name: "Amit", age: 29 }
    ]
  });
  //console.log(personsState);
  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: 22 },
        { name: "Raj Raj", age: 38 },
        { name: "Amit Kumar", age: 25 }
      ]
    });
  };
  return (
    <div className='App'>
      <h1>Hello There</h1>
      <button onClick={switchNameHandler.bind(this, "Krishna")}>
        Click ME
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this, "Max")}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        I am Here.
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
}

export default App;
