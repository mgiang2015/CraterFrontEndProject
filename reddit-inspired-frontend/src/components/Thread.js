import React from 'react';
import PostInformation from './PostInformation';

// Thread has property content, which determines the content to display
class Thread extends React.Component {  
  render() {
    const dateString = "3 Jun 2021"; // temporary hard code
    return (
    <div className="thread">
      <PostInformation className="thread-information" author={this.props.threadData.author_fullname} date={this.props.threadData.created}/>
      <h2>{this.props.threadData.title}</h2>
      {this.props.threadData.selftext}
    </div>
    );
  }
}

export default Thread;