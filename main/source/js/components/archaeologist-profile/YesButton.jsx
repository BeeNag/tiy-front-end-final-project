var React = require('react');
var ArchaeologistProfileActionCreators = require('../../actions/ArchaeologistProfileActionCreators.js');

var YesButton = React.createClass({

	handleDeleteClickEvent: function () {
		event.preventDefault();

		ArchaeologistProfileActionCreators.changeToLandingPage();
	},

	render: function () {
		return (
			<button type="button" className="btn btn-danger" onClick={this.handleDeleteClickEvent} data-dismiss="modal">Yes</button>
		);
	}
});

module.exports = YesButton;