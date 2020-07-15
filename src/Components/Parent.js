import React,{ Component} from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'
import ReactMemo from './ReactMemo'
class parent extends Component{
    constructor(){
        super()
    this.state={
        name:"Ajay"
    }
    }
    componentWillMount(){
        setInterval(()=>{
            this.setState({
                name:"Ajay"
            })
        },2000)
    }
    render(){
        
        return(
            <ReactMemo/>
        )
    }
}
export default parent