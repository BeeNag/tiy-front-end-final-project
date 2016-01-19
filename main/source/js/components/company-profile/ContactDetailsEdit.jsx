var React = require('react');

var ContactDetailsEdit = React.createClass({

	handleContactDetailsEditFormSubmit: function (submitEvent) {
		submitEvent.preventDefault();

		var address1 = this.refs.address1.value;
		var address2 = this.refs.address2.value;
		var address3 = this.refs.address3.value;
		var city = this.refs.city.value;
		var postcode = this.refs.postcode.value;
		var phone_number = this.refs.phone_number.value;

		this.props.handleContactDetailsEditForm();
		this.props.handleContactDetailsEditFormSubmit(address1, address2, address3, city, postcode, phone_number);
	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="update" method="post" action="/update" onSubmit={this.handleContactDetailsEditFormSubmit}>
	        				<h1>Update Your Contact Details</h1>
	        				<input type="address" placeholder="Address Line 1" className="form-control input pass" ref="address1"></input>
							<input type="address" placeholder="Address Line 2" className="form-control input pass" ref="address2"></input>
							<input type="address" placeholder="Address Line 3" className="form-control input pass" ref="address3"></input>
							<input type="text" placeholder="City" className="form-control input pass" ref="city"></input>
							<input type="postcode" placeholder="Postcode" className="form-control input pass" ref="postcode"></input>
							<input type="text" placeholder="Enter Phone Number" className="form-control input pass" data-format="(+44)ddd ddd dddd" ref="phone_number"></input>
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = ContactDetailsEdit;