import React from 'react'

interface InputProps {
    input: number
    setInput: React.Dispatch<React.SetStateAction<number>>;
}

const Input = ({ input, setInput }: InputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(Number(e.target.value))
    }
    return (
        <input value={input} type="text" onChange={handleChange} />

    )
}

export default Input