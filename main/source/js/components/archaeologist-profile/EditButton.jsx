var React = require('react');

var EditButton = React.createClass({
	render: function () {
		return (
			<button className="btn btn-xs btn-primary" onClick={this.props.handleButtonClick}><span className="glyphicon glyphicon-pencil"></span>{this.props.label}</button>
		);
	}
});

module.exports = EditButton;