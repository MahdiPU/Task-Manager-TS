import express, { Router } from "express"
import {getAllTasks, createTask, getTask, deleteTask, updateTask} from '../controllers/tasks'
const router = Router();

router.get('/', getAllTasks)
router.post('/postman', createTask)
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)


export default router