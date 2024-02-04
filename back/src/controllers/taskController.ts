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

        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).send('Name is required and must be string');    
        }

        if (name.length > 50 ){
            return res.status(400).send("The length of the task should not exceed 50 characters");

        }

        const task = [{name: name,
    isDone:false}];
        const taskResponse = await TaskModel.create(task);
        res.json(taskResponse);
    } catch (error) {
        console.error('Error creating tasks:', error);
        res.status(500).send('Internal Server Error');
      }
}

export const getTaskById = async (req :Request, res:Response ,id:string)=> {
    try {
        const filter = {
          taskId: parseInt(id, 10),
        }
        const tasks = await TaskModel.find(filter);
    
        res.json(tasks);
      } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).send('Internal Server Error');
      }
}

export const updateTaskById = async (req :Request, res:Response ,id:string)=> {
  try {
      const filter = {
        taskId: parseInt(id, 10),
      }
      const tasks = await TaskModel.updateOne(filter, { $set: { name: "changed" }});
  
      res.json(tasks);
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      res.status(500).send('Internal Server Error');
    }
}

export const checkTaskById = async (req :Request, res:Response ,id:string)=> {
  try {
      const filter = {
        taskId: parseInt(id, 10),
      }
      let task = await TaskModel.findOne(filter,"isDone");
      const tasks = await TaskModel.updateOne(filter, { $set: { isDone: !task?.isDone }});
  
      res.json(tasks);
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      res.status(500).send('Internal Server Error');
    }
}

export const deleteTaskById = async (req :Request, res:Response ,id:string)=> {
  try {
      const filter = {
        taskId: parseInt(id, 10),
      }
      const tasks = await TaskModel.deleteOne(filter);
  
      res.json(tasks);
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      res.status(500).send('Internal Server Error');
    }
}