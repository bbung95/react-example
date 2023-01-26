import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state);

    const handleOnChangeInput = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const obj = {};
        obj[name] = value;

        const newUser = { ...user, ...obj };

        dispatch({ type: "changeUser", text: newUser });
    };

    return (
        <div>
            <input onChange={handleOnChangeInput} value={user.name} type="text" name="name" />
            <input onChange={handleOnChangeInput} value={user.job} type="text" name="job" />
        </div>
    );
};

export default User;
