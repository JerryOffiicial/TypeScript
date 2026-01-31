import { useState } from "react"
import Input from "./Input"

const App = () => {
  const [first, setfirst] = useState<number>(0)
  const [input, setInput] = useState<number>(0)
  const increament = (inc: number) => {
    setfirst((curr) => curr + inc)
    setInput(0);
  }
  return (
    <div>
      <h1>{first}</h1>
      <Input input={input} setInput={setInput}/>
      <button onClick={() => increament(input)}>Add</button>
    </div>
  )
}

export default App