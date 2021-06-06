import React from 'react';
import Thread from './Thread';

class ThreadContainer extends React.Component {
  constructor(props) {
    super(props); // prop contains baseJsonUrl provided from MainContainer.
    this.state = {
      threads: [],
      loading: false,
      threadLimit: 10,
      prevY: 0, // for keeping track of Y coordinates
      sortBy: 'hot', // for changing sortBy
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(e) {
    let buttonPressed = e.target.value;
    this.setState({threadLimit: 10});
    this.setState({sortBy: buttonPressed});
    console.log("User presssed: " + e.target.value);
    this.getRedditJson(this.state.threadLimit);
  }

  getRedditJson(threadLimit) {
    this.setState({loading: true});
    let jsonUrlWithLimit = this.props.subRedditUrl + this.state.sortBy + ".json" + "?limit=" + threadLimit;
    fetch(jsonUrlWithLimit).then(res => {
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
    this.getRedditJson(this.state.threadLimit);

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

    this.observer.observe(this.loadingRef); // loadingRef refers to a box that says loading... It will observe until this box comes into view
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      // time to load!!
      const lastThread = this.state.threads[this.state.threads.length - 1]; // last element
      const newThreadLimit = this.state.threadLimit + 10;
      this.getRedditJson(newThreadLimit);
      this.setState({ threadLimit: newThreadLimit});
    }
    this.setState({ prevY: y })
   }

  render() {
    return (
    <div className="thread-container">
        <div className="controls">
          <button className="control-btn" onClick={(e) => this.handleSortChange(e)} value='hot'>Hot</button>
          <button className="control-btn" onClick={(e) => this.handleSortChange(e)} value='new'>New</button>
          <button className="control-btn" onClick={(e) => this.handleSortChange(e)} value='top'>Top</button>
        </div>
      <div>
        {
          this.state.threads.map((thread, index) => <Thread key={thread.data.id} threadData={thread.data}/>)
        }
      </div>
      <div ref={loadingRef => (this.loadingRef = loadingRef)}>
        <span>Loading...</span>
      </div>
    </div>

    );
  }
}

export default ThreadContainer;