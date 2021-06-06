import React, {setState} from 'react';

class VotingArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentScore: this.props.score,
			option: '',
		}
		this.handleUpVote = this.handleUpVote.bind(this);
		this.handleDownVote = this.handleDownVote.bind(this);
		this.getScoreClass = this.getScoreClass.bind(this);
	}

	handleUpVote() {
		if (this.state.option !== 'up') {
			let updatedScore = this.props.score + 1;
			this.setState({currentScore: updatedScore});
			this.setState({option: 'up'});
		} else {
			this.setState({currentScore: this.props.score});
			this.setState({option: ''});
		}
	}

	handleDownVote() {
		if (this.state.option != 'down') {
			let updatedScore = this.props.score - 1;
			this.setState({currentScore: updatedScore});
			this.setState({option: 'down'});
		} else {
			this.setState({currentScore: this.props.score});
			this.setState({option: ''});
		}
	}

	getScoreClass() {
		switch(this.state.option) {
			case '':
				return 'normal-score';
			case 'up':
				return 'up-score';
			case 'down':
				return 'down-score';
		}
	}

	render() {
		return (
			<div>
				<button className="vote-btn" onClick={this.handleDownVote}>Downvote</button>
				<span className={this.getScoreClass()}>{this.state.currentScore}</span>
				<button className="vote-btn" onClick={this.handleUpVote}>Upvote</button>
			</div>
		);
	}
}

export default VotingArea