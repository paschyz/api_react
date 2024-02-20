import { TaskModel } from "../models/taskModel";
import { ITask } from "../models/taskModel";

function createFilter(id:string){
    const filter = {
        taskId: parseInt(id, 10),
      }
    return filter
}

function isValidTaskName(name: any): boolean {
    return typeof name === 'string' && name.trim() !== '' && name.length <= 50;
}

function validateTaskName(name: string): string {
    if (!isValidTaskName(name)) {
        throw new Error('Invalid task name. Name must be a non-empty string with maximum length of 50 characters.');
    }
    return name.trim();
}

function isInteger(value: any): boolean {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function validateId(id: string): number {
    const parsedId = parseInt(id, 10);
    if (!isInteger(parsedId)) {
        throw new Error('Invalid ID. ID must be an integer.');
    }
    return parsedId;
}

export class TaskService {
    async getAllTasks(): Promise<ITask[]> {
        return await TaskModel.find();
    }

    async createTask(name: string): Promise<ITask> {
        const validatedName = validateTaskName(name);
        const task = await TaskModel.create({ name: validatedName, isDone: false });
        return task;
    }

    async getTaskById(id: string): Promise<ITask | null> {
        const task = await TaskModel.findOne(createFilter(id));
        return task;
    }

    async updateTaskById(id: string){
        const task = await TaskModel.updateOne(createFilter(id), { $set: { name: "changed" }});
  
        return task;
    }

    async toggleTaskStatus(id: string) {
        let taskState = await TaskModel.findOne(createFilter(id),"isDone");
        const task = await TaskModel.updateOne(createFilter(id), { $set: { isDone: !taskState?.isDone }});
  
        return task;
      
    }

    async deleteTaskById(id: string): Promise<void> {
        const tasks = await TaskModel.deleteOne(createFilter(id));
    }
}
