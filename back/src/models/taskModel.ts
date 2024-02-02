// models.ts
import { Document, Schema, model } from 'mongoose';

// Define mongoose schema and model
interface ITask extends Document {
    name:string;
    isDone:boolean;
}

const taskSchema = new Schema<ITask>({
    name:String,
    isDone:Boolean,
}, {versionKey:false});


const TaskModel = model<ITask>('tasks', taskSchema);

export { TaskModel };