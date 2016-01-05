var React = require('react');
var ModalHeader = require('./ModalHeader.jsx');
var ModalBody = require('./ModalBody.jsx');
var ModalFooter = require('./ModalFooter.jsx');

var DeleteModal = React.createClass({
	render: function () {
		return (
			<div className="modal fade">
        		<div className="modal-dialog">
          			<div className="modal-content">
            			<ModalHeader title="WAIT!" />
            			<ModalBody content = "Are you sure you want to delete your account?" />
            			<ModalFooter />
          			</div>
        		</div>
      		</div>
		);
	}
});

module.exports = DeleteModal;