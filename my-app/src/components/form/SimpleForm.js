import React, { useState } from "react";

function SimpleForm() {
    const [formInfo, setForminfo] = useState({
        nickname: "",
        password: "",
    });

    const handlerChange = (e) => {
        // const name = e.target.name;
        // const info = { ...formInfo };
        // info[name] = e.target.value;
        // setForminfo(info);

        setForminfo({ ...formInfo, [e.target.name]: e.target.value });
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <label>닉네임 :</label>
            <input type="text" name="nickname" value={formInfo.nickname} onChange={handlerChange} />
            <br></br>
            <label>패스워드 :</label>
            <input type="text" name="password" value={formInfo.password} onChange={handlerChange} />
            <button>제출</button>
        </form>
    );
}

export default SimpleForm;
