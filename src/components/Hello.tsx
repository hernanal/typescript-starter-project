import 'index.scss';
import * as React from 'react';

export interface IHelloProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IHelloProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthsiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div className="hello button">
                <button id="decrement-btn" onClick={onDecrement}>-</button>
                <button id="increment-btn" onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}