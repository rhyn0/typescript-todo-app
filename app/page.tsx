"use client";
import { useState, SetStateAction } from "react";
import TodoCard from "../components/TodoCard";
export default function Home() {
   const [isChecked, setIsChecked] = useState(false);

   const handleChange = (value: SetStateAction<boolean>) => {
      setIsChecked(value);
   };
   return (
      <main className="flex flex-col">
         <div className="items-center justify-center flex flex-col w-full h-screen">
            <div className="w-1/2 h-1/2 bg-slate-500 align-middle">
               <TodoCard
                  isDone={isChecked}
                  onChange={handleChange}
                  title="Title"
                  description="Description"
                  className="w-1/2 h-1/2 bg-slate-500 align-middle"
               />
               <p>{"\nText"}</p>
            </div>
         </div>
      </main>
   );
}
