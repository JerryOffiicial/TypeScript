import React from 'react'
import { Person } from './Person'


const name: string = "Jerry"
const age: number = 32
const isMarried: boolean = false

const ages: number[] = [1, 2, 3, 4, 5]
const person: any = 3;


const App = () => {

  const fetchUser = () => ({
    name: "Jerry", age: 22, isMarried: false
  })
  const userFetched = fetchUser();
  
  return (
    <>
      <Person name={userFetched.name} age={userFetched.age} isMarried={userFetched.isMarried} />
      <Person name={"Suda"} age={22} isMarried={true} />
    </>
  )
}

export default App