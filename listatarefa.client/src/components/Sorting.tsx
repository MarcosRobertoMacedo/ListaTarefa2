import React from 'react';
import '../css/Sorting.css';

interface SortingProps {
    sortBy: string;
    onSortChange: (sortBy: string) => void;
}

const Sorting: React.FC<SortingProps> = ({ sortBy, onSortChange }) => {
    return (
        <div className="sorting-container">
            <button
                onClick={() => onSortChange('dueDate')}
                className={`sorting-button ${sortBy === 'dueDate' ? 'active' : ''}`} // Adiciona classe ativa
            >
                Classificar por data de vencimento
            </button>
            <button
                onClick={() => onSortChange('priority')}
                className={`sorting-button ${sortBy === 'priority' ? 'active' : ''}`} // Adiciona classe ativa
            >
                Classificar por prioridade
            </button>
        </div>
    );
};

export default Sorting;
