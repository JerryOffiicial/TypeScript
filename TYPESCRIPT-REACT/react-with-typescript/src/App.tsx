import { useState } from "react"
import Input from "./Input"
import Test from "./components/Test"
import Button from "./components/Button"
import UseReducer from "./components/UseReducer"

const App = () => {
  const [first, setfirst] = useState<number>(0)
  const [input, setInput] = useState<number>(0)

  type Entry = {
    id: number;
    value: number;
  }

  const [entries, setEntries] = useState<Entry[]>([])

  const increament = (inc: number) => {
    setfirst((curr) => curr + inc)

    setEntries((prev) => [
      ...prev,
      { id: Date.now(), value: inc }
    ])

    setInput(0);


  }

  return (
    <div>
      <hr />
      <h1>{first}</h1>
      <Input input={input} setInput={setInput} />
      <button onClick={() => increament(input)}>Add</button>
      <hr />
      <Test start={first} />

      <hr />
      <ul>
        {entries.map((entry) => {
          return <li key={entry.id}>{entry.value}</li>
        })}
      </ul>
      <hr />

      <Button title={"disabled button"} disabled={false}/> 
      <hr />
      <UseReducer/>
    </div>
  )
}

export default App