/** @jsx React.DOM */
var React = require('react');
Link = require('react-router-component').Link;

var Palette =
  React.createClass({
    render:function(){
        return (
          <div>
            <h2>Choose a Palette</h2>
            <Link href={'/design'}>Back to Design</Link> | 
            <Link href={'/layout'}>Choose your Layout</Link>
          </div>
        )
    }
  });
module.exports = Palette;
