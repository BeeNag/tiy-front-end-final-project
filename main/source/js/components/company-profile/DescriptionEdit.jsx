var React = require('react');

var DescriptionEdit = React.createClass({

	handleDescriptionEditFormSubmit: function (submitEvent) {
		submitEvent.preventDefault();

		var description = this.refs.description.value;

		this.props.handleDescriptionEditForm();
		this.props.handleDescriptionEditFormSubmit(description);
	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="update" method="post" action="/update" onSubmit={this.handleDescriptionEditFormSubmit}>
	        				<h1>Update Your Contact Details</h1>
	        				<input type="text" className="form-control input pass" placeholder="Update your description" ref="description"></input>
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = DescriptionEdit;