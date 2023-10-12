"use client";
import { useState, SetStateAction } from "react";
import SimpleCheckbox from "../components/Checkbox";
export default function Home() {
   const [isChecked, setIsChecked] = useState(false);
   console.log("🚀 ~ file: page.tsx:7 ~ Home ~ isChecked:", isChecked);

   const handleChange = (value: SetStateAction<boolean>) => {
      setIsChecked(value);
   };
   return (
      <main className="flex flex-col">
         <div className="items-center justify-center flex flex-col w-full h-screen">
            <div className="w-1/2 h-1/2 bg-slate-500 align-middle">
               <SimpleCheckbox
                  isChecked={isChecked}
                  setIsChecked={handleChange}
                  name={"mine"}
                  label="Simple Checkbox"
               />
               {"\nText"}
            </div>
         </div>
      </main>
   );
}
