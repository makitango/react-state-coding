import {Character} from "../../App.tsx";

type Props = {
    character:Character
}

export default function CharacterCard(props: Props): JSX.Element {
    return (
        <div className="card">
            <h2>{props.character.name}</h2>
            <img src={props.character.image} alt={props.character.name}/>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            {props.character.type ? <p>Type: {props.character.type}</p> : null}
            <p>Gender: {props.character.gender}</p>
        </div>)
}