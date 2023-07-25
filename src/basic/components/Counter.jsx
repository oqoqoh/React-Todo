import React, { useState } from 'react';

export default function Counter({ onClick, totalCount }) {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <span className="number">
                {count}
                <span className="total">/{totalCount}</span>
            </span>

            <button
                className="btn"
                onClick={() => {
                    //setCount(count + 1);
                    setCount((prev) => prev + 1);
                    onClick();
                }}>
                add
            </button>
        </div>
    );
}
