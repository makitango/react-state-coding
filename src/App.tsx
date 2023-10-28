import {useState} from 'react'
import './App.css'
import {initialCharacters} from "./assets/initialCharacters.ts";
import CharacterCard from "./components/CharacterCard";

type characterProps = {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    episode: string[],
    url: string,
    created: string
}

export default function App(): JSX.Element {
    const [characters, setCharacters] = useState(initialCharacters)

    return (
        <>
            <h1>Search Rick and Morty Characters</h1>
            <input placeholder="Insanely big search box"
                   onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                       const searchValue: string = event.target.value
                       const filteredCharacters = initialCharacters.filter((character: characterProps) => {
                           return character.name.toLowerCase().includes(searchValue.toLowerCase())
                       })
                       setCharacters(filteredCharacters)
                   }}/>
            <div className="container">
                {characters.map((character: characterProps) => {
                    return <CharacterCard key={character.id} character={character}/>
                })}
            </div>
        </>
    )
}


