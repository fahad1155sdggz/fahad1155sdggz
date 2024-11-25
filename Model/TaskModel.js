const { mongoose } = require("mongoose");

const { Schema } = (mongoose);

const taskModelSchema = new Schema(
    {
        taskTitle: { type: String },
    }
);

const TaskList = mongoose.model("TaskList", taskModelSchema);
module.exports = TaskList;