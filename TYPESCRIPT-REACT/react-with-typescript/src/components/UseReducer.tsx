import React, { useReducer } from 'react'


interface State {
    count: number;
}

type Action = | { type: "increase" } | { type: "decrease" }

const initialState: State = { count: 0 }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increase":
            return { count: state.count + 1 }
        case "decrease":
            return { count: state.count - 1 }
        default:
            return state;
    }
}


const UseReducer: React.FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState)



    const increase = () => {
        dispatch({ type: "increase" })
    }

    const decrease = () => {
        dispatch({ type: "decrease" })
    }
    return (

        <div style={{
            width: "300px",
            height: "100px",
            backgroundColor: "blue",
            color: "white",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <p>{state.count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

        </div>
    )
}

export default UseReducer