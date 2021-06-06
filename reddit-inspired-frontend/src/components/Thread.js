import React from 'react';
import ThreadHeader from './ThreadHeader';
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
import gfm from 'remark-gfm';

// Thread has property content, which determines the content to display
class Thread extends React.Component {  
  render() {
    return (
    <div className="thread">
      <ThreadHeader className="thread-information" author={this.props.threadData.author_fullname} date={this.props.threadData.created} title={this.props.threadData.title}
        num_comments={this.props.threadData.num_comments} score={this.props.threadData.score}/>

      <ReactMarkdown remarkPlugins={[gfm]}>
        {this.props.threadData.selftext}
      </ReactMarkdown>
    </div>
    );
  }
}

export default Thread;