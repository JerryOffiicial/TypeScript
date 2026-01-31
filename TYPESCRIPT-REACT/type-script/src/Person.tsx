import { useState } from "react";

export interface Person {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Person) => {

    const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
    const [personBio, setPersonBio] = useState<string | null>("");

    const toggleInfo = () => {
        setIsShowInfo((prev) => !prev)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // }
    
    return (
        <div>
            {isShowInfo && (
                <>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>This person {props.isMarried ? "is married" : "is single"}</p>
                </>
            )}

            <button onClick={toggleInfo}>Toggle Info</button>


            <p>{props.name}'s Bio : {!personBio ? "No Bio Available" : personBio}</p>
            <input onChange={handleChange} />
        </div>
    )
}