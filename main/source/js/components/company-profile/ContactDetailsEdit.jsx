var React = require('react');

var ContactDetailsEdit = React.createClass({

	handleContactDetailsEditFormSubmit: function (submitEvent) {
		submitEvent.preventDefault();
		this.props.handleContactDetailsEditForm();
	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="update" method="post" action="/update" onSubmit={this.handleContactDetailsEditFormSubmit}>
	        				<h1>Update Your Contact Details</h1>
	        				<input type="address" placeholder="Address Line 1" className="form-control input pass"></input>
							<input type="address" placeholder="Address Line 2" className="form-control input pass"></input>
							<input type="address" placeholder="Address Line 3" className="form-control input pass"></input>
							<input type="text" placeholder="City" className="form-control input pass"></input>
							<input type="postcode" placeholder="Postcode" className="form-control input pass"></input>
							<input type="text" placeholder="Enter Phone Number" className="form-control input pass" data-format="(+44)ddd ddd dddd"></input>
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = ContactDetailsEdit;