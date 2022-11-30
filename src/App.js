import "./App.css";
import { useState } from "react";

import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // tasks(ToDo list) State

  const [toDo, setToDo] = useState([]);

  // temp State
  const [newtask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // add task
  const addTask = () => {
    if (newtask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, "title": newtask, "status": false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // mark task as done
  const markAsDone = (id) => {
    let newtaskStatus = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newtaskStatus);
  };

  //cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  //change task details for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // update task
  const updateTask = () => {
    let filteredRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filteredRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <>
      <div className="container App">
        <h1>Things To Do</h1>

        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          // add new tasks
          <AddTaskForm
            newtask={newtask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        {/* display things to do */}
        {toDo && toDo.length > 0 ? "" : "You've got no tasks..."}
        <ToDo
          toDo={toDo}
          markAsDone={markAsDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default App;
