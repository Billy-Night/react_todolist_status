import React, { useState } from "react";
import "./App.css";

let myTodos = ["walk the dog", "workout", "code", "cook"];

function App() {
  let [listOfTodos, setListOfTodos] = useState(myTodos);
  let [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // An array that contains whatever I use to have already in listOfTodos AND ALSO the new value that is mySingleTodo
    setListOfTodos([...listOfTodos, todo]);
    setTodo(""); // reset the input value to be empty
  };

  const handleInputChange = (event) => {
    // know what's the change
    // console.log(event.currentTarget.value);
    // Update my state property with that change
    setTodo(event.currentTarget.value);
  };

  const deleteTodo = () => {
    console.log("clicked!!");
  };

  return (
    <div className="App">
      <h1>Wild ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="todo..."
          value={todo}
          onChange={handleInputChange}
          type="text"
        />
        <button>Add ToDo</button>
      </form>
      <h3>List of your ToDo's</h3>
      {/* I want to display all the todos that I have in my listOfTodos as a p tag*/}
      {listOfTodos.map(function (item, index) {
        return (
          <div key={index}>
            <p>
              You have to do this: <b>{item}</b>
            </p>
            <button onClick={deleteTodo}>DONE!</button>
          </div>
        );
      })}
      {/* {listOfTodos.map((item, index) => (
          <div key={index}>
            <p>
              You have to do this: <b>{item}</b>
            </p>
            <button onClick={deleteTodo}>DONE!</button>
          </div>
      ))} */}
    </div>
  );
}

export default App;