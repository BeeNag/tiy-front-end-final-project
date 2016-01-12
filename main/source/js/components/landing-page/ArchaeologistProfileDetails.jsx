var React = require('react');

var ArchaeologistProfileDetails = React.createClass({

      handleChange: function () {
            this.props.handleInputChange(this.props.name, this.refs.input.value);
      },

	render: function () {
		return (
			<div>
                        <input type={this.props.type} placeholder={this.props.placeholder} className={this.props.className} onChange={this.handleChange} ref="input"></input>
			</div>
		);
	}
});

module.exports = ArchaeologistProfileDetails;