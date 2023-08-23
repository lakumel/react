import TodoItem from "./TodoItem";
import './TodoList.css'; 
import {useState} from 'react'; 

const TodoList = ({todo, onUpdate, onDelete}) => {

    // 검색 처리 블락 
    const [search , setSearch] = useState(""); 

    //



    return (
    <div className ="TodoList">
        <h4> Todo List 🧞‍♂️🧞‍♀️</h4>

        <input 
            className ="searchbar"
            placeholder="검색어를 입력하세요" /> 

        <div className = "list_wrapper">
            
            {   // todo : 배열 [{객체}, {객체}, {객체}]
                // todo의 배열의 객체를 map을 사용해서 가져와서 출력 
                // 검색 기능을 같이 처리하면서 루프 
                todo.map( (it) => (

                <TodoItem 
                    key = {it.id}
                    id = {it.id} 
                    content = {it.content}
                    isDone = {it.isDone}
                    createDate = {it.createDate}
                    onUpdate = {onUpdate}
                    onDelete = {onDelete}
                /> 

                ))
            }
        </div>



    </div>
    );
}

export default TodoList; 