export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated': {
            const { inputName, inputNewName } = action;
            //const prev = action.prev;
            //const current = action.current;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (mentor.name === inputName) {
                        return { ...mentor, name: inputNewName };
                    }
                    return mentor;
                }),
            };
        }
        case 'added': {
            const { inputName, inputTitle } = action;

            return {
                ...person,
                mentors: [...person.mentors, { name: inputName, title: inputTitle }],
            };
        }
        case 'deleted': {
            return {
                ...person,
                mentors: person.mentors.filter((m) => m.name !== action.inputName),
            };
        }
        default: {
            throw Error(`unkown error type : ${action.type}`);
        }
    }
}
