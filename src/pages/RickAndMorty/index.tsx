import {initialCharacters} from "../../assets/initialCharacters.ts";
import CharacterCard from "../../components/CharacterCard";
import {useState} from "react";

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

export default function RickAndMorty(): JSX.Element {

    const [characters, setCharacters] = useState(initialCharacters)

    return <div>
        <h1>Search Rick and Morty Characters</h1>
        <div className="searchBar">
            <input placeholder="Insanely big search box"
                   onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                       const searchValue: string = event.target.value
                       const filteredCharacters = initialCharacters.filter((character: characterProps) => {
                           return character.name.toLowerCase().includes(searchValue.toLowerCase())
                       })
                       setCharacters(filteredCharacters)
                   }}/>
        </div>
        <div className="container">
            {characters.map((character: characterProps) => {
                return <CharacterCard key={character.id} character={character}/>
            })}
        </div>
    </div>
}