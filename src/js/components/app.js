/** @jsx React.DOM */
var React = require('react');
var Manufacturer = require('./manufacturer/app-manufacturer.js');
var Design = require('./design/app-design.js');
var Palette = require('./palette/app-palette.js');
var Layout = require('./layout/app-layout.js');
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
            <Location path="/" handler={Design} />
            <Location path="/design" handler={Design} />
            <Location path="/palette" handler={Palette} />
            <Location path="/layout" handler={Layout} />
          </Locations>
        </Template>

        )
    }
  });
module.exports = APP;
