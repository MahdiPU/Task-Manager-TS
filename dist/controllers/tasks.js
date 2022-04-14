"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.getTask = exports.createTask = exports.getAllTasks = void 0;
const Task_1 = require("../models/Task");
const mongoose_1 = require("mongoose");
const custom_error_1 = require("../errors/custom-error");
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
        const task = new Model(req.body);
        await task.save();
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.createTask = createTask;
const getTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const Model = (0, mongoose_1.model)('tasks', Task_1.TaskSchema);
        const task = await Model.findOne({ _id: taskID });
        if (!task) {
            return next((0, custom_error_1.createCustomError)(`No task with id : ${taskID}`, 404));
        }
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.getTask = getTask;
const deleteTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const Model = (0, mongoose_1.model)('tasks', Task_1.TaskSchema);
        const task = await Model.findOneAndDelete({ _id: taskID });
        if (!task) {
            return next((0, custom_error_1.createCustomError)(`No task with id : ${taskID}`, 404));
        }
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.deleteTask = deleteTask;
const updateTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const Model = (0, mongoose_1.model)('tasks', Task_1.TaskSchema);
        const task = await Model.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return next((0, custom_error_1.createCustomError)(`No task with id : ${taskID}`, 404));
        }
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};
exports.updateTask = updateTask;
