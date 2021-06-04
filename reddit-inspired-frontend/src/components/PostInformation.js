import React from 'react';

class PostInformation extends React.Component {
  render() {
    const infoString = "Posted by u/" + this.props.author + " on " + this.props.date;
    return (
    <div>
      <h6>{infoString}</h6>
    </div>
    );
  }
}

export default PostInformation;