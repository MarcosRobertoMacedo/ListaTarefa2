import React from 'react';
import '../css/Filters.css';

interface FiltersProps {
    filter: string;
    onFilterChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filter, onFilterChange }) => {
    return (
        <div className="filters-container">
            <button
                onClick={() => onFilterChange('all')}
                className={`filter-button ${filter === 'all' ? 'active' : ''}`} 
            >
                Todos
            </button>
            <button
                onClick={() => onFilterChange('completed')}
                className={`filter-button ${filter === 'completed' ? 'active' : ''}`} 
            >
                Completo
            </button>
            <button
                onClick={() => onFilterChange('incomplete')}
                className={`filter-button ${filter === 'incomplete' ? 'active' : ''}`}
            >
                Incompleto
            </button>
        </div>
    );
};

export default Filters;
