import React, { useState } from 'react';

export default function AppMentors() {
    const [person, setPerson] = useState(initialPerson);

    const handleUpdate = () => {
        const inputName = prompt('whos name want to change?');
        const inputNewName = prompt('which name?');

        setPerson((prev) => ({
            ...prev,
            mentors: prev.mentors.map((mentor) => {
                if (mentor.name === inputName) {
                    return { ...mentor, name: inputNewName };
                }
                return mentor;
            }),
        }));
    };
    const handleAdd = () => {
        const inputName = prompt('new mentor name');
        const inputTitle = prompt('new mentor title');
        // const mentors = [...person.mentors];
        // mentors.push({ name: inputName, title: inputTitle });

        setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name: inputName, title: inputTitle }],
        }));
    };
    const handleDelete = () => {
        const inputName = prompt('new mentor name');
        //const mentors = [...person.mentors];
        // mentors.map((mentor, idx) => {
        //     if (mentor.name === inputName) {
        //         mentors.splice(idx, 1);
        //     }
        // });

        setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((m) => m.name !== inputName),
        }));
    };
    return (
        <div>
            <h1>
                {person.name}, {person.title}
            </h1>
            <p>{person.name}'s mentors : </p>
            <ul>
                {person.mentors.map((mentor, idx) => (
                    <li key={idx}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}>update name</button>
            <button onClick={handleAdd}>add mentor</button>
            <button onClick={handleDelete}>delete mentor</button>
        </div>
    );
}
const initialPerson = {
    name: 'kyuyoung',
    title: 'front-env dev',
    mentors: [
        {
            name: 'code-lion',
            title: 'senior dev',
        },
        {
            name: 'code-tiger',
            title: 'jr dev',
        },
    ],
};
