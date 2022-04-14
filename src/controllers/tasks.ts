import { RequestHandler } from 'express'
import Model from '../models/Task'
import {ITask} from '../models/Task'
import { Schema} from 'mongoose'
import {createCustomError} from '../errors/custom-error'

export const getAllTasks: RequestHandler = async (req, res, next) => {
    try{
    const tasks = await Model.find({})
    res.status(200).json({ tasks })
    }catch(err: any){
        res.status(500).send(err.message)
    }

  
}
export const createTask: RequestHandler = async (req, res, next) => {
    try{
    const task = new Model<ITask>(req.body)
    await task.save()
    res.status(201).json({ task })
    }catch(err: any){
        res.status(500).send(err.message)
    }
}
export const getTask: RequestHandler = async (req, res, next) => {
    try{
    const { id: taskID } = req.params
    const task = await Model.findOne({ _id: taskID})
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
      }
    res.status(201).json({ task })
    }catch(err: any){
        res.status(500).send(err.message)
    }
}
export const deleteTask: RequestHandler = async (req, res, next) => {
    try{
    const { id: taskID } = req.params
    const task = await Model.findOneAndDelete({ _id: taskID})
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(201).json({ task })
    }catch(err: any){
        res.status(500).send(err.message)
    }
}
export const updateTask: RequestHandler = async (req, res, next) => {
    try{
    const { id: taskID } = req.params

    const task = await Model.findOneAndUpdate({ _id: taskID}, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
      }
    res.status(201).json({ task })
    }catch(err: any){
        res.status(500).send(err.message)
    }
}
