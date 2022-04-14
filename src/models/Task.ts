import { Schema } from "mongoose";

export interface ITask{
  name: string;
  completed: boolean;
}

export const TaskSchema = new Schema<ITask>({
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, "name can not be more than 20 characters"],
    },
    completed: { type: Boolean, default: false },
  });

