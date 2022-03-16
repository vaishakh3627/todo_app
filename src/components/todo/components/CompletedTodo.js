import React from "react";

const CompletedTodo = ({completed}) => {
    
    return(
        <div>{completed.map((item, key) => (
            <ol key={key}> 
            <li>{item.text}</li></ol>
            
        ))}</div>
    )
}
export default CompletedTodo;