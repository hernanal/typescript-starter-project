import * as React from 'react';

export interface IStatefulProps {
    name: string;
    enthusiasmLevel?: number;
}

interface IState {
    currentEnthusiasm: number;
}

class Hello extends React.Component<IStatefulProps, IState> {
    constructor(props: IStatefulProps) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    onIncrement = () => this.updateEnthusiasmLevel(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasmLevel(this.state.currentEnthusiasm - 1);

    render() {
        const { name } = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello { name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }

    private updateEnthusiasmLevel(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm })
    }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}