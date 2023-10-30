import AddCharacter from "../../components/AddCharacter";

export default function CharacterBirthMachine(): JSX.Element {
    return <div>
        <h1>Character Birth Machine</h1>
        <p>Here you can create your own characters. I know, crazy.</p>
        <img src={"https://media.tenor.com/tvFWFDXRrmMAAAAd/blow-mind-mind-blown.gif"} alt={"mind blown"}/>
       <AddCharacter name="name" gender="gender" id={0} species="species" image="image" status="status" type="type"/>
    </div>
}