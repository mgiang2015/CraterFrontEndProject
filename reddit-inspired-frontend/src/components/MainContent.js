import React from 'react';
import ThreadContainer from './ThreadContainer';
import Sidebar from './Sidebar'

class MainContent extends React.Component {
  render() {
    return (
    <div className="main-container">
      <ThreadContainer />
      <Sidebar />
    </div>
    );
  }
}

export default MainContent;