const TaskList = require("../Model/TaskModel");
// post
const createTask = async (req, res) => {
    try {
        const { task } = req.body;



        if (!task) {
            return res.json({ message: "Task title is required" });
        }

        const taskObj = new TaskList({ taskTitle: task });

        await taskObj.save();

        res.json({
            message: "Created successfully",
            taskObj,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error occurred while creating task",
        });
    }
};
// get
const getTask = async (req, res) => {
    try {
        const taskObj = await TaskList.find();

        res.json(taskObj);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error occurred while creating task",
        });
    }
};

// delet
async function deleteTask(req, res) {
    const { id } = req.params;

    try {
        const newTask = await TaskList.findByIdAndDelete(
            { _id: id },
            { new: true }
        );
        res.status(200).json({
            newTask,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: ("an error"),
        });
    }
}

// update
async function updateTask(req, res) {
    const { id } = req.params;

    try {
        const newTask = await TaskList.findByIdAndUpdate(
            { _id: id },
            { new: true }
        );
        res.status(200).json({
            newTask,
        });
    } catch (error) {
        console.log(errmsg);
        res.status(500).json({
            message: ("an error"),
        });
    }
}
module.exports = {
    createTask,
    getTask,
    deleteTask,
    updateTask,
}