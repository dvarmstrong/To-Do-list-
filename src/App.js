
import './App.css';
import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import List from './components/List';




function App() {
  const [toDoList, setToDoList] = useState([]);
  
 
  return (
    <div className="App">
      <TodoForm toDoList={toDoList} setToDoList={setToDoList} />
      
      <List toDoList={toDoList} setToDoList={setToDoList}  />

    </div>
  );
}

export default App;
