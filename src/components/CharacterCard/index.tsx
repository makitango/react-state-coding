type characterProps = {
    character: {
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
}

export default function CharacterCard(props: characterProps): JSX.Element {
    return (
        <div className="card">
            <h2>{props.character.name}</h2>
            <img src={props.character.image} alt={props.character.name}/>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            {props.character.type ? <p>Type: {props.character.type}</p> : null}
            <p>Gender: {props.character.gender}</p>
            <p>Origin: {props.character.origin.name}</p>
            <p>Location: {props.character.location.name}</p>
        </div>)
}