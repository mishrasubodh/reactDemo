import React, { Component } from 'react';

import './App.css';
import  Person from './Person/Person'
class App extends Component {

state={

persons:[
{id:"asf1",name:'subodh',age:26},
{id:"asf2",name:'mani',age:26},
{id:"asf3",name:'deepanshu',age:26}

],
showPerson:false,
otherState:'some other state'
}

nameChangeHandler=(event,id)=>{
  const personIndex =this.state.persons.findIndex(p=>{
    return p.id===id;
  })

  const person = {
   ...this.state.persons[personIndex]
  };
  person.name = event.target.value;

const persons =[...this.state.persons]

persons[personIndex] = person;

this.setState({
  persons:persons})
}
deletPersonHandlor =(personeIndex)=>{
const persons =this.state.persons;
persons.splice(personeIndex,1);
this.setState({persons:persons})
}
togglePersonHandler=()=>{
  const doesShow = this.state.showPerson;
this.setState({
showPerson:!doesShow
});
}
  render() {

    let person = null;

    if(this.state.showPerson){
 person =(
<div>
{this.state.persons.map((person,index)=>{
  console.log('person',index)
  return <Person

  click={()=>this.deletPersonHandlor(index)}
   name={person.name}
   age={person.age}
   key={person.id}
   change={(event)=>this.nameChangeHandler(event,person.id)} />
})}
   </div> 
 );
    }

    return (
     <div > 
     <h1>hi  i am react app</h1>
     <p1>this is working</p1>
     <button onClick={this.togglePersonHandler}>switch Name</button>
    {person}
     </div>
    );
  }
}

export default App;
