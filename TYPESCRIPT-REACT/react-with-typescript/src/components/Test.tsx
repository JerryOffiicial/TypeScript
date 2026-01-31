import { useState } from "react";

type CounterProps = {
    start: number;
    max?: number;
}

const Test = ({ start, max = 10 }: CounterProps) => {
    const [count, setCount] = useState<number>(start);

    const increment = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}> +</button >
        </div >
    )
}

export default Test