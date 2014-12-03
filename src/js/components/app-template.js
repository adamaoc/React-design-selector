/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/app-header.js');


var Template =
  React.createClass({
    render:function(){
      return  (
        <div>
          <Header />
          {this.props.children}
        </div>
        )
    }
  });
module.exports = Template;
