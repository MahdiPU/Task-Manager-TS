"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, "name can not be more than 20 characters"],
    },
    completed: { type: Boolean, default: false },
});
exports.default = TaskSchema;
