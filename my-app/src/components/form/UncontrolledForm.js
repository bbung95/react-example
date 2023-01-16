import React, { useRef } from "react";

function UncontrolledForm() {
    const userRef = useRef();

    const handlerChange = (e) => {
        console.log(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(userRef);
        console.log(userRef.current.value);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <label>닉네임 :</label>
            <input type="text" name="nickname" onChange={handlerChange} ref={userRef} />
            <br></br>
            <label>패스워드 :</label>
            <input type="text" name="password" onChange={handlerChange} ref={userRef} />
            <button>제출</button>
        </form>
    );
}

export default UncontrolledForm;
