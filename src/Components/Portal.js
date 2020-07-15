import React,{Component} from 'react'
import ReactDOM from 'react-dom'
function Portal(){
    var count=10;
    return ReactDOM.createPortal(
        <div>
          
        </div>
        ,document.getElementById('portal'))
}
export default Portal