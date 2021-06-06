import React from 'react';
import VotingArea from './VotingArea';

// Extra: Implement number of comments, upvote, downvote
class ThreadHeader extends React.Component {
  render() {
    const dateOfPost = new Date(this.props.date*1000);
    const formattedDate = dateOfPost.getDate() + "/" + (dateOfPost.getMonth() + 1) + "/" + dateOfPost.getFullYear();
    const infoString = "Posted by u/" + this.props.author + " on " + formattedDate;
    const comments = "Comments: " + this.props.num_comments;
    return (
    <div>
      <h6>{infoString}</h6>
      <div className="thread-stats">
        <VotingArea score={this.props.score}/>
        <span>{comments}</span>
      </div>
      <a href={this.props.url}><h2>{this.props.title}</h2></a>
    </div>
    );
  }
}

export default ThreadHeader;