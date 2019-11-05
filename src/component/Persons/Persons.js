import React, { Component } from "react";
import Person from "./Person/Person";
export class Persons extends Component {
 
   constructor(props){
      super(props);
     //this.props.title
     console.log('[persons.js] inside constructor',props);
     }
     componentWillMount(){
       console.log('[persons.js] inside componentWillmount()')
     }
      
     componentDidMount(){
       console.log('[persons.js] inside componentDidmount()')
     }
   render() {
      console.log('[persons.js] inside render()')
    return this.props.persons.map((person, index) => {
      return <Person
          click={() =>this. props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={event =>this.props.changed(event, person.id)}
        />
     
    });
  }
}
export default Persons;
