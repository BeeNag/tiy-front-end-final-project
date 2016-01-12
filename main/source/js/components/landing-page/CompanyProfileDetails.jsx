var React = require('react');

var CompanyProfileDetails = React.createClass({
	render: function () {
		return (
			<div>
				<input type="text" placeholder="Company Name" className="form-control input pass" ref="name"></input>
				<input type="address" placeholder="Address Line 1" className="form-control input pass" ref="address1"></input>
				<input type="address" placeholder="Address Line 2" className="form-control input pass" ref="address2"></input>
				<input type="address" placeholder="Address Line 3" className="form-control input pass" ref="address3"></input>
				<input type="text" placeholder="City" className="form-control input pass" ref="city"></input>
				<input type="postcode" placeholder="Postcode" className="form-control input pass" ref="postcode"></input>
				<input type="text" placeholder="Enter Phone Number" className="form-control input pass" data-format="(+44)ddd ddd dddd" ref="phone_number"></input>
				<input type="url" placeholder="Company Home Page URL" className="form-control input pass" ref="url"></input>
				<textarea className="form-control input pass" placeholder="Please Enter a Brief Description of the Company (max. 250 words)" rows="5" maxLength="250" ref="description"></textarea>
			</div>
		);
	}
});

module.exports = CompanyProfileDetails;