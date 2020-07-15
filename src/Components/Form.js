import React, {Component} from 'react'
class Form extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            comment: '',
            topic:'react'
        }
    }
    HandleUserNameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    HandleUserCommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handletopicchange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    render(){
        const {username,comment,topic}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <>
                
                <label>Uername</label>
                <input type='text' value={username} onChange={this.HandleUserNameChange}/>
                </>
                <>
                <label>Comments</label>
                <textarea value={comment} onChange={this.HandleUserCommentChange}/>
                </>
                <>
                    <select value={topic} onChange={this.handletopicchange}>
                        <option>React</option>
                        <option>Anguar</option>
                        <option>Vue</option>
                        </select>
                </>
                
                    <button type="submit">SubMit Detail</button>
                    
            </form>
        )
    }

}
export default Form