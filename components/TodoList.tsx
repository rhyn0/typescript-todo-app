"use client";
import React, { useState } from "react";
import { Fab, FormControl, InputBase } from "@mui/material";
import cn from "classnames";
import TodoCard from "./TodoCard";
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
         <FormControl className="flex flex-row w-full justify-center">
            <InputBase
               id="todo-input"
               placeholder="Next Todo"
               // make the input box a rounded rectangle, by editing the sx props
               sx={{ ml: 1, flex: 1, borderRadius: 10 }}
               fullWidth={true}
               margin="dense"
               onChange={onInputChange}
               value={todoInput}
               onKeyDown={onKeyPress}
            />
            <Fab
               type="submit"
               onClick={() => {
                  onInputSubmit();
               }}
               className="mr-0"
            >
               Add
            </Fab>
         </FormControl>
         <div id="todo-list" className="flex flex-col overflow-x-scroll">
            {todoList.map((todo, idx) => (
               <TodoCard
                  key={todo.id}
                  title={todo.text}
                  isDone={todo.done}
                  onChange={() => {
                     const newTodoList = [...todoList];
                     newTodoList[idx].done = !newTodoList[idx].done;
                     setTodoList(newTodoList);
                  }}
               />
            ))}
         </div>
      </div>
   );
}

export default TodoList;
