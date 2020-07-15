import React,{Component} from 'react'
import ChildClass from './ChildClass'
class Dhanajay extends Component{
    constructor(){
        super()
        this.state={
            name:"Ajay SIngh",
            roll: 16010113,
            college: "IIIT MAnipur",
            loggedin:false
        }
    }
    changestate=()=>{
       this.setState({
        roll: 16010119,
        name:"Anurag Singh",
       })
    }
    greetparent=(name)=>{
        alert(name)
    }
    changestate=()=>{
        this.setState({
            loggedin:this.state.loggedin ? false : true
        })
    }
    render(){
        const {name,roll}=this.props
        return (
            <div>
            <h1>Dhananjay Singh From Class Component</h1>
            <p>He is very Good</p>
            <p>{name}</p>
            <p>{roll}</p>
            <p>Current Roll No is {this.state.roll}</p>
            <p>Name is {this.state.loggedin ? this.state.name : "Guest"}</p>
        <button onClick={this.changestate}> {this.state.loggedin ? "Log Out" : "Log In"}</button>
            <ChildClass greet={this.greetparent}/>
         <p>Welcome </p>
        </div>
        )
    }
}
export default Dhanajay