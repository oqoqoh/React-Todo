export default function studentsReducer(state, action) {
    switch (action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name: name,
                isHere: false,
            };

            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter((student) => {
                    return student.id !== action.payload.id;
                }),
            };
        case 'check-student':
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere };
                    }
                    return student;
                }),
            };
        default:
            return state;
    }
}
