import { json } from "body-parser";
import express, { Router } from "express"
import {getAllTasks, createTask, getTask, deleteTask, updateTask} from '../controllers/tasks'
const router = Router();
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


export default router