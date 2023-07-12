import React from 'react';
import './style.css';
import { User } from './User';

export default function App() {
  const users = [
    { name: 'Pedro', age: 21 },
    { name: 'bruce', age: 21 },
    { name: 'clare', age: 23 },
  ];

  return (
    <div className="App">
      {users.map((users, key) => {
        //return <div >  {users.name} {users.age} </div>;

        // MORE CLEANER WAY IS BY USING THE COMPONENT

        return <User name={users.name} age={users.age} />;
      })}
    </div>
  );
}
// React Component -> a func that returns UI / JSX, it should start with uppercase letter
