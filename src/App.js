import React, { useState } from 'react';
import Todo from "./components/Todo";

const App = ({ title }) => {

    const [todos, setTodos] = useState([{text:'Getting Started', isDone:false}]);

    function handelTodo(e){
       setTodos([...todos,{text:document.getElementById('input').value, isDone:false}]);
        console.log(todos)
    }

    function handelDelete(index){  
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        console.log(todos)
    }

    function handelFinish(index){
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);

        todos.filter()

    }

  return (
    <div className="my-5 ">
      <div className="text-center text-white text-4xl font-bold p-6">
        {title}
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly justify-items-center mx-auto my-7 w-4/5 lg:max-w-screen-md lg:justify-center">
        <input
          className="bg-gray-800 m-1 text-sm p-4 text-white font-bold rounded-lg lg:w-4/5"
          placeholder="Add a Task" onChange = {cap} id="input"></input>
        <button type='button' className="  lg:h-14 lg:w-32 m-1 h-10 py-2 px-4 bg-blue-700 text-white font-bold rounded text-xs" onClick={handelTodo}>ADD</button>
      </div>

      <div className="lg:max-w-screen-md w-4/5    bg-gray-800 mx-auto p-4 my-5 flex flex-col justify-evenly justify-items-center rounded-xl text-white">

        {todos.length==0 &&  <p className="text=white text-xl text-center font-bold">Empty</p>}
        {        
        todos.map((el,index)=> (
        <Todo 
        text={el.text} 
        index ={index} 
        markDone ={handelFinish} 
        remove={handelDelete} 
        key={Math.random().toString(36).substr(2, 9)} /> 
        ))}
      
      </div>
    </div>
  );
};

function cap(e){
    const text = e.target.value; 
    const capedText = text.charAt(0).toUpperCase()+text.slice(1);
    e.target.value = capedText;
}

export default App;
