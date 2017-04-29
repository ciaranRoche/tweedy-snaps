/**
 * Created by ciaranroche on 28/04/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var listOfItems = <ul className="list-of-items">
    <li className="item-1">Item 1</li>
    <li className="item-2">Item 2</li>
    <li className="item-3">Item 3</li>
</ul>;



// var createListItemElement = React.createFactory('li');
//
// var listItemElement1 = createListItemElement({className: 'item-1', key: 'item-1'}, 'Item 1');
// var listItemElement2 = createListItemElement({className: 'item-2', key: 'item-2'}, 'Item 2');
// var listItemElement3 = createListItemElement({className: 'item-3', key: 'item-3'}, 'Item 3');
//
// var reactFragment = [ listItemElement1, listItemElement2, listItemElement3];
// var listOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragment);
//
ReactDOM.render(listOfItems, document.getElementById('react-application'));
