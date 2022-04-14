import express, { Router } from "express"
import {getAllTasks, createTask} from '../controllers/tasks'
const router = Router();

router.get('/', getAllTasks)
router.post('/postman', createTask)


export default router