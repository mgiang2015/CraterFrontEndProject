// react-datetime library to implement time
// import Datetime from 'react-datetime'; // a bit buggy now
import './App.css';
import React, {useState, useEffect} from 'react';
// import other components
import MainContent from './components/MainContent'

// App is also responsible for fetching JSON from provided reddit json url
function App() {
  const [threads, setThreads] = useState([]);
  const [subreddit, setSubreddit] = useState('DotA2'); // required to only run useEffect once
  const subRedditUrl = 'https://www.reddit.com/r/DotA2/'; // change limit=xxx for fetching xxx posts

  return (
    <div className="App">
      <MainContent subRedditUrl={subRedditUrl}/>
    </div>
  );
}

export default App;
