/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/app-header.js');
var Statusbar = require('./header/app-statusbar.js');
var Footer = require('./header/app-footer.js');


var Template =
  React.createClass({
    render:function(){
      return  (
        <div>
          <Header />
          <Statusbar />
          {this.props.children}
          <Footer />
        </div>
        )
    }
  });
module.exports = Template;
