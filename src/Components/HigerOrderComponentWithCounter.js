import React,{Component} from 'react'
const HOC =(Previouse,count)=>{
       class NewComponent extends Component{
           constructor(){
            super()
            this.state={
                count:0
            }
           }
           IncreamentCounter=()=>{
               this.setState({
                   count:this.state.count+count
               })
           }
            render(){
            console.log(this.props.name)
            return (<Previouse count={this.state.count} IncreamentCounter={this.IncreamentCounter}  {...this.props}/> )
            }
        }
        return NewComponent
}
export default HOC