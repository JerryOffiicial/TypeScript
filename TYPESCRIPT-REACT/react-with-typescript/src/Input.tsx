import React, { type FC } from 'react'

interface InputProps {
    input: number
    setInput: React.Dispatch<React.SetStateAction<number>>;
}

const Input: FC<InputProps> = ({ input, setInput }) => {
    return (
        <input value={input} type="text" onChange={(e) => setInput(Number(e.target.value))} />

    )
}

export default Input