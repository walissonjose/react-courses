import {useEffect, useRef, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    );
}

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
    });

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    );
}

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const handleClick = () => {
        inputEl.current.focus();
    };

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>Focar no Input</button>
        </div>
    );
}

export {Counter, Example, TextInputWithFocusButton};
