"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = exports.Task = void 0;
const mongoose_1 = require("mongoose");
class Task {
    constructor(name, completed) {
        this.name = name;
        this.completed = completed;
    }
}
exports.Task = Task;
exports.TaskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, "name can not be more than 20 characters"],
    },
    completed: { type: Boolean, default: false },
});
