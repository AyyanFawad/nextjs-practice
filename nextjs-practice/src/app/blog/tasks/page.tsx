import ToDoData from "../../data/placeholderData";
import ToDoTask from "@/app/ui/ToDoTask";

export default function Page() {
  return (
    <>
      <h1>ToDo Tasks</h1>
      {ToDoData.map((task) => (
        <ToDoTask key={task.id} {...task} />
      ))}
      {/* <div>This is the home page</div> */}
    </>
  );
}
