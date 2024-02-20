import { Document, Schema, model } from 'mongoose';

interface ITask extends Document {
    name:string;
    isDone:boolean;
}

const taskSchema = new Schema<ITask>({
    name:String,
    isDone:Boolean,
}, {versionKey:false});


const TaskModel = model<ITask>('tasks', taskSchema);

export { TaskModel, ITask };