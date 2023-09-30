import React from 'react';
import UserList from './components/UserList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{margin: '0 auto', width: '800px'}} className="App">
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
