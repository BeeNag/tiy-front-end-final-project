var React = require('react');

var CreateCompanyProfile = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<nav className="navbar navbar-inverse">
			  			<div className="container-fluid">
						    <div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#landing-page-nav" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						    </div>
						    <div className="collapse navbar-collapse" id="landing-page-nav">
						    	<ul className="nav navbar-nav">
						    		<li className="dropdown">
							          	<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">For Companies <span className="caret"></span></a>
								          <ul className="dropdown-menu">
								            <li><a href="#">Search</a></li>
								            <li><a href="#">Saved Profiles</a></li>
								            <li><a href="#">Create Excavation</a></li>
								            <li><a href="#">Create Company Profile</a></li>
								          </ul>
							        </li>
							        <li className="dropdown">
							        	<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">For Archaeologists <span className="caret"></span></a>
							        	  <ul className="dropdown-menu">
							        	  	<li><a href="#">Create Profile</a></li>
							        	  	<li><a href="#">View Profile</a></li>
							        	  	<li><a href="#">Archaeologists Near You</a></li>
							        	  	<li><a href="#">Excavations Near You</a></li>
							        	  </ul>
							        </li>
							        <li><a href="#">HOME</a></li>
							        <button type="button" className="btn btn-default navbar-btn">Sign Out</button>
							    </ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<h1>Please Enter Your Company Details to Create a Company Profile</h1>
					</div>
				</div>
				<div className="row">
					<form>
						<div className="form-group">
							<label for="inputCompanyName">Company Name</label>
							<input type="text" className="form-control" id="inputCompanyName" placeholder="Company Name"></input>
						</div>
						<div className="form-group">
	                    	<label for="inputAddressLineOne">Address Line 1</label>
	                    	<input type="address" className="form-control" id="inputAddressLineOne" placeholder="Address Line 1"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputAddressLineTwo">Address Line 2</label>
	                    	<input type="address" className="form-control" id="inputAddressLineTwo" placeholder="Address Line 2"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputAddressLineThree">Address Line 3</label>
	                    	<input type="address" className="form-control" id="inputAddressLineThree" placeholder="Address Line 3"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputCity">City</label>
	                    	<input type="text" className="form-control" id="inputCity" placeholder="City"></input>
	                    </div>
	                    <div className="form-group">
	                    	<label for="inputPostcode">Postcode</label>
	                    	<input type="postcode" className="form-control" id="inputPostcode" placeholder="Postcode"></input>
	                    </div>
	                    <div className="form-group">
      						<label for="enterUrl">Company Home Page</label>
      						<input type="url" className="form-control" id="enterUrl" placeholder="Company Home Page URL"></input>
    					</div>
    					<div className="form-group">
	                    	<label for="describeCompany">Please Enter a Brief Description of the Company (max. 250 words)</label>
	                    	<textarea className="form-control" id="describeCompany" rows="5" maxlength="250"></textarea>
	                    </div>
					</form>
				</div>
				<div className="row">
					<div className="col-xs-6 col-xs-offset-3">
						<button type="button" className="btn btn-success">Create Company Profile</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CreateCompanyProfile;