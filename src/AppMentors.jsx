import React, { useState } from 'react';

export default function AppMentors() {
    const [person, setPerson] = useState({
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
    });
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
            <button
                onClick={() => {
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
                }}>
                change name
            </button>
        </div>
    );
}
