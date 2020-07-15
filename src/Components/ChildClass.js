import React,{Component} from 'react'
function ChildClassFunction(props){
return (
    <div>
        <button onClick={()=>props.greet("Dhananjay")}>Chnage State</button>
    </div>
)
}
export default ChildClassFunction