// A checkbox component that is reactive for a user
// this component does not actually own its state as the parent object needs to

import React, { ChangeEventHandler, SetStateAction } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { RiCheckboxBlankCircleLine, RiCheckLine } from "react-icons/ri";

// notify other components of changes in this checkbox
// this Prop type accepts in a state variable of type boolean
// and the function to change the state variable
// and the name of the checkbox
type CheckboxProps = {
   isChecked: boolean;
   setIsChecked: (value: SetStateAction<boolean>) => void;
   name: string;
   children?: React.ReactNode;
   label?: string;
};

export default function SimpleCheckbox({
   isChecked,
   setIsChecked,
   name,
   label,
}: CheckboxProps) {
   const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setIsChecked(e.target.checked);
   };
   return (
      <FormControlLabel
         control={
            <Checkbox
               inputProps={{ "aria-label": "controlled" }}
               checked={isChecked}
               onChange={handleChange}
               name={name}
               icon={<RiCheckboxBlankCircleLine />}
               checkedIcon={<RiCheckLine />}
            />
         }
         label={label}
      />
   );
}
