/* eslint-disable default-case */
import React, {useState,useEffect} from 'react'; //we can import something specific the react library
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';



function App() {

    //States
    const[inputText,setInputText] = useState("");
    const [todos,setTodos] = useState([]);
    const [status,setStatus] = useState("all");
    const [filteredTodos,setFilteredTodos]=useState([]);

  //run once when the app start
    useEffect(() => {
      filterHandler();
    },[todos, status]);
    
    //Functions
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

  //save local
  /*
    const saveLocalTodos = () =>{
        localStorage.setItem('todos',JSON.stringify(todos));
      }; 
    

    const getLocalTodos = () => {
      if(localStorage.getItem("todos")===null){
        localStorage.setItem("todos",JSON.stringify([]));
      }else{
        let todoLocal= JSON.parse(localStorage.getItem("todos"));
        setTodos( todoLocal);
      }
    } */

    return (
      <div className="App">
        <header>
          <h1>My To Do List </h1>
        </header>
        <Form 
          inputText={inputText}
          todos={todos} 
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
          />
        <ToDoList 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} 
        todos={todos} 
        />
      </div>
    );
  }

export default App;
