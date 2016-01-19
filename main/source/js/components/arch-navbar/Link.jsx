var React = require('react');

var Link = React.createClass({
	render: function () {
		return (
			<a role={this.props.role} href={this.props.href} className={this.props.className} onClick={this.props.handleButtonClick}>{this.props.label}</a>
		);
	}
});

module.exports = Link;