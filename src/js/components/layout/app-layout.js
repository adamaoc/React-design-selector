/** @jsx React.DOM */
var React = require('react');
Link = require('react-router-component').Link;

var Layout =
  React.createClass({
    render:function(){
        return (
          <div>
            <h2>Choose a Layout</h2>
            <Link href={'/palette'}>Back to Palette</Link>
          </div>
        )
    }
  });
module.exports = Layout;
