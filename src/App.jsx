import HelloStateless from './HelloStateless';
import { HelloStateful, Person } from './HelloStateful';
import { people } from './data.js';
import { getImageUrl } from './utils.js';
import Button from './Events.js';
import {Counter, Example, TextInputWithFocusButton} from "./hooks.js";

function App() {
    //FIRST PART
    // return (
    //     <div>
    //         <HelloStateless nome = "Walisson"></HelloStateless>
    //         <HelloStateful nome = "Christian"></HelloStateful>
    //         <HelloStateful nome = "Gabriel"></HelloStateful>
    //     </div>
    // );

    //LISTS AND KEYS
    // const listItems = people.map((person) =>
    //     <li key={person.id}>{person.name} is {person.profession} known for {person.accomplishment}</li>
    // );
    // return <ul>{listItems}</ul>

    // RENDER PROPS
    // return (
    //     <div>
    //         <Person size={100} person={{
    //             name: 'Katsuko Saruhashi',
    //             imageId: 'YfeOqp2'
    //         }} />
    //     </div>
    // )
    // EVENTS
    //
    // return (
    //     <div>
    //         <Button message={"Click Me!"} />
    //     </div>
    // );
    // USE STATE
    // return (
    //     <div>
    //         <Counter />
    //     </div>
    // )
    // USE EFFECT
    // return (
    //     <div>
    //         <Example />
    //     </div>
    // )
    // USE REF
    // return (
    //     <div>
    //         <TextInputWithFocusButton />
    //     </div>
    // )
}

export default App;

















