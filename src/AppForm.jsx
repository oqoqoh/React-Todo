import React from 'react';

export default function AppForm() {
    const handleSubmit = (e) => {
        e.prevenDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">이름 :</label>
            <input type="text" id="userName" name="userName" />
            <label htmlFor="userEmail">이메일 :</label>
            <input type="email" id="userEmail" name="userEmail" />
            <button>submit</button>
        </form>
    );
}
