"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = require("../controllers/tasks");
const router = (0, express_1.Router)();
router.get('/', tasks_1.getAllTasks);
router.post('/postman', tasks_1.createTask);
exports.default = router;
