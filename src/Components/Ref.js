import React,{Component} from 'react'
class Ref extends Component{
    constructor(){
        super()
    this.Ref=React.createRef()
    }
    componentDidMount(){
        this.Ref.current.focus()
    }
    clickHandler=()=>{
        this.Ref.current.value="Dhananjay"
    }
    render(){
        return (
            <React.Fragment>
                <input type="text" ref={this.Ref}/>
                <button onClick={this.clickHandler}>Click</button>
            </React.Fragment>
        )
    }
}
export default Ref