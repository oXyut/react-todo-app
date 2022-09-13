import React from 'react'

function Todo({ todo, toggleTodo }) {

    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

  return (
    <div>
        <label>
        {/* checkedにはboolianが入る */}
            <input type="checkbox"  checked={todo.completed} readOnly onChange={handleTodoClick}/>
        </label>
        {todo.name}
    </div>
  )
}

export default Todo