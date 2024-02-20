import { Request, Response } from "express";
import { TaskService } from "../services/taskService";
import { ITask} from "../models/taskModel";

export class TaskController {
    private taskService: TaskService;

    constructor(taskService: TaskService) {
        this.taskService = taskService;
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await this.taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            console.error('Error retrieving tasks:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async createTask(req: Request, res: Response) {
      try {
          const name: string = req.body.name;
          const task = await this.taskService.createTask(name);
          res.json(task);
      } catch (error) {
          console.error('Error creating task:', error);
          res.status(500).send('Internal Server Error');
      }
  }

    async getTaskById(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            console.log(id);
            const task = await this.taskService.getTaskById(id);
            res.json(task);
        } catch (error) {
            console.error('Error retrieving task:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async updateTaskById(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const updatedTask = await this.taskService.updateTaskById(id);
            res.json(updatedTask);
        } catch (error) {
            console.error('Error updating task:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async checkTaskById(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            const updatedTask = await this.taskService.toggleTaskStatus(id);
            res.json(updatedTask);
        } catch (error) {
            console.error('Error updating task status:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async deleteTaskById(req: Request, res: Response) {
        try {
            const id: string = req.params.id;
            await this.taskService.deleteTaskById(id);
            res.status(204).send();
        } catch (error) {
            console.error('Error deleting task:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}
