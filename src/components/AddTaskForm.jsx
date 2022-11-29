const AddTaskForm = ({newtask, setNewTask, addTask}) => {
    return(
        <>
            <div className="row">
                <div className="col">
                    <input
                    id="newtsk"
                        value={newtask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="form-control form-control-lg"
                    />
                </div>
                <div className="col-auto">
                    <button id="addTask" onClick={addTask} className="btn btn-lg">
                        Add Task
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddTaskForm;