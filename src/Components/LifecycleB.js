import React,{Component} from  'react'
class LifeCycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Dhananjay'
        }
        console.log("LifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleB ComponentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate")
    }
    render(){
        console.log("LifeCycleB Render Function")
        
        return <div><h1>LifeCycleB</h1></div>
    }
}
export default LifeCycleB