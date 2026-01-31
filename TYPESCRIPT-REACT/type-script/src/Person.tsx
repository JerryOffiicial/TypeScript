import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    UnitedStates = "United States",
}

export const User = (props: Props) => {
    //1
    const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
    //2
    const [personBio, setPersonBio] = useState<string | null>("");

    //1
    const toggleInfo = () => {
        setIsShowInfo((prev) => !prev)
    }

    //2
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    // }

    // 3
    // const { users, addUser, updateUser } = useContext(UserContext)

    return (
        <div>
            {/* 1 */}
            {isShowInfo && (
                <>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>This person {props.isMarried ? "is married" : "is single"}</p>
                    <p>Country of Origin: {props.country}</p>
                </>
            )}

            <button onClick={toggleInfo}>Toggle Info</button>


            {/* 2 */}
            <p>{props.name}'s Bio : {!personBio ? "No Bio Available" : personBio}</p>
            <input onChange={handleChange} />
        </div>
    )
}