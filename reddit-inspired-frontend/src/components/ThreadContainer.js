import React from 'react';
import Thread from './Thread';
import axios from 'axios';

class ThreadContainer extends React.Component {
  constructor(props) {
    super(props); // prop contains baseJsonUrl provided from MainContainer.
    this.state = {
      threads: [],
      loading: false,
      threadLimit: 0,
    };
  }

  getRedditJson(url, threadLimit) {
    this.setState({loading: true});
    let jsonUrlWithLimit = this.props.baseJsonUrl + "?limit=" + threadLimit;
    axios.get(jsonUrlWithLimit).then(res => {
      if (res.status !== 200) { // Not ok
        console.log("Error fetching Json status: " + res.status);
        this.setState({loading: false});
        return;
      }
      
      res.json().then(data => {
        if (data != null) {
          this.setState({threads: data.data.children});
          console.log("Threads are now in var thread");
        } else {
          console.log("data is null");
        }

        this.setState({loading: false});
      });
    });
  }

  // Hook for when ThreadContainer mounts
  componentDidMount() {
    this.getRedditJson(this.props.redditJsonUrl, this.state.threadLimit);

    var options = {       // wtf is this
      root: null,         // root to use for intersection?
      rootMargin: "0px",  // Margin value to the root
      threshold: 1.0,     // trigger callback once intersectionarea changes >= value we provided
    };

    // set observer
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );

    this.observer.observe(this);
  }

  render() {
    const threads = this.props.data;
    let baseUrl = "https://www.reddit.com";
    
    return (
    <div className="thread-container">
      {
        this.state.threads.map((thread, index) => <Thread key={thread.data.id} threadData={thread.data}/>)
      }
    </div>
    );
  }
}

export default ThreadContainer;