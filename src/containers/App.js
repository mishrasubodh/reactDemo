import React, { Component } from "react";
import "./App.css";
import Persons from "../component/Persons/Persons";
import Cockpit from "../component/Cockpit/Cockpit";
class App extends Component {
constructor(props){
 super(props);
//this.props.title
console.log('[app.js] inside constructor',props);
this.state = {
  persons: [
    { id: "asf1", name: "subodh", age: 26 },
    { id: "asf2", name: "mani", age: 26 },
    { id: "asf3", name: "deepanshu", age: 26 }
  ],
  showPerson: false,
  otherState: "some other state"
};
}
componentWillMount(){
  console.log('[app.js] inside componentWillmount()')
}
 
componentDidMount(){
  console.log('[app.js] inside componentDidmount()')
}

// state = {
//   persons: [
//     { id: "asf1", name: "subodh", age: 26 },
//     { id: "asf2", name: "mani", age: 26 },
//     { id: "asf3", name: "deepanshu", age: 26 }
//   ],
//   showPerson: true,
//   otherState: "some other state"
// };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletPersonHandlor = personeIndex => {
    const persons = this.state.persons;
    persons.splice(personeIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  render() {
    console.log('[app.js] inside render()')
    let person = null;
    if (this.state.showPerson) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletPersonHandlor}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
        appTitle={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {person}
      </div>
    );
  }
}

export default App;
