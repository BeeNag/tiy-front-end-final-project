var React = require('react');

var MainButton = React.createClass({
	render: function () {
		return (
			<button className={this.props.className} onClick={this.props.handleButtonClick}>{this.props.label}</button>
		);
	}
});

module.exports = MainButton;