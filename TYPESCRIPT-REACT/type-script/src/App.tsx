import React from 'react'
import { Countries, User } from './Person'
import { UserProvider } from './UserContextProvider'


const name: string = "Jerry"
const age: number = 32
const isMarried: boolean = false

const ages: number[] = [1, 2, 3, 4, 5]
const person: any = 3;

console.log(name, age, isMarried, ages, person)

const App = () => {

  const fetchUser = () => ({
    name: "Jerry", age: 22, isMarried: false
  })
  const userFetched = fetchUser();

  return (
    <UserProvider>
      <User name={userFetched.name} age={userFetched.age} isMarried={userFetched.isMarried} country={Countries.India} />
      <User name={"Suda"} age={22} isMarried={true} country={Countries.UnitedStates} />
    </UserProvider>
  )
}

export default App