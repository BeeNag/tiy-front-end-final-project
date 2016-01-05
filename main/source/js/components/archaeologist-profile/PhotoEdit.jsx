var React = require('react');

var PhotoEdit = React.createClass({
	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-6 col-xs-offset-3">
	    			<div id="logbox">
	      				<form id="update" method="post" action="/update">
	        				<h1>Update Your Picture</h1>
	        				<label htmlFor="upload-picture" className="upload">Upload Your Picture</label>
    						<input type="file" className="form-control input pass" id="upload-picture"></input>
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = PhotoEdit;