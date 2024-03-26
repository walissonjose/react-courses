export default function Button(props){

    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <button onClick={() => alert('Button clicked!')}>
            {props.message}
        </button>
    );
}