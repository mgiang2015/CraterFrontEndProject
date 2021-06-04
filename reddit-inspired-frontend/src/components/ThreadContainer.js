import React from 'react';
import Thread from './Thread'

class ThreadContainer extends React.Component {  
  render() {
    const threads = this.props.data;
    let baseUrl = "https://www.reddit.com";
    
    return (
    <div className="thread-container">
      {
        threads.map((thread, index) => <Thread key={thread.data.id} threadData={thread.data}/>)
      }
    </div>
    );
  }
}

export default ThreadContainer;