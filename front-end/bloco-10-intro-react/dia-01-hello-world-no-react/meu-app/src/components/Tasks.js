import React from "react";
import Task from "./Task";


const Tasks = ({ Tasks }) => {
    return (
        <>
            {Tasks.map((task) => (
                <Task task={task} />
            ))}
        </>
    )
};

export default Tasks;
