import React from 'react';
import PostInformation from './PostInformation';

class Thread extends React.Component {  
  render() {
    const dateString = "3 Jun 2021"; // temporary hard code
    return (
    <div className="thread">
      <PostInformation className="thread-information" author="kelele" date={dateString}/>
      <h2>Mock Thread Heading</h2>
    </div>
    );
  }
}

export default Thread;