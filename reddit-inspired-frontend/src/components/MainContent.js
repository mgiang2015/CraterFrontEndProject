import React from 'react';
import ThreadContainer from './ThreadContainer';
import Sidebar from './Sidebar'

class MainContent extends React.Component {
  render() {
    return (
    <div className="main-content">
      <ThreadContainer baseJsonUrl={this.props.baseJsonUrl}/>
      <Sidebar />
    </div>
    );
  }
}

export default MainContent;