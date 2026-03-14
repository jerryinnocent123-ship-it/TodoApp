import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus } from "lucide-react";
import { Trash } from "lucide-react";
import { CheckCircle } from "lucide-react";
import "./styles/style.css"


function App() {
  const iconSize =16
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    isComplete: false,
  });

  const [taskList, setTaskList] = useState([]);

  function handleChange(event) {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function add(task) {
    const newTask = { ...task, id: uuidv4() };
    setTaskList((previous) => [...previous, newTask]);
    setFormData({ title: "", desc: "" });
  }

  function deleteTask(id) {
    const newList = taskList.filter((t) => t.id !== id);
    setTaskList(newList);
  }


  // function task complete
  function complete(id) {
      setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isComplete: true } : task
      )
    );

 
  }
  const completedTasks = taskList.filter((task) => task.isComplete);


  // function delete tesk complete
 function deleteTaskComplete(id) {
  setTaskList(taskList.filter((task) => task.id !== id));
}
  return (
    <>
    <div className="todo-container">
    <h1 className="title">Welcome to Todo Task </h1>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Enter task"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          type="text"
          name="desc"
          placeholder="Enter task description"
          onChange={handleChange}
          value={formData.desc}
        />
        <button type="button" onClick={() => add(formData)}>
          <Plus color="green" size={iconSize} /> Ajouter
        </button>
      </form>

      <div>
        <h2>To do</h2>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              <p>{task.title}</p>
              <p>{task.desc}</p>

              <button onClick={() => deleteTask(task.id)} className="delete">
                <Trash color="red" size={iconSize} />
                Delete
              </button>
              {/* Update button sa poul ka deklanche fonksyon konplete a */}
                <button onClick={() => complete(task.id)} className="complete">
                <CheckCircle color="green" size={iconSize} /> Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr />

      <div>
        <h2>Completed</h2>
          <ul>
          {completedTasks.map((task) => (
            <li key={task.id}>
              <p>{task.title}</p>
              <p>{task.desc}</p>
              {/* mwen ajoute btn delete la  */}
               <button onClick={() => deleteTaskComplete(task.id)} className="delete">
                <Trash color="red" size={iconSize} />
                Delete
              </button>
            </li>
            
          ))}
        </ul>
       
      </div>
      </div>
    </>
  );
}

export default App;
