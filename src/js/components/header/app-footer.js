/** @jsx React.DOM */
var React = require('react');

var Footer =
  React.createClass({
    render:function(){
      return (
        <div className="row footer">
          <div className="container">
            <div className="col-xs-4">
              <button>« Back</button>
            </div>
            <div className="col-xs-4">
              <button className="next-button">Next »</button>
            </div>
          </div>
        </div>
        )
    }
  });
module.exports = Footer;