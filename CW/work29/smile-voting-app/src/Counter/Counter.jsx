import React, {Component} from 'react';

class Counter extends Component {
    state = {
        // counter1: 0,
        counter2: [],
        // counter3: 0,
    }
    handleClick = () => {
        let newValue = 'new value';
        this.setState({
            // counter1: this.state.counter1 + 1,
            counter2: [
                ...this.state.counter2,
                newValue + ' ' + this.state.counter2.length],
            // counter3: this.state.counter3 + 1,
        })

        // this.setState((state) => {
        //     return {
        //         counter1: state.counter1 + 1,
        //         counter2: state.counter2 + 1,
        //         counter3: state.counter3 + 1,
        //     }
        // })
        console.log(this.state);
    }

    componentDidMount() {
        console.log('first render')
    }

    componentDidUpdate() {
        console.log('re-render')
    }

    render() {
        return (
            <>
                {/*<div>Counter1: {this.state.counter1}</div>*/}
                <div>Counter2: {this.state.counter2.length}</div>
                {/*<div>Counter3: {this.state.counter3}</div>*/}
                <ul>
                    {this.state.counter2.map(item => (<li key={item}>{item}</li>))}
                </ul>
                <button onClick={this.handleClick}> Click Me!</button>
            </>
        );

    }
}

export default Counter;