import React, { useState } from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: 'kyuyoung',
        title: 'front-env dev',
        mentor: {
            name: 'code-lion',
            title: 'senior dev',
        },
    });
    return (
        <div>
            <h1>
                {person.name}, {person.title}
            </h1>
            <p>
                {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
            </p>
            <button
                onClick={() => {
                    var newMentor = prompt('who is new mentor?');
                    // setPerson((prev) => ({ ...prev, mentor: { name: newMentor, title: prev.mentor.title } }));

                    setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, name: newMentor } }));
                }}>
                mentor change
            </button>
            <button
                onClick={() => {
                    var newMentorTitle = prompt(`what is new mentor's title?`);

                    setPerson((prev) => ({ ...prev, mentor: { name: prev.mentor.name, title: newMentorTitle } }));
                }}>
                mentor's title change
            </button>
        </div>
    );
}
