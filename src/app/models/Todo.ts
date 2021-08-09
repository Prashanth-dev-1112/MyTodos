import { TodoResponse } from './TodoResponse';
export interface Todo extends TodoResponse {
    dueDate: Date;
}