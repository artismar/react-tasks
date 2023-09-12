import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../Task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(title, descripcion) {
    const newTask = {
      id: tasks.length,
      title,
      descripcion,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((n) => n.id != task.id));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

// export default TaskContext;
