var React = require('react');

var DescriptionEdit = React.createClass({
	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="update" method="post" action="/update">
	        				<h1>Update Your Contact Details</h1>
	        				<textarea className="form-control input pass" placeholder="Update your description" rows="5" maxLength="250"></textarea>
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = DescriptionEdit;