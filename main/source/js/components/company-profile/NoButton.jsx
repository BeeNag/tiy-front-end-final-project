var React = require('react');

var NoButton = React.createClass({
	render: function () {
		return (
			<button type="button" className="btn btn-primary" data-dismiss="modal">No</button>
		);
	}
});

module.exports = NoButton;