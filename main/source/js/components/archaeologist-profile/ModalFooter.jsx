var React = require('react');
var YesButton = require('./YesButton.jsx');
var NoButton = require('./NoButton.jsx');

var ModalFooter = React.createClass({
  render: function () {
    return (
      <div className="modal-footer">
        <YesButton />
        <NoButton />
      </div>
    );
  }
});

module.exports = ModalFooter;