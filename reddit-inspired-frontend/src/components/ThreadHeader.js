import React from 'react';
import VotingArea from './VotingArea';

// Extra: Implement number of comments, upvote, downvote
class ThreadHeader extends React.Component {
  render() {
    const infoString = "Posted by u/" + this.props.author + " on " + this.props.date;
    const comments = "Comments: " + this.props.num_comments;
    return (
    <div>
      <h6>{infoString}</h6>
      <div className="thread-stats">
        <VotingArea score={this.props.score}/>
        <span>{comments}</span>
      </div>
      <h2>{this.props.title}</h2>
    </div>
    );
  }
}

export default ThreadHeader;