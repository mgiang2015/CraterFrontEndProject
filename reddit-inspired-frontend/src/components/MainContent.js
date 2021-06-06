import React from 'react';
import ThreadContainer from './ThreadContainer';
import Sidebar from './Sidebar'
import Header from './Header'

// Add sort-by, as a state for MainContent and pass it as a prop to 
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'hot', // default sort method
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(e) {
    let buttonPressed = e.target.value;
    this.setState({sortBy: buttonPressed});
  }

  render() {
    return (
    <div className="page-wrapper">
      <div className="header-and-controls">
        <Header />
        <div className="controls">
          <button class="control-btn" onClick={(e) => this.handleSortChange(e)} value='hot'>Hot</button>
          <button class="control-btn" onClick={(e) => this.handleSortChange(e)} value='new'>New</button>
          <button class="control-btn" onClick={(e) => this.handleSortChange(e)} value='top'>Top</button>
        </div>
      </div>
      <div className="main-content">  
        <ThreadContainer baseJsonUrl={this.props.baseJsonUrl} sortBy={this.state.sortBy}/>
      </div>
    </div>
    );
  }
}

export default MainContent;