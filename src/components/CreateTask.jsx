import { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";

const CreateTask = ({addNewTask, darkTheme}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim().length > 0 && /[a-zA-Z0-9]/.test(title)) {
            addNewTask(title);
            setTitle('');
        } else {
            alert('Task title cannot be empty or contain only symbols');
        }
    }

    return (
        <form>
        <div
          className={` ${
            darkTheme ? "bg-gray-800" : "bg-white"
          } w-full  flex space-x-2 items-center  rounded-lg px-4`}
        >
          <CiCirclePlus size={28} className="px-0 text-gray-500" />
          <input
            className=" bg-transparent w-full h-fit p-1 py-4 text-lg"
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={(event) => {
                setTitle(event.target.value);
            }}
          />
          <button onClick={handleSubmit} className=" px-4 uppercase text-gray-500" type="submit">
            Add
          </button>
        </div>
      </form>
    )
}

export default CreateTask