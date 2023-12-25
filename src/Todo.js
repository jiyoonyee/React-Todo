import React, { useState,useRef } from "react"

function ListItem({item,Remove}) {
    return(
        <div>
            <div>
                {item.text}
                <button onClick={()=>Remove(item.id)}>X</button>    
            </div>
        </div>
    )
}

function Todo() {

    const [text,setText] = useState({
        text:''
    })

    const [todoList,setTodoList] = useState([
        
    ])

    const nextId = useRef(0);

    const InputChange = (e) => {
        setText(e.target.value)
    }

    const ItemCreate = () => {
        console.log(text)
        if(text !== ''){
            const item = {
                id:nextId.current,
                text
            }
            setTodoList([...todoList,item])
    
            nextId.current += 1
        }else{
            alert("다시 써")
        }
        
    }

    const ItemRemove =(id)=>{
        setTodoList(todoList.filter(item => item.id !== id));
    }
    return(
        <>  
            <div>
                <input placeholder="할거" onChange={InputChange}></input>
                <button onClick={ItemCreate}>submit</button>
            </div>
            <h1>LIST</h1>
            <div>
                {todoList.map(item => (
                    <ListItem item={item} key={item.id} Remove={ItemRemove}/>
                ))}
            </div>
        </>
    )
}

export default Todo;