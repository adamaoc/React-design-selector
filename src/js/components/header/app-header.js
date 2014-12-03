/** @jsx React.DOM */
var React = require('react');

var Header =
  React.createClass({
    render:function(){
      return (
        <div className="header">
          <div className="container row">
            <span className="col-sm-6">Responsive Design Selector</span>
            <div className="logo col-sm-2">DT LOGO HERE</div>
          </div>
        </div>
        )
    }
  });
module.exports = Header;