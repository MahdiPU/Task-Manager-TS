"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TaskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, "name can not be more than 20 characters"],
    },
    completed: { type: Boolean, default: false },
});
