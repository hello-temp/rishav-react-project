import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <User name="Fg" age={21} email="ag@ag.c" />
      <Jobs salary={1000} title="Dev" />
    </div>
  );
}
// React Component -> a func that returns UI / JSX, it should start with uppercase letter

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Jobs = (comps) => {
  return (
    <div>
      <h3> {comps.salary}</h3>
      <h3> {comps.title}</h3>
    </div>
  );
};
