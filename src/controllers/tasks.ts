import { RequestHandler } from 'express'
import {TaskSchema} from '../models/Task'
import {ITask} from '../models/Task'
import {model, Schema} from 'mongoose'

export const getAllTasks: RequestHandler = async (req, res, next) => {
    try{
    const Model = model('tasks', TaskSchema)
    const tasks = await Model.find({})
    res.status(200).json({ tasks })
    }catch(err: any){
        res.status(500).send(err.message)
    }

  
}
export const createTask: RequestHandler = async (req, res, next) => {
    try{
    const Model = model('tasks', TaskSchema)
    const task = new Model<ITask>(req.body)
    await task.save()
    res.status(201).json({ task })
    }catch(err: any){
        res.status(500).send(err.message)
    }
}
