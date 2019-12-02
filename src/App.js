import React from 'react';
import './App.css';
import Login from './container/LoginContainer';
import ToDo from './container/ToDoContainer';
function App() {
  return (
    <div className='app-container'> 
        <Login/>
        <ToDo/>
    </div>
  );
}

export default App;
