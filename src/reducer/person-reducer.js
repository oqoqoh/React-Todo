export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated': {
            const { prinputName, inputNewName } = action;
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
    }
}
