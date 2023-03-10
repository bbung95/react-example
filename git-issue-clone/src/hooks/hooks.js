import React, { useState } from "react"

export const useForm = ({ initialize, onSubmit, refs, validate }) => {
    const [formData, setFormData] = useState(initialize)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (isSubmiting) {
            alert("잠시만 기다려주세요.")
            return
        }

        setIsSubmiting(true)
        const validationResult = validate(formData)
        const errorsKeys = Object.keys(validationResult)

        if (errorsKeys.length > 0) {
            alert(validationResult[errorsKeys[0]])
            refs[errorsKeys[0]].current.focus()
            setIsSubmiting(false)
            return
        }

        // const res = fetchIssueAdd(formData.title, formData.contents)
        // console.log(res)
        onSubmit()
        setIsSubmiting(false)
    }

    return {
        formData,
        handleOnChange,
        handleOnSubmit,
    }
}
