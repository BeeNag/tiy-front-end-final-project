var React = require('react');

var ModalBody = React.createClass({
  render: function () {
    return (
      <div className="modal-body">
        {this.props.content}
      </div>
    );
  }
});

module.exports = ModalBody;