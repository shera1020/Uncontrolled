import React,{Component} from "react";
import "./styles.css";

export default class App extends Component {
  constructor(props){
   super(props)
   this.handleChange = this.handleChange.bind(this);
   this.input = React.createRef();
  }
  handleChange = (newText) =>{
    console.log(newText);
  }

  render(){
  return (
<form>
    <div className="App">
      
      <div className = "container">
     <label>First Name:</label>
     <input type="text" placeholer="First Name" ref={this.input} onChange={(event) =>this.handleChange(event.target.value) }/><br/>

     <label>Enter Message:</label>
    <input type="text" placeholder="Enter message here" ref={this.input}
     onChange = {(event) => this.handleChange(event.target.value)}/>
    
      </div>

    </div>
    </form>
  );
  }
}
