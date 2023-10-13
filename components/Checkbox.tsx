// A checkbox component that is reactive for a user
// this component does not actually own its state as the parent object needs to

import React from "react";
import { Checkbox } from "@mui/material";
import cn from "classnames";

// notify other components of changes in this checkbox
// this Prop type accepts in a state variable of type boolean
// and the function to change the state variable
// and the name of the checkbox
type CheckboxProps = {
   isChecked: boolean;
   setIsChecked: (value: boolean) => void;
   className?: string;
};

export default function SimpleCheckbox({
   isChecked,
   setIsChecked,
   className,
}: CheckboxProps) {
   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setIsChecked(e.target.checked);
   };
   if (typeof className === "undefined") {
      className = "";
   }
   return (
      <Checkbox
         checked={isChecked}
         onChange={handleChange}
         className={cn(className, { "line-through": isChecked })}
      />
   );
}
