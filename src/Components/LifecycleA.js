import React,{Component} from  'react'
import LifeCycleB from './LifecycleB'
class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Dhananjay'
        }
        console.log("LifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleA ComponentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(preProps,preState){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            name:"Ajay has been change from Dhananjay"
        })
    }
    render(){
        console.log("LifeCycleA Render Function")
        return (
            <div id='body'>
                <h1>LifeCycle A</h1>
                <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
            </div>
        )
    }
}
export default LifeCycleA