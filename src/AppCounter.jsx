import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

export default function AppCounter() {
    const [totalCount, setTotalCount] = useState(0);
    const handleClick = () => setTotalCount((prev) => prev + 1);
    return (
        <div className="container">
            <h1>
                Total Count :
                <span>
                    {totalCount}
                    {totalCount >= 10 ? '🔥' : '❄️'}
                </span>
            </h1>
            <Counter onClick={handleClick} totalCount={totalCount} />
            <Counter onClick={handleClick} totalCount={totalCount} />
        </div>
    );
}
