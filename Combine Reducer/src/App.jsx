import { useState } from 'react'
import './App.css'
import {TodoInput} from './Components/TODO/Todoinput';
import {TodoList} from './Components/TODO/Todolist';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     combine Reducer
     <TodoInput></TodoInput>
     <TodoList></TodoList>
    </div>
  )
}

export default App
