/** @jsx React.DOM */
var React = require('react');
var CurrentSelection = require('../header/app-curr-selection.js');

var Header =
  React.createClass({
    render:function(){
      return (
        <div className="row header-wrapper">
          <div className="container">
            <div className="col-xs-3 logo-wrapper">
              <img src="https://www.dealertrack.com/public/images/NewLogo.png" />
            </div>
            <div className="col-xs-5 currselect-wrapper">
              <CurrentSelection />
            </div>
          </div>
        </div>
        )
    }
  });
module.exports = Header;
