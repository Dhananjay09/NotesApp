import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import SimpleCard from './Card'
import AddIcon from '@material-ui/icons/Add';
import './createnote.css';
import Note from './Note';
import DisplayNote from './Components/DisplayNote'
class CreateNote extends Component{
    constructor(){
        super()
        this.state={
            value:[]
        }
    }
    addvalue=(data)=>{
        const {title,content}=data;
        const pkjj=this.state.value;
        pkjj.push(data);
        this.setState({
                value:pkjj
            })
        console.log(this.state.value);
    }
    onChange=()=>{
        alert("Clicked");
    }
    onDelete=(id)=>{
        console.log(this.state.value);
        const newarray=this.state.value.filter((value,index)=>{
            return index!=id;
        })
        console.log("deleted Data"+newarray);
    this.setState({
     value:newarray
    })
    }
    onChange=(data)=>{
        //alert(data.title+ data.content);
        this.state.value[data.id].content=prompt("Please Update the vale", this.state.value[data.id].content);
        this.setState({
            value : this.state.value
        })
        
    }

    
    render(){
    return (
        <div>
            <Note state={this.addvalue}/>
            <div className="note-container">
            {
                this.state.value.map((val, index)=>{
                        return <DisplayNote 
                        key ={index}
                        id ={index}
                        title = {val.title}
                        content = {val.content}
                        delete ={this.onDelete}
                        change = {this.onChange}
                         />
                        
                })
                
            }
            </div>
            </div>
    )}
}
export default CreateNote;