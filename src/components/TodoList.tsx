import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state: any) => state.todo);
  const filter = useSelector((state: any) => state.filter);
  const handleFilterByStatus = (t: any) => {
    if (filter.status === "Complete") {
      return t.completed;
    } else if (filter.status === "Incomplete") {
      return !t.completed;
    }
    return true;
  };
  const handleFilterByColor = (t: any) => {
    if (filter.color.length > 0) {
      return filter.color.includes(t?.color);
    }
    return true;
  };
  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
          .filter(handleFilterByStatus)
          .filter(handleFilterByColor)
          .map((todo: any) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  );
}
