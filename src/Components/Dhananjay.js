import React,{PureComponent} from 'react'
import './Dhananjay.css'
class Dhananjay extends PureComponent{
    constructor(){
        super()
        this.state={
            name:"",
            username:"",
            password:""
        }
        this.ref=React.createRef()
    }
    handlename=(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handleusername=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handlepassword=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(this.state.name +" "+ this.state.username+" "+this.state.password)
        event.preventDefault()
    }
    componentDidMount(){
        this.ref.current.focus()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} className="form-data">
                <div className="single-detail">
                <h1>Fill Your Details</h1>
                </div>
                <div className="single-detail">
                <label>Full Name</label>
                <input type="text" ref={this.ref} onChange={this.handlename}></input>
                </div>
                <div className="single-detail">
                <label>UserName</label>
                <input type="text" onChange={this.handleusername}></input>
                </div>
                
                <div className="single-detail">
                <label>Password</label>
                <input type="password" onChange={this.handlepassword}></input>
                </div>
                <button>Submit Detail</button>
            </form>
        )
    }
}
export default Dhananjay