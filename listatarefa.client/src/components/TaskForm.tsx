import React, { useState } from 'react';
import { Task } from '../types/taskTypes';
import '../css/TaskForm.css';

interface TaskFormProps {
    onSave: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSave }) => {
    const [task, setTask] = useState<Partial<Task>>({});
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validação dos campos
        if (!task.title || !task.dueDate) {
            setError('Os campos "Tarefa" e "Data" precisam ser preenchidos.');
            return;
        }

        if (task.title && task.dueDate) {
            const taskToSave = { ...task, priority: task.priority || 'baixo' } as Task;
            onSave(taskToSave);
            setError(null); // Limpar mensagem de erro após salvar com sucesso

            // Limpar os campos do formulário
            setTask({}); // Ou você pode usar setTask({ title: '', dueDate: '', priority: 'baixo' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="task-form">
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
            </div>
            <div>
                <div className="form-group">{error && <p className="error-message">{error}</p>}</div>
            </div>
        </form>
    );
};



export default TaskForm;
