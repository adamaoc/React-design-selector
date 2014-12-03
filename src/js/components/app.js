/** @jsx React.DOM */
var React = require('react');
var Manufacturer = require('./manufacturer/app-manufacturer.js');
var Router = require('react-router-component');
var Template = require('./app-template.js');

var Locations = Router.Locations;
var Location = Router.Location;


var APP =
  React.createClass({
    render:function(){
      return (
        <Template>
          <Locations>
            <Location path="/" handler={Manufacturer} />
          </Locations>
        </Template>

        )
    }
  });
module.exports = APP;
