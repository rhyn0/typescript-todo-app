// This compoent represents the top level of a ToDo Item.
// Common elements of a ToDo would be the name of the action and a button to signify it being done
import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from "./Checkbox";
import cn from "classnames";

type TodoCardProps = {
   isDone: boolean;
   onChange: (value: boolean) => void;
   title: string;
   description?: string;
   className?: string;
};

export default function TodoCard({
   isDone,
   onChange,
   title,
   description,
   className,
}: TodoCardProps) {
   // TODO: try Card from @mui/material
   return (
      <div className="flex flex-col justify-items-end w-full">
         <p>Todo Card</p>
         <FormControlLabel
            control={
               <Checkbox
                  isChecked={isDone}
                  setIsChecked={onChange}
                  className={cn(className, "bg-transparent")}
               />
            }
            label={title}
            className={cn({ "line-through": isDone })}
         />
         <p className={cn("text-gray-200", { "line-through": isDone })}>
            {description}
         </p>
      </div>
   );
}
