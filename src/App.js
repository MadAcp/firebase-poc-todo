import React, { useState , useEffect } from 'react';
import './App.css';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
} from 'firebase/firestore';
import { db } from './firebase';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  // Update todo in the firebase (mark complete)
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo from the firebase
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={createTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
