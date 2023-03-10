import React, { forwardRef } from "react"

const TextInput = forwardRef(
    ({ type = "input", name, placeholder, value, onChange }, ref) => {
        return (
            <>
                {type === "input" ? (
                    <input
                        type="text"
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        ref={ref}
                    />
                ) : (
                    <textarea
                        name={name}
                        onChange={onChange}
                        placeholder="Leave a comment"
                        defaultValue={value}
                    ></textarea>
                )}
            </>
        )
    },
)

export default TextInput
