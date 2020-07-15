import React,{Component} from 'react'
import HOC from './HigerOrderComponentWithCounter'
class CounterOnClick extends Component{
    render(){

    return (<button onClick={this.props.IncreamentCounter}>{this.props.name}Clicked {this.props.count} Times</button>)
    }
}
export default HOC(CounterOnClick,6)