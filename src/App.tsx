import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";
import RickAndMorty from "./pages/RickAndMorty";
import MainPage from "./pages/MainPage";
import CharacterBirthMachine from "./pages/CharacterBirthMachine";
import {useState} from "react";
import {initialCharacters} from "./assets/initialCharacters.ts";

export type Character = {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    type: string,
    gender: string,

}

export default function App(): JSX.Element {

    const [characters, setCharacters] = useState<Character[]>(initialCharacters)


    return (
        <>
            <div className="link">
                <Link to="/">Get back home.</Link>
                <br/>
                <Link to="/greeting">Get a nice and warm greeting if you feel low.</Link>
                <br/>
                <Link to="/rickandmorty">Cut right to the chase and search nerdy cartoon characters!</Link>
                <br/>
                <Link to="/characterbirthmachine">Feeling creative? Look no further!</Link>

            </div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/greeting" element={<Greeting/>}/>
                <Route path="/rickandmorty" element={<RickAndMorty characters={characters} setCharacters={setCharacters}/>}/>
                <Route path="/characterbirthmachine" element={<CharacterBirthMachine  characters={characters} setCharacters={setCharacters}/>}/>
            </Routes>
        </>
    )
}


