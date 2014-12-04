/** @jsx React.DOM */
var React = require('react');
Link = require('react-router-component').Link;

var Design =
  React.createClass({
    render:function(){
        return (
          <div>
            <h2>Choose a Design</h2>
            <Link href={'/'}>Back to Manufacturer</Link> | 
            <Link href={'/palette'}>Choose your color</Link>
          </div>
        )
    }
  });
module.exports = Design;
