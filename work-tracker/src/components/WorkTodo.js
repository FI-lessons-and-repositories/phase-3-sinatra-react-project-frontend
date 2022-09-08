import React from 'react'

const WorkTodo = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo) => (
            (
                <li className='list-work'key={todo.id}>
                    <input
                     type="text"
                     value={todo.title}
                     className="list"
                     onChange={(event) => event.preventDefault()}
                    />
                </li>
            )
        ))}
    </div>
  );
}

export default WorkTodo;
