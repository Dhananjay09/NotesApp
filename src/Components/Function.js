import React,{Component} from 'react' 
import Person from './Person'
function Dhananjay({name,roll}){
    const names=[
        {   
            id:1,
            name:"Dhananajy Singh",
            age:22,
            job:"Software Engineer"
            },
            {
                id:2,
                name:"Ajay Singh",
                age:27,
                job:"Lawyer"},
            {
            id:3,
            name:"Vijay Singh",
            age:30,
            job:"Police"
            }
        ]
    return (
        <div>            
            <h1>Dhananjay Singh from Function component</h1>
            <p>He is very Good</p>
            <p>{name}</p>
            <p>{roll}</p>
            <Person names={names}/>
        </div>
    )
}
export default Dhananjay