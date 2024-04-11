import mongoose, { mongo } from "mongoose";

const TasksSchema = new mongoose.Schema({
    to : {
        type: String,
        required: true
    },
    tasks: {
        type: Array,
        required: true,
        default: []
    }
}, {timestamps: true});

const Tasks = mongoose.models.Tasks! || mongoose.model("Tasks", TasksSchema);

export default Tasks;