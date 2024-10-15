import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Filters from './components/Filters';
import Sorting from './components/Sorting';
import { Task } from './types/taskTypes';
import './css/TaskListPage.css';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('dueDate');

    useEffect(() => {
        const fetchTasks = async () => {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            setTasks(storedTasks);
        };
        fetchTasks();
    }, []);

    const handleSaveTask = (task: Task) => {
        const newTasks = [...tasks, { ...task, id: Date.now(), completed: false }];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const handleToggleComplete = (id: number) => {
        const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleDeleteTask = (id: number) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    };

    const filteredTasks = tasks.filter(task =>
        filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
    );

    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sortBy === 'dueDate') {
            return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        } else if (sortBy === 'priority') {
            const prioridadeMap: { [key: string]: number } = {
                alto: 1,
                medio: 2,
                baixo: 3,
            };

            return prioridadeMap[a.priority] - prioridadeMap[b.priority];
        }
        return 0; // Caso o `sortBy` não corresponda a nenhum dos casos
    });

    return (
        <div className="app-container"> 
            <h1>Lista de Tarefa</h1>
            <TaskForm onSave={handleSaveTask} />
            <Filters filter={filter} onFilterChange={setFilter} />
            <Sorting sortBy={sortBy} onSortChange={setSortBy} />
            <TaskList tasks={sortedTasks} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTask} />
        </div>
    );
};

export default App;
