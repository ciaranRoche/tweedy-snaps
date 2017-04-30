var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
    getInitialState: function(){
        console.log('[tweedy-snaps] StreamTweet: 1. Running getInitialState()');
      return{
          numberOfCharactersIsIncreasing: null,
          headerText: null
      };
    },

    componentWillMount: function () {
      console.log('[tweedy-snaps] StreamTweet: 2. Running componentWillMount()');
      this.setState({
          numberOfCharactersIsIncreasing: true,
          headerText: 'Latest public from Twitter'
      });
        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1

        };
    },

    componentDidMount: function () {
      console.log('[tweedy-snaps] StreamTweet: 3. Running componentDidMount()');
      var componentDOMRepresentation = ReactDOM.findDOMNode(this);

      //header
      window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
      //tweet
      window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },

    componentWillUnmount: function () {
      console.log('[tweedy-snaps] StreamTweet: 8. Running componentWillUnmount()');

      delete window.snapterest;
    },

    render: function(){
        console.log('[tweedy-snaps] StreamTweet: Running render()');

        return(
            <section>
                <Header text={this.state.headerText}/>
                <Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection}/>
            </section>
        );
    }
});

module.exports = StreamTweet;