import {useState} from "react";
import {getImageUrl} from "./utils.js";

function HelloStateful(props) {
    const [click, setClick] = useState('not clicked yet');
    const handleClick = () => setClick('clicked!');

    return (
        <div>
            Hello, {props.nome} you {click}
            <button onClick={handleClick}> Click here!</button>
        </div>
    );
}

function Person({person, size}) {
    return (
        <img src={getImageUrl(person)} alt={person.name} style={{width: size}} height={{height: size}} />
    );
}

export {HelloStateful, Person};

// }
// class HelloStateful extends React.Component {
//     state = {
//         click: 'not clicked yet'
//     }
//
//     handleClick() {
//         this.setState({
//             click: 'clicked!'
//         });
//     }
//
//     componentDidMount() {
//         console.log('HelloStateful apareceu na tela');
//     }
//
//     render() {
//         return (
//             <div>
//                 Hello, {this.props.nome} you {this.state.click}
//                 <button onClick = {this.handleClick.bind(this)}> Click here!</button>
//             </div>
//         );
//     }
// }