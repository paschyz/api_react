import express, { Request, Response } from 'express';
import { TaskModel } from '../models/taskModel';
import { error } from 'console';
import { TaskController } from '../controllers/taskController';
import { TaskService } from '../services/taskService';
const router = express.Router();
// Créez une instance de TaskService
const taskService = new TaskService();

// Passez cette instance à TaskController lors de sa création
const taskController = new TaskController(taskService);


router.get('/', async (req: Request, res: Response) => {
    await taskController.getTasks(req, res); // Appel de la méthode sans arguments supplémentaires
});

router.post('/', async (req: Request, res: Response) => {
    await taskController.createTask(req, res); // Appel de la méthode sans arguments supplémentaires
});

router.get('/:id', async (req: Request, res: Response) => {
    await taskController.getTaskById(req, res); // Appel de la méthode sans arguments supplémentaires
});

router.put('/:id', async (req: Request, res: Response) => {
    await taskController.updateTaskById(req, res); // Appel de la méthode sans arguments supplémentaires
});

router.put('/check/:id', async (req: Request, res: Response) => {
    await taskController.checkTaskById(req, res); // Appel de la méthode sans arguments supplémentaires
});

router.delete('/:id', async (req: Request, res: Response) => {
    await taskController.deleteTaskById(req, res); // Appel de la méthode sans arguments supplémentaires
});

export { router };
