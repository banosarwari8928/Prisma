// import { prisma } from "@/databaseConnection/database";
// type Todo={
//   id:number,
//   task:string,
//   completed:boolean,
//   created_at:Date
// }

// export default async function Home() {
//  const data: Todo[]= await prisma.tableName.findFirst();
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       {data.map(todo=>(<div key={todo.id} className="bg-linear-60 from-gray-200 to-gray-600 p-3 rounded shadow-xs items-center mx-auto my-4">
//         <h1>{todo.task}</h1>
//       </div>))}
//     </div>
//   );
// }
import { prisma } from "@/databaseConnection/database"; 

// type Todo = {
//   id: number;
//   task: string;
//   completed: boolean;
//   created_at: Date;
// };

// export default async function Home() {
//   const data: Todo[] = await prisma.todo.findFirst();

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <div>
//         {data.map(todo => (
//           <div
//             key={todo.id}
//             className="bg-gradient-to-r from-gray-200 to-gray-600 p-3 rounded shadow-sm mx-auto my-4"
//           >
//             <h1>{todo.task}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { prisma } from '@/src/databaseConnection/database'
type Todo = {
  id: number;
  task: string;
  completed: boolean;
  created_at: Date;
};
export default async function Home() {
  const data:Todo[] = await prisma.todo.findMany()

  return (
    <div>
      {data.map(Todo => (
        <p key={Todo.id}>{Todo.task}</p>
      ))}
    </div>
  )
}

