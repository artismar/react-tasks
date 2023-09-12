import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// armar componente rapido 'rfce'
// Encender sv 'npm run dev'
// Despegar aplicacion 'npm run build'
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
