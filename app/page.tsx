import TodoList from "../components/TodoList";
export default function Home() {
   return (
      <main className="flex flex-col">
         <div className="items-center align-top my-0 top-0 justify-center flex flex-col w-full h-screen">
            <div>
               <h1>Todo Lists</h1>
            </div>
            <div className="w-1/2 h-1/2 bg-slate-500 align-middle">
               <TodoList className="bg-slate-600 align-top" />
            </div>
         </div>
      </main>
   );
}
