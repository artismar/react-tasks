import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, descripcion);
    setTitle('')
    setDescripcion('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h2 className="text-xl font-bold text-white mb-3">Crea tu tarea</h2>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={descripcion}
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button className="bg-indigo-500 hover:bg-indigo-400 px-3 py-1 text-white">Save</button>
    </form>
    </div>
  );
}

export default TaskForm;
