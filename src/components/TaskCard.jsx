import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="text-gray-500 text-sm">{task.descripcion}</p>
      <button
        className="bg-red-500 hover:bg-red-400 mt-3 px-2 py-1 rounded-md"
        onClick={() => deleteTask(task)}
      >
        Borrar
      </button>
    </div>
  );
}

export default TaskCard;
