import { useState } from 'react'
import { MdDarkMode, MdSunny } from "react-icons/md";
import shortid from 'shortid';
import CreateTask from './components/CreateTask';
import ShowTaskList from './components/ShowTaskList';


function App() {
  const [tasks, setTasks] = useState([]);
  const [taskVisibility, setTaskVisibility] = useState('all');
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const addNewTask = (title) => {
    const newTask = {
      title,
      isCompleted: false,
      createdAt: new Date().toISOString(),
      id: shortid.generate()
    }
    setTasks((tasks) => {
      return [newTask, ...tasks]
    });
  }

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)))
    
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const taskCompleted = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)))
  }

  const clearAllTasks = () => {
    setTasks([])
  }


  return (
    <>
       <div
      className={`hero ${
        darkTheme ? "bg-gray-900" : "bg-gray-100"
      } h-screen md:min-h-[700px]  w-full md:w-2/3 m-auto flex flex-col items-center mt-14 transition-all duration-500`}
    >
      <div
        className={`flex flex-col space-y-6 w-[600px] md:w-[100%] lg:w-[100%] z-10 p-4 ${
          darkTheme ? "text-white" : "text-black"
        }`}
      >
        <div className=" w-full flex items-center justify-between ">
          <h1 className="text-xl md:text-2xl lg:text-4xl uppercase font-bold text-white tracking-widest mb-4">
            {/* Task Manager */}
            Task Manager
          </h1>

          {darkTheme ? (
            <MdSunny
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              size={32}
            />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              size={32}
            />
          )}
        </div>
        <div className=" shadow-md">
          {/* Add Task */}
          <CreateTask addNewTask={addNewTask} darkTheme={darkTheme}/>
        </div>
        <div
          className={`scroll ${
            darkTheme ? "bg-gray-800" : "bg-white"
          } w-full h-[400px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500`}
        >
          <div
            className={`w-full overflow-hidden mb- sticky top-0 ${
              darkTheme ? "bg-gray-800" : "bg-white"
            } flex items-center justify-between text-gray-500 border-b`}
          >
            <p className=" text-gray-500 px-2 py-3">
              Remaining Tasks
            </p>
            <button onClick={clearAllTasks}>Clear all tasks</button>
          </div>

          {/* Show Task List */}
          <ShowTaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} taskCompleted={taskCompleted}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
