import React from 'react';
import ThreadHeader from './ThreadHeader';
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
import gfm from 'remark-gfm';

// Thread has property content, which determines the content to display
// Thread for classic view
class ClassicThread extends React.Component {  
  render() {
    return (
    <div className="thread classic-thread">
      <ThreadHeader className="thread-information" author={this.props.threadData.author_fullname} date={this.props.threadData.created} title={this.props.threadData.title}
        num_comments={this.props.threadData.num_comments} score={this.props.threadData.score} url={this.props.threadData.url}/>

      <ReactMarkdown remarkPlugins={[gfm]}>
        {this.props.threadData.selftext}
      </ReactMarkdown>
    </div>
    );
  }
}
// for card view
class CardThread extends React.Component {  
  render() {
    return (
    <div className="thread card-thread">
      <ThreadHeader className="thread-information" author={this.props.threadData.author_fullname} date={this.props.threadData.created} title={this.props.threadData.title}
        num_comments={this.props.threadData.num_comments} score={this.props.threadData.score} url={this.props.threadData.url}/>
    </div>
    );
  }
}
// for compact view
class CompactThread extends React.Component {  
  render() {
    return (
    <div className="thread compact-thread">
      <ThreadHeader className="thread-information" author={this.props.threadData.author_fullname} date={this.props.threadData.created} title={this.props.threadData.title}
        num_comments={this.props.threadData.num_comments} score={this.props.threadData.score} url={this.props.threadData.url}/>
    </div>
    );
  }
}

export { ClassicThread, CardThread, CompactThread };