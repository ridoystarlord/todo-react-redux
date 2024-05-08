import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

export default function Footer() {
  const filter = useSelector((state: any) => state.filter);
  const todos = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();
  const leftTask = todos.filter((todo: any) => !todo.completed);
  const getFormattedText = (task: any) => {
    if (task.length == 0) {
      return `No task left`;
    } else if (task.length == 1) {
      return `1 task left`;
    } else {
      return `${task.length} tasks left`;
    }
  };
  const handleColorChange = (color: string) => {
    const find = filter.color.find((c: any) => c === color);
    if (find) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };
  return (
    <div>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{getFormattedText(leftTask)}</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            className={`cursor-pointer ${
              filter.status === "All" && "font-bold"
            }`}
            onClick={() => dispatch(statusChanged("All"))}
          >
            All
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              filter.status === "Incomplete" && "font-bold"
            }`}
            onClick={() => dispatch(statusChanged("Incomplete"))}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              filter.status === "Complete" && "font-bold"
            }`}
            onClick={() => dispatch(statusChanged("Complete"))}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              filter?.color?.includes("green") && "bg-green-500"
            }`}
            onClick={() => handleColorChange("green")}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              filter?.color?.includes("red") && "bg-red-500"
            }`}
            onClick={() => handleColorChange("red")}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              filter?.color?.includes("yellow") && "bg-yellow-500"
            }`}
            onClick={() => handleColorChange("yellow")}
          ></li>
        </ul>
      </div>
    </div>
  );
}
