import './App.css'
import {TodoInput} from './Components/TODO/Todoinput';
import {TodoList} from './Components/TODO/Todolist';

function App() {
 
  return (
    <div className="App">
     <TodoInput></TodoInput>
     <TodoList></TodoList>
    </div>
  )
}

export default App
