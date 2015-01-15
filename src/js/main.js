/** @jsx React.DOM */
var React = require('react');
var APP = require('./components/app');

window.React = React;

React.renderComponent(
  <APP />,
  document.getElementById('main'));