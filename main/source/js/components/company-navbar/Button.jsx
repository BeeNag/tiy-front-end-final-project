var React = require('react');

var Button = React.createClass({
	render: function () {
		return (
			<button type={this.props.type} className={this.props.className} onClick={this.props.handleButtonClick}>{this.props.label}</button>
		);
	}
});

module.exports = Button;