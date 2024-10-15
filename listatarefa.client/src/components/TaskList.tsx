import React from 'react';
import { Task } from '../types/taskTypes';
import TaskItem from './Task';
import '../css/TaskItem.css';

interface TaskListProps {
    tasks: Task[];
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDelete }) => {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TaskList;
