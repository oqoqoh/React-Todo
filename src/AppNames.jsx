import React, { useReducer, useState } from 'react';
import studentsReducer from './reducer/student-reducer';
import Student from './components/Student';

export default function AppNames() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(studentsReducer, initialStudents);
    return (
        <div>
            <h1>출석부</h1>
            <p>총 인원 : {studentsInfo.students.count}</p>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}></input>
            <button
                type="button"
                onClick={() => {
                    dispatch({ type: 'add-student', payload: { name } });
                }}>
                추가
            </button>
            {studentsInfo.students.map((student) => {
                return <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} />;
            })}
        </div>
    );
}

const initialStudents = {
    count: 0,
    students: [],
};
