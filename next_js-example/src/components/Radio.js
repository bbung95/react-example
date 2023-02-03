import React, { forwardRef } from "react";

const Radio = forwardRef(({ id, name, title }, ref) => {
    return <input ref={ref} id={id} name={name} value={title} type={"radio"} />;
});

export default Radio;
