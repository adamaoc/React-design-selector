/** @jsx React.DOM */
var React = require('react');
Link = require('react-router-component').Link;

var Footer =
  React.createClass({
    render:function(){
      return (
        <div className="row footer">
          <div className="container">
            <div className="col-xs-4">
              <Link href={'/design'}>« Back</Link>
            </div>
            <div className="col-xs-4">
              <Link className="next-button" href={'/palette'}>Next »</Link>
            </div>
          </div>
        </div>
        )
    }
  });
module.exports = Footer;