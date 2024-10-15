import React from 'react';
import { Task } from '../types/taskTypes';

interface TaskProps {
    task: Task;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, onToggleComplete, onDelete }) => {
    return (
        <div className="task-item">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
            <p className="task-due-date">Vencimento: {task.dueDate}</p>
            <p className="task-priority">Prioridade: {task.priority}</p>
            <div className="button-container">
                <button
                    onClick={() => onToggleComplete(task.id)}
                    className={`button ${task.completed ? 'button-complete' : 'button-incomplete'}`} // Adiciona a classe correspondente
                >
                    {task.completed ? 'Marcar como Incompleto' : 'Marcar como Completo'}
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="button button-delete" // Classe específica para o botão de deletar
                >
                    Deletar
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
