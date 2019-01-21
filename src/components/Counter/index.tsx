import { Component } from "react";

interface CounterState {
    count: number;
}

const increment = (inc: number) => ({ count }: CounterState) => ({
    count: count + inc
});

export class Counter extends Component<{}, CounterState> {
    state = {
        count: 0
    };

    render() {
        const { count } = this.state;

        return (
            <div>
                {count}
                <button onClick={() => this.setState(increment(-1))}>-1</button>
                <button onClick={() => this.setState(increment(1))}>+1</button>
            </div>
        );
    }
}
