import React, { useState } from 'react';

export default function AppForm() {
    const [form, setForm] = useState({ userName: '', userEmail: '' });

    const handleSubmit = (e) => {
        //리프레시를 원하지 않는다면!
        e.prevenDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target);
        //객체의 key값이 동적으로 할당될때는 [ ] 형식으로
        //[name]이 아닌 name으로 작성 : {name: "oh", userEmail: "", userName: ""} 이렇게 들어감
        setForm({ ...form, name: value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">이름 :</label>
            <input type="text" id="userName" name="userName" value={form.userName} onChange={handleChange} />
            <label htmlFor="userEmail">이메일 :</label>
            <input type="email" id="userEmail" name="userEmail" value={form.userEmail} onChange={handleChange} />
            <button>submit</button>
        </form>
    );
}
