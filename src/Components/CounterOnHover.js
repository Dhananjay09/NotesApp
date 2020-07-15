import React,{Component} from 'react'
import HOC from './HigerOrderComponentWithCounter'
class CounterOnHover extends Component{
    render(){
    return (<h1 onMouseOver={this.props.IncreamentCounter}> {this.props.name}Clicked {this.props.count} Times</h1>)
    }
}
export default HOC(CounterOnHover,5)