import  React from 'react';
import  '../Person/Person.css'
const person =(props)=>{
console.log(props)
 return (
<div className="Person">
     <p onClick={props.click}> i'am {props.name} and i am {props.age} years old</p>  
     <p>{props.children}</p>
     <input type="text"onChange={props.change} value={props.name}/>
     </div>
     
 )   
};

export default person; 