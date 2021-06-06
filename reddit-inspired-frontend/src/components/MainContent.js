import React from 'react';
import ThreadContainer from './ThreadContainer';
import Sidebar from './Sidebar'
import Header from './Header'

// Add sort-by, as a state for MainContent and pass it as a prop to 
class MainContent extends React.Component {
  render() {
    return (
    <div className="page-wrapper">
      <div className="header-and-controls">
        <Header />
      </div>
      <div className="main-content">  
        <ThreadContainer subRedditUrl={this.props.subRedditUrl}/>
      </div>
    </div>
    );
  }
}

export default MainContent;