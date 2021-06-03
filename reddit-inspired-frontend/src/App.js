// react-datetime library to implement time
// import Datetime from 'react-datetime'; // a bit buggy now
import logo from './resources/images/logo200x200.png';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}


class Header extends React.Component {
  render() {
    return (
    <div className="header">
      <img src={logo} alt="Logo"/>
      <h1><i>/r/Dance: Where dancers unite</i></h1>
    </div>
    );
  }
}

class MainContent extends React.Component {
  render() {
    return (
    <div className="main-container">
      <ThreadContainer />
      <SideBar />
    </div>
    );
  }
}

class ThreadContainer extends React.Component {
  render() {
    return (
    <div className="thread-container">
      <Thread />
      <Thread />
      <Thread />
      <Thread />
    </div>
    );
  }
}

class SideBar extends React.Component {
  render() {
    return (
    <div class="sidebar">
      <h2>This is sidebar</h2>
    </div>
    );
  }
}

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

/*
class NavBar extends React.Component {

}

*/
export default App;













/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

