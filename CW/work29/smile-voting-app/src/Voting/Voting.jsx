import React, {Component} from 'react';
import SmileCard from "../SmileCard";
import './Voting.scss'
import Button from "../Button";

class Voting extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         candidates: []
    //     }
    //     setTimeout(() => {
    //         this.setState((state) => {
    //             return {
    //                 candidates: [{}, {}, {}]
    //             }
    //         })
    //     }, 2000)
    // }

    state = {
        candidates: [],
        votes: {},
        showResults: false,
        winner: {}
    }

    handleVote = (id) => {
        console.log('vote clicked');
        console.log(id);
        this.setState({
            votes: {
                ...this.state.votes,
                [id]: this.state.votes[id] + 1
            },
        })
        console.log(this.state.votes); // state will appear updated only after function is fully executed
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                const ids = result.map(item => item.id);
                const votesObj = ids.reduce((acc, id) => {
                    acc[id] = 0;
                    return acc;
                }, {})
                this.setState(state => {
                    return {
                        candidates: result,
                        votes: {...votesObj}
                        // votes: {
                        //     1: 0,
                        //     2: 0,
                        //     3: 0
                        // }
                    }
                })
            })
    }

    renderButtonShowResults = () => {
        for (const key in this.state.votes) {
            if (this.state.votes[key] > 0) {
                return true
            }
        }
    }

    renderWinner = () => {
        this.setState(
            {showResults: true}
        )

        const votes = this.state.votes;

        const maxVoteKey = Object.keys(votes).reduce((maxKey, currentKey) => {
            return votes[currentKey] > votes[maxKey] ? currentKey : maxKey;
        }, Object.keys(this.state.votes)[0]);

        const winnerObj = this.state.candidates.find(item => item.id == maxVoteKey);

        this.setState({
            winner: {...winnerObj}
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h3>Choose the best smile ever:</h3>
                <div className="container">
                    {!(this.state.candidates.length) && <div>No candidates yet...</div>}
                    {this.state.candidates.map(item =>
                        (<div key={item.id}>
                            <SmileCard
                                id={item.id}
                                title={item.title}
                                smile={item.smile}
                                description={item.description}
                                onVote={this.handleVote}>
                            </SmileCard>
                            {this.state.votes[item.id]}
                        </div>)
                    )}
                </div>
                {this.renderButtonShowResults() && (<Button onClick={this.renderWinner}>
                    Show Results</Button>)}
                {(this.state.showResults) && (
                    <div className="winner-container">
                        <h3>And the winner is...</h3>
                        <SmileCard title={this.state.winner.title}
                                   smile={this.state.winner.smile}
                                   description={this.state.winner.description}/></div>)}
            </div>
        );
    }
}

export default Voting;