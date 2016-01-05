var React = require('react');
var ReactDOM = require('react-dom');
var DeleteModal = require('./DeleteModal.jsx');

var DeleteButton = React.createClass({

	showDeleteModal: function () {
		$(ReactDOM.findDOMNode(this.refs.modal)).modal();
	},

	render: function () {
		return (
			<div>
				<button onClick={this.showDeleteModal} type="button" className="btn btn-danger">Delete Account</button>
				<DeleteModal ref="modal" />
			</div>
		);
	}
});

module.exports = DeleteButton;