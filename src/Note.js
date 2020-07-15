import React,{Component,useState} from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import "./note.css"
class Note extends Component{   
    constructor(){
        super()
        this.state=
        {
            title:"",
            content:""
        }
    }
    inputEvent=(event)=>{
        this.setState({
            title:event.target.value
        })
    };
    inputEvent1=(event)=>{
        this.setState({
            content:event.target.value
        })
    };
    addnote=()=>{
        console.log("Data Need to be added"+this.state.title+" "+this.state.content)
        this.props.state(this.state);
        this.setState({
            title:"",
            content:""
        })
    }
    render()
    {
        return (
            
            <div className="addnot">
            <Card className="form">
                <input type="text" value={this.state.title} onChange={this.inputEvent} name="title" placeholder="Title"></input>
                <textarea name="content" value={this.state.content} onChange={this.inputEvent1} placeholder="Write the note........"></textarea>
                
            </Card>
            <Button className="button" onClick={this.addnote}><AddIcon style={{ fontSize: 40 }}/></Button>
            </div>
    )}
}
export default Note;