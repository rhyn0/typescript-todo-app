// This compoent represents the top level of a ToDo Item.
// Common elements of a ToDo would be the name of the action and a button to signify it being done
import React from "react";
import {
   CardContent,
   Card,
   Typography,
   CardHeader,
   CardActionArea,
   Button,
   CardActions,
} from "@mui/material";
import cn from "classnames";
import type { Todo } from "./types";
import { Delete } from "@mui/icons-material";

type TodoCardProps = {
   isDone: boolean;
   onChange: React.MouseEventHandler;
   onDelete: React.MouseEventHandler;
   todo: Todo;
   className?: string;
};

export default function TodoCard({
   isDone,
   onChange,
   todo,
   className,
   onDelete,
}: TodoCardProps) {
   const cardHeight: number = 175;

   const handleCardClick = (e) => {
      onChange(e);
      setTimeout(() => {
         onDelete(e);
      }, 3000);
   };

   return (
      <Card
         sx={{ height: cardHeight }}
         className={cn("flex flex-col justify-items-end w-full", className)}
      >
         <CardActionArea
            sx={{ height: cardHeight }}
            className="hover:bg-yellow-200 ease-in-out delay-0"
            onClick={handleCardClick}
         >
            <CardContent>
               <CardHeader
                  sx={{ alignContent: "center" }}
                  title={todo.text}
                  className={cn("text-gray-800", { "line-through": isDone })}
               />
               <Typography
                  align="inherit"
                  gutterBottom
                  className={cn("text-gray-500", { "line-through": isDone })}
               >
                  {todo.description}
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button onClick={onDelete} startIcon={<Delete />}>
               Delete
            </Button>
         </CardActions>
      </Card>
   );
}
