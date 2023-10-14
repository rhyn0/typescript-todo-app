import TodoList from "../components/TodoList";
export default function Home() {
   return (
      <main className="flex flex-col">
         <div className="items-center justify-center flex flex-col w-full h-screen">
            <h1>Todo Lists</h1>
            <div className="w-1/2 h-1/2 bg-slate-500 align-middle">
               <TodoList className="bg-slate-600 align-middle" />
            </div>
         </div>
      </main>
   );
}
