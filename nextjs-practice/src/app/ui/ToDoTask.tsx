// import { todoItem } from "../../../data/tododefinition";
import Link from "next/link";

export default function ToDoTask({ id, text }: { id: string; text: string }) {
  return (
    <div key={id}>
      <Link href={`/blog/tasks/${id}`}>
        <h1>Task Number {id}</h1>
      </Link>
      <div>{text}</div>
    </div>
  );
}
