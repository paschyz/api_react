// routes.ts
import express, { Request, Response } from 'express';
import { TaskModel } from '../models/taskModel';
import { error } from 'console';
import *  as TaskController from "../controllers/taskController";
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    TaskController.getTasks(req,res);
});

router.post('/', async (req: Request, res: Response) => {
    const name=  req.body.name;
    TaskController.createTask(req, res, name);
})

router.get('/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id; 
    await TaskController.getTaskById(req, res, taskId);
});

router.put('/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id; 
    await TaskController.updateTaskById(req, res, taskId);
});

router.put('/check/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id; 
    await TaskController.checkTaskById(req, res, taskId);
});


router.delete('/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id;
    await TaskController.deleteTaskById(req, res, taskId);
});

export { router };
