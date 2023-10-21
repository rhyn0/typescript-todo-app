"use client";
import React, { useState } from "react";
import { Fab, FormControl, TextField, Grid } from "@mui/material";
import cn from "classnames";
import TodoCard from "./TodoCard";
import type { Todo } from "./types";

type TodoListProps = {
   className?: string;
};

function TodoList({ className }: TodoListProps) {
   const [todoInput, setTodoInput] = useState<string>("");
   const [todoDescription, setTodoDescription] = useState<string>("");
   const [todoList, setTodoList] = useState<Todo[]>([]);

   const todoCompId: string = "todo-input";
   const descriptionCompId: string = "description-input";

   const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (e.target.id === todoCompId) {
         setTodoInput(e.target.value);
      } else {
         setTodoDescription(e.target.value);
      }
   };
   const onInputSubmit = () => {
      if (!todoInput) return;
      setTodoList((prev) => [
         ...prev,
         {
            id: Date.now(),
            text: todoInput,
            description: todoDescription,
            done: false,
         },
      ]);
      setTodoInput("");
      setTodoDescription("");
   };
   const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === "Enter") {
         onInputSubmit();
      }
   };
   return (
      <div className={cn(className)}>
         <FormControl className="flex flex-col justify-center">
            <TextField
               id={todoCompId}
               placeholder="Next Todo"
               // make the input box a rounded rectangle, by editing the sx props
               sx={{
                  borderRadius: 10,
                  border: "1px solid #EAEAEA",
                  backgroundColor: "#EA78B1",
                  minHeight: "50px",
               }}
               inputProps={{ style: { textAlign: "center" } }}
               fullWidth={true}
               margin="dense"
               onChange={onInputChange}
               value={todoInput}
               onKeyDown={onKeyPress}
            />
            <TextField
               id={descriptionCompId}
               placeholder="Next Description"
               // make the input box a rounded rectangle, by editing the sx props
               className="mr-8"
               sx={{
                  borderRadius: 10,
                  border: "1px solid #EAEAEA",
                  backgroundColor: "#EA78B1",
                  minHeight: "30px",
               }}
               inputProps={{ style: { textAlign: "center" } }}
               fullWidth={true}
               margin="dense"
               onChange={onInputChange}
               value={todoDescription}
               onKeyDown={onKeyPress}
               InputProps={{
                  endAdornment: (
                     <Fab
                        aria-posinset={1}
                        type="submit"
                        onClick={() => {
                           onInputSubmit();
                        }}
                        sx={{ "margin-right": "10px", "padding-right": "10px" }}
                        variant="extended"
                        className="mr-0"
                     >
                        Add
                     </Fab>
                  ),
               }}
            />
         </FormControl>
         <div
            id="todo-list"
            className="flex flex-col overflow-y-scroll h-96 divide-y shadow-xl ring-1"
         >
            <Grid container spacing={1}>
               {todoList.map((todo, idx) => (
                  <Grid key={todo.id} item>
                     <TodoCard
                        key={todo.id}
                        todo={todo}
                        isDone={todo.done}
                        onChange={() => {
                           const newTodoList = [...todoList];
                           newTodoList[idx].done = !newTodoList[idx].done;
                           setTodoList(newTodoList);
                        }}
                        onDelete={() => {
                           const newTodoList = [...todoList].filter(
                              (v, newIdx) => newIdx !== idx,
                           );
                           setTodoList(newTodoList);
                        }}
                     />
                  </Grid>
               ))}
            </Grid>
         </div>
      </div>
   );
}

export default TodoList;
