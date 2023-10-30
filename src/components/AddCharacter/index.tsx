// Schritt 2 : Erstelle  eine neue Komponente um einen neuen Character anzulegen.
// Schritt 3 : Erstelle eine Form und für die wichtugsten Attribute eines Characters, ein Inputfield und speichere die werte entsprechend in einem State ab.
// Schritt 4 : Fügt einen Button zu der Form hinzu, um die eingegeben Werte als neuen Character zu speichern. Nutze dafür die 'onSubmit' Funktion und stelle sicher, dass über eine Callbackfunktion der neue Character in die Liste mit allen Characteren, in der App.tsx, hinzugefügt wird.

import React, {useState} from "react";

type CharacterProps = {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    type: string,
    gender: string,

    }


export default function AddCharacter(props:CharacterProps): JSX.Element {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const newCharacter:CharacterProps = {
            id: Math.random(),
            name: name,
            image: image,
            status: status,
            species: species,
            type: type,
            gender: gender,
        }








        const newCharacters= characters.map(x => x)
        newCharacters.push(newCharacter)

        props.setCharacters(newCharacters);
        event.preventDefault();
    };

    return <form onSubmit={handleSubmit}>
        <h1>Add a new Character</h1>

        <label htmlFor="name">Name
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                required={true}
                onChange={event => {
                    setName(event.target.value)
                }}
            />
        </label>
        <br/>
        <label htmlFor="image">Image
            <input
                type="text"
                id="image"
                name="image"
                placeholder="Image"
                value={image}
                required={true}
                onChange={event => {
                    setImage(event.target.value)
                }
                }
            />
        </label>
        <br/>
        <label htmlFor="status">Status
            <input
                type="text"
                id="status"
                name="status"
                placeholder="Status"
                value={status}
                required={true}
                onChange={event => {
                    setStatus(event.target.value)
                }
                }
            />
        </label>
        <br/>
        <label htmlFor="species">Species
            <input
                type="text"
                id="species"
                name="species"
                placeholder="Species"
                value={species}
                required={true}
                onChange={event => {
                    setSpecies(event.target.value)

                }
                }
            />
        </label>
        <br/>
        <label htmlFor="type">Type
            <input
                type="text"
                id="type"
                name="type"
                placeholder="Type"
                value={type}
                required={true}
                onChange={event => {
                    setType(event.target.value)
                }
                }
            />
        </label>
        <br/>
        <label htmlFor="gender">Gender
            <input
                type="text"
                id="gender"
                name="gender"
                placeholder="Gender"
                value={gender}
                required={true}
                onChange={event => {
                    setGender(event.target.value)
                }
                }
            />
        </label>

        <button>Submit</button>
    </form>
}






