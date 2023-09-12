import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const {tasks} = useContext(TaskContext)

  if (tasks.length < 1) {
    return <h2 className="text-4xl my-10 font-bold text-center text-white">No hay tareas</h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
