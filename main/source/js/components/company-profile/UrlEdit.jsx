var React = require('react');

var UrlEdit = React.createClass({

	handleUrlEditFormSubmit: function (submitEvent) {
		submitEvent.preventDefault();

		var url = this.refs.url.value;

		this.props.handleUrlEditForm();
		this.props.handleUrlEditFormSubmit(url);
	},

	render: function () {
		return (
			<div className="container form">
				<div className="col-xs-4">
	    			<div id="logbox-profile">
	      				<form id="update" method="post" action="/update" onSubmit={this.handleUrlEditFormSubmit}>
	        				<h1>Update Company Home Page URL</h1>
	        				<input type="url" placeholder="Update Company Home Page URL" className="form-control input pass" ref="url"></input>
    						<input type="submit" value="Update" className="form-control inputButton"></input>
	      				</form>
	    			</div>
	   			</div>
   			</div>
		);
	}
});

module.exports = UrlEdit;