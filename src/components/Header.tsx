import notes from "/notes.png";
import plusImage from "/plus.png";
import doubleTick from "/double-tick.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";
import { useState } from "react";
export default function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(added(text));
    setText("");
  };
  return (
    <div>
      <div>
        <form
          className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
          onSubmit={handleSubmit}
        >
          <img src={notes} className="w-6 h-6" alt="Add todo" />
          <input
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          />
          <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain bg-white`}
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li
            className="flex space-x-1 cursor-pointer"
            onClick={() => dispatch(allCompleted())}
          >
            <img className="w-4 h-4" src={doubleTick} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => dispatch(clearCompleted())}
          >
            Clear completed
          </li>
        </ul>
      </div>
    </div>
  );
}
