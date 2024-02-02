import { TaskModel } from "../models/taskModel";
import mongoose from "mongoose";
import  { Request, Response } from "express";

export const getTasks = async (req :Request, res:Response )=> {
    try {
        const tasks = await TaskModel.find();
    
        res.json(tasks);
      } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Internal Server Error');
      }
}

export const createTask = async (req: Request, res:Response, name:String) => {
    try{
        const task = [{name: name,
    isDone:false}];
        const taskResponse = await TaskModel.create(task);
        res.json(taskResponse);
    } catch (error) {
        console.error('Error creating tasks:', error);
        res.status(500).send('Internal Server Error');
      }
}