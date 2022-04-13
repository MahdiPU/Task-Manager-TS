import { Schema } from "mongoose";

interface Task {
  name: string;
  completed: boolean;
}

const TaskSchema = new Schema<Task>({
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, "name can not be more than 20 characters"],
    },
    completed: { type: Boolean, default: false },
  });

export default TaskSchema