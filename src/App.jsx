import "./App.css"

import { Stack, Box, Button, TextField } from "@mui/material";

import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";
import { Container } from "@mui/system";



function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加する
    console.log(todoNameRef);
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]; // ...で中身を展開している
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id); // idをもとに探す
    todo.completed = !todo.completed;
    setTodos(newTodos)
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <Box>
      <Container maxWidth="sm">
    <Stack direction="row" alignItems="center" spacing={10}>
      <TextField variant="standard" label="タスクを入力" type="text" inputRef={todoNameRef}/>
      <Button variant="contained" onClick={handleAddTodo} >タスクを追加</Button>
      <Button variant="contained" onClick={handleClear} >完了したタスクの削除</Button>
    </Stack>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </Container>
    </Box>
  );
}

export default App;
