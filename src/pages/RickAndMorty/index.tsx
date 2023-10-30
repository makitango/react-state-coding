import {initialCharacters} from "../../assets/initialCharacters.ts";
import CharacterCard from "../../components/CharacterCard";
import React from "react";
import {Character} from "../../App.tsx";

type Props = {
    characters: Character[],
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>
}

export default function RickAndMorty(props:Props): JSX.Element {


    return <div>
        <h1>Search Rick and Morty Characters</h1>
        <div className="searchBar">
            <input placeholder="Insanely big search box"
                   onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                       const searchValue: string = event.target.value
                       const filteredCharacters = initialCharacters.filter((character: Character) => {
                           return character.name.toLowerCase().includes(searchValue.toLowerCase())
                       })
                       props.setCharacters(filteredCharacters)
                   }}/>
        </div>
        <div className="container">
            {props.characters.map((character: Character) => {
                return <CharacterCard key={character.id} character={character}/>
            })}
        </div>
    </div>
}