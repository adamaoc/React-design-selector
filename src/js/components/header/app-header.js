/** @jsx React.DOM */
var React = require('react');

var Header =
  React.createClass({
    render:function(){
      return (
        <div className="row header-wrapper">
          <div className="container">
            <div className="col-xs-3 logo-wrapper">
              <img src="https://www.dealertrack.com/public/images/NewLogo.png" />
            </div>
            
          </div>
        </div>
        )
    }
  });
module.exports = Header;