var React = require('react');

var CompanyProfileDetails = React.createClass({
	render: function () {
		return (
			<div>
				<input type="text" placeholder="Company Name" className="form-control input pass"></input>
				<input type="address" placeholder="Address Line 1" className="form-control input pass"></input>
				<input type="address" placeholder="Address Line 2" className="form-control input pass"></input>
				<input type="address" placeholder="Address Line 3" className="form-control input pass"></input>
				<input type="text" placeholder="City" className="form-control input pass"></input>
				<input type="postcode" placeholder="Postcode" className="form-control input pass"></input>
				<input type="text" placeholder="Enter Phone Number" className="form-control input pass" data-format="(+44)ddd ddd dddd"></input>
				<input type="url" placeholder="Company Home Page URL" className="form-control input pass"></input>
				<textarea className="form-control input pass" placeholder="Please Enter a Brief Description of the Company (max. 250 words)" rows="5" maxlength="250"></textarea>
			</div>
		);
	}
});

module.exports = CompanyProfileDetails;