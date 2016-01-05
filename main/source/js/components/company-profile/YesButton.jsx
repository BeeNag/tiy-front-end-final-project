var React = require('react');
var CompanyProfileActionCreators = require('../../actions/CompanyProfileActionCreators.js');

var YesButton = React.createClass({

	handleDeleteClickEvent: function () {
		event.preventDefault();

		CompanyProfileActionCreators.changeToLandingPage();
	},

	render: function () {
		return (
			<button type="button" className="btn btn-danger" onClick={this.handleDeleteClickEvent} data-dismiss="modal">Yes</button>
		);
	}
});

module.exports = YesButton;