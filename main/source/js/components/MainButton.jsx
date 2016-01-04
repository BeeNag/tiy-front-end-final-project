var React = require('react');

var MainButton = React.createClass({
	render: function () {
		return (
			<button className="btn btn-primary" onClick={this.props.handleButtonClick}>{this.props.label}</button>
		);
	}
});

module.exports = MainButton;