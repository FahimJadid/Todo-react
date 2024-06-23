import TaskListItem from "./TaskListItem";

const ShowTaskList = ({ tasks, editTask, deleteTask, taskCompleted }) => {
    return (
        <>
            {tasks.length > 0 ? (
                <ul className="">
                    {tasks.map((task) => (
                        <TaskListItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} taskCompleted={taskCompleted} />
                    ))}
                </ul>
            ) : (
                <div className="w-full h-[80%] flex items-center justify-center overflow-hidden">
                    <p className="text-gray-500 text-center z-10">Empty task</p>
                </div>
            )}
        </>
    );
};

export default ShowTaskList;