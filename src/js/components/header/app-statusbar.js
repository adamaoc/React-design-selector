/** @jsx React.DOM */
var React = require('react');
Link = require('react-router-component').Link;

var Statusbar =
  React.createClass({
    render:function(){
      return (
        <div className="row status-bar-wrapper selected-wrapper">
          <div className="container">
            <div className="col-xs-4 title-wrapper">
              <h2>Responsive Design Selector</h2>
            </div>
            <div className="col-xs-4 breadcrumb-wrapper">
              <ul className="breadcrumb">
                <li className="active"><Link href={'/'}>1. Select Design</Link></li>
                <li><Link href={'/layout'}>3. Select Layout</Link></li>
                <li><Link href={'/palette'}>2. Select Color</Link></li>
                <li><Link href={'/final'}>4. Finalize</Link></li>
              </ul>
            </div>
          </div>
        </div>
        )
    }
  });
module.exports = Statusbar;