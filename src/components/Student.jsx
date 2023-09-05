import React from 'react';

export default function Student({ name, id, isHere, dispatch }) {
    return (
        <div>
            <span
                onClick={() => {
                    dispatch({ type: 'check-student', payload: { id } });
                }}
                style={{
                    textDecoration: isHere ? 'line-through' : 'none',
                    color: isHere ? 'gray' : 'black',
                }}>
                {name}
            </span>
            <button
                type="button"
                onClick={() => {
                    dispatch({ type: 'delete-student', payload: { id } });
                }}>
                삭제
            </button>
        </div>
    );
}
