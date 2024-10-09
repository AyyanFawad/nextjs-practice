import ToDoData from "../../../../../data/placeholderData";
import { todoItem } from "../../../../../data/tododefinition";
import ToDoTask from "../../../ui/ToDoTask";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

// // export default function ToDo() {
// export default function page({ params }: { params: { id: number } }) {
//   // export default function ToDO(){
//   // const router = useRouter();
//   const todo = ToDoData.find((todo) => todo.id === params.id);
//   return (
//     <>
//       <h1>ToDo Item ID {todo?.id}</h1>
//       <div>ToDo Text {todo?.text}</div>
//       {/* <ToDoTask {...todo} /> */}
//     </>
//   );
// }

//working somewhat
// export default function page() {
//   const todo = ToDoData.find((todo) => todo.id === 1);
//   return (
//     <>
//       <div>Todo Item</div>
//       <ToDoTask {...todo} />
//     </>
//   );
// }

export default function Page({ params }: { params: { id: string } }) {
  const todo = ToDoData.find((todo) => todo.id === params.id);
  return (
    <>
      <div>Todo Item</div>
      <ToDoTask {...todo} />
    </>
  );
}
