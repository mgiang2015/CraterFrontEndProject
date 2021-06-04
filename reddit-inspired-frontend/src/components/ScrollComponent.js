import React from 'react';
import axios from 'axios';

function ScrollComponent() {
 	const [threads, setThreads] = useState([]);
  const [subreddit, setSubreddit] = useState('DotA2'); // required to only run useEffect once
  const redditJsonUrl = 'https://www.reddit.com/r/DotA2.json?limit=10'; // change limit=xxx for fetching xxx posts

  useEffect(() => {
    fetch(redditJsonUrl).then(res => {
      if (res.status !== 200) { // Not ok
        console.log("Error fetching Json status: " + res.status);
        return;
      }

      res.json().then(data => {
        if (data != null) {
          setThreads(data.data.children);
          console.log("Threads are now in var thread");
        } else {
          console.log("data is null");
        }
      });
    });
  }, [subreddit])


  return (
    <div className="App">
      <Header />
      <MainContent data={threads}/>
    </div>
  );
}