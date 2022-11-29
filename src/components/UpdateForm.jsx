const UpdateForm = ({updateData, updateTask, cancelUpdate, changeTask}) => {
    return(
        <>
            {/* update tasks */}
            <div className="row">
                <div className="col">
                    <input
                    id="updateImput"
                        onChange={(e) => changeTask(e)}
                        value={updateData && updateData.title}
                        className="form-control form-control-lg"
                    />
                </div>
                <div className="col-auto">
                    <button
                    id="update"
                        onClick={updateTask}
                        className="btn btn-lg btn-success mr-20"
                    >
                        Update
                    </button>
                    <button
                    id="cancel"
                        onClick={cancelUpdate}
                        className="btn btn-lg btn-warning mr-20"
                    >
                        cancel
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpdateForm;