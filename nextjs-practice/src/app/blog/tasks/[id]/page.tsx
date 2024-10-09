import ToDoData from "../../../data/placeholderData";
// import { todoItem } from "../../../../../data/tododefinition";
import ToDoTask from "../../../ui/ToDoTask";
// import { useRouter } from "next/router";
// import { GetStaticPaths, GetStaticProps } from "next";

export default function Page({ params }: { params: { id: string } }) {
  const todo = ToDoData.find((todo) => todo.id === params.id);

  if (!todo) {
    return <div>Todo item not found</div>;
  }
  return (
    <>
      <div>Todo Item</div>
      <ToDoTask {...todo} />
    </>
  );
}
