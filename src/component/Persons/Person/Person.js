import  React,{Component} from 'react';
import  classes from './Person.css'
class  Person extends Component {

    constructor(props){
        super(props);
       //this.props.title
       console.log('[person.js] inside constructor',props);
       }
       componentWillMount(){
         console.log('[person.js] inside componentWillmount()')
       }
        
       componentDidMount(){
         console.log('[person.js] inside componentDidmount()')
       }



    render(){
        console.log('[person.js] inside render()')
        return (
            <div className={classes.Person}>
                 <p onClick={this.props.click}> i'am {this.props.name} and i am {this.props.age} years old</p>  
                 <p>{this.props.children}</p>
                 <input type="text"onChange={this.props.change} value={this.props.name}/>
                 </div> 
             )   
    }
        
    
};



export default Person; 