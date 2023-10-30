import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";
import RickAndMorty from "./pages/RickAndMorty";
import MainPage from "./pages/MainPage";


export default function App(): JSX.Element {

    return (
        <>
            <div className="link">
                <Link to="/">Get back home.</Link>
                <br/>
                <Link to="/greeting">Get a nice and warm greeting if you feel low.</Link>
                <br/>
                <Link to="/rickandmorty">Cut right to the chase and search nerdy cartoon characters!</Link>
            </div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/greeting" element={<Greeting/>}/>
                <Route path="/rickandmorty" element={<RickAndMorty/>}/>
            </Routes>
        </>
    )
}


