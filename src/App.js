import React, { Component } from "react";
import Style from "./App.module.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sgfagf1", name: "Rahul", age: 28 },
      { id: "sgfagf2", name: "Raj", age: 21 },
      { id: "sgfagf3", name: "Amit", age: 29 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  };

  render() {
    let persons = null;
    const buttonClass = [Style.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      buttonClass.push(Style.Red);
    }

    const pClasses = [];
    if (this.state.persons.length <= 2) {
      pClasses.push(Style.Red);
    }
    if (this.state.persons.length <= 1) {
      pClasses.push(Style.Bold);
    }

    return (
      <div className={Style.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={pClasses.join(" ")}>This is really working!</p>
        <button
          className={buttonClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
