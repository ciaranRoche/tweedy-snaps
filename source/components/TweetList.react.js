var React = require('react');
var Tweet = require('/Tweet.react.js');

var listStyle = {
  padding: '0'
};

var listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
};

// renders a list of tweets
var TweetList = React.createClass({
  getListofTweetIds: function () {
    return Object.keys(this.propTypes.tweets);
  },
  
  getTweetElement : function (tweetId) {
    var tweet = this.propTypes.tweets[tweetId];
    var handleRemoveTweetFromCollection = this.propTypes.onRemoveTweetFromCollection;
    var tweetElement;

    if(handleRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection}/>
      );
    }else{
      tweetElement = <Tweet tweet={tweet}/>;
    }
    return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
  },
  render: function (){
    var tweetElements = this.getListofTweetIds().map(this.getTweetElement);
    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    );
  }
});

module.exports = TweetList;