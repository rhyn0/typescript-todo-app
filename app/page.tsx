import TodoList from "../components/TodoList";
export default function Home() {
   return (
      <main className="flex flex-col items-center justify-center my-10">
         <h1 className="uppercase text-2xl">Todo Lists</h1>
         <div className="w-1/2 h-full bg-slate-500 align-middle">
            <TodoList className="bg-slate-600 align-top" />
         </div>
      </main>
   );
}
