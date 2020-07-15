import React from 'react'
//import './Person.css'
const inline={
    fontSize:'20px',
    color: 'red'
}
function Person({names}){
    const name_lst=names.map((value)=><h3 className="dj dj1">I am {value.name}. I am {value.age} years old. I am {value.job}.</h3>)
    return (
        <div style={inline}>
        
       {name_lst}
        </div>)
} 
export default Person