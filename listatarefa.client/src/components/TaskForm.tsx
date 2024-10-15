import React, { useState } from 'react';
import { Task } from '../types/taskTypes';
import '../css/TaskForm.css';

interface TaskFormProps {
    onSave: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave }) => {
    const [task, setTask] = useState<Partial<Task>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.title && task.dueDate && task.priority) {
            onSave(task as Task);
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Tarefa"
                    value={task.title || ''}
                    onChange={e => setTask({ ...task, title: e.target.value })}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <input
                    type="date"
                    value={task.dueDate || ''}
                    onChange={e => setTask({ ...task, dueDate: e.target.value })}
                    className="input-field"
                />
            </div>
            <div className="form-group">
                <select
                    value={task.priority || 'baixo'}
                    onChange={e => setTask({ ...task, priority: e.target.value as Task['priority'] })}
                    className="select-field"
                >
                    <option value="baixo">Baixo</option>
                    <option value="medio">Médio</option>
                    <option value="alto">Alta</option>
                </select>
            </div>
            <div className="form-group">
                <button type="submit" className="submit-button">Salvar</button>
            </div>
        </form>
    );
};


export default TaskForm;
