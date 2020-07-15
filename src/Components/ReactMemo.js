import React from 'react'
function ReactMemo(){
    alert("Inside Memo Function")
    return <h1>Memo Function</h1>
}
export default React.memo(ReactMemo)