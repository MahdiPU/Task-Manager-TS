"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getAllTasks = void 0;
const Task_1 = require("../models/Task");
const Task_2 = require("../models/Task");
const mongoose_1 = require("mongoose");
const getAllTasks = async (req, res, next) => {
    try {
        const Model = (0, mongoose_1.model)('tasks', Task_1.TaskSchema);
        const tasks = await Model.find({});
        res.status(200).json({ tasks });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.getAllTasks = getAllTasks;
const createTask = async (req, res, next) => {
    try {
        const Model = (0, mongoose_1.model)('tasks', Task_1.TaskSchema);
        const task = await new Task_2.Task(req.body.name, req.body.completed);
        Model.create(task);
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.createTask = createTask;
