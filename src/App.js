import { useState } from 'react'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'

function App() {
  const [todos, setTodos] = useState(startTodolist)

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) < today)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) >= today)
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <TodoList
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />
    </div>
  )
}


export default App
