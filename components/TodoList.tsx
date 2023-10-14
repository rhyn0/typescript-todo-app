"use client";
import React, { useState } from "react";
import { Fab, FormControl, TextField } from "@mui/material";
import cn from "classnames";
interface TodoListProps {
   className?: string;
}
export interface Todo {
   id: number;
   text: string;
   done: boolean;
}

function TodoList({ className }: TodoListProps) {
   const [todoInput, setTodoInput] = useState<string>("");
   const [todoList, setTodoList] = useState<Todo[]>([]);

   const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setTodoInput(e.target.value);
   };
   const onInputSubmit = () => {
      if (!todoInput) return;
      setTodoList((prev) => [
         ...prev,
         {
            id: Date.now(),
            text: todoInput,
            done: false,
         },
      ]);
      setTodoInput("");
   };
   const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === "Enter") {
         onInputSubmit();
      }
   };
   return (
      <div className={cn(className)}>
         <FormControl>
            <TextField
               id="todo-input"
               onChange={onInputChange}
               value={todoInput}
               label={"Next ToDo"}
               onKeyDown={onKeyPress}
            />
            <Fab
               type="submit"
               onClick={() => {
                  onInputSubmit();
               }}
            >
               Add
            </Fab>
         </FormControl>
         {todoList.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
         ))}
      </div>
   );
}

export default TodoList;
