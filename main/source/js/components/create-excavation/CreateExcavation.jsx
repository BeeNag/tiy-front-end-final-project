var React = require('react');
var ReactFire = require('reactfire');
var HashID = require('../../services/HashID.js');
var EmployerNavbar = require('../company-navbar/EmployerNavbar.jsx');
var CreateExcavationActionCreators = require('../../actions/CreateExcavationActionCreators.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');

var CreateExcavation = React.createClass({

	getInitialState: function () {
		return {
			id: '',
			name: '',
			address1: '',
			address2: '',
			address3: '',
			postcode: '',
			duration: '',
			excavation_url: '',
			excavation_description: ''
		};
	},

	updateNameState: function (e) {
		this.setState({
			name: e.target.value
		});
	},

	updateAddressOneState: function (e) {
		this.setState({
			address1: e.target.value
		});
	},

	updateAddressTwoState: function (e) {
		this.setState({
			address2: e.target.value
		});
	},

	updateAddressThreeState: function (e) {
		this.setState({
			address3: e.target.value
		});
	},

	updatePostcodeState: function (e) {
		this.setState({
			postcode: e.target.value
		});
	},

	updateDurationState: function (e) {
		this.setState({
			duration: e.target.value
		});
	},

	updateExcavationUrlState: function (e) {
		this.setState({
			excavation_url: e.target.value
		});
	},

	updateExcavationDescriptionState: function (e) {
		this.setState({
			excavation_description: e.target.value
		});
	},

	handleCreateExcavationClickEvent: function () {
		CreateExcavationActionCreators.changeToCompanyProfile();
	},

	handleSubmit: function (submitEvent) {
		submitEvent.preventDefault();
		console.log('running');
		this.firebaseRef.set({
			id: SignInDetailsStore.getId(),
			name: this.state.name,
			address1: this.state.address1,
			address2: this.state.address2,
			address3: this.state.address3,
			postcode: this.state.postcode,
			duration: this.state.duration,
			excavation_url: this.state.excavation_url,
			excavation_description: this.state.excavation_description
		});
		this.setState({
			id: '',
			name: '',
			address1: '',
			address2: '',
			address3: '',
			postcode: '',
			duration: '',
			excavation_url: '',
			excavation_description: ''
		});
	},

	componentWillMount: function () {
		var excavationId = HashID.generate();
		this.firebaseRef = new Firebase("https://tiy-front-end.firebaseio.com/excavations/" + excavationId);
		this.firebaseRef.on("child_added", function () {
			console.log('hello');
		}.bind(this));
	},

	componentWillUnmount: function () {
		this.firebaseRef.off();
	},

	render: function () {
		return (
			<div className="container-fluid">
				<div className="row">
					<EmployerNavbar />
				</div>
				<div id="logbox">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="inputExcavationName">Excavation Name</label>
							<input type="text" className="form-control" id="inputExcavationName" placeholder="Excavation Name" value={this.state.name} onChange={this.updateNameState}></input>
						</div>
						<div className="form-group">
	                    	<label htmlFor="inputAddressLineOne">Address Line 1</label>
	                    	<input type="address" className="form-control" id="inputAddressLineOne" placeholder="Address Line 1" value={this.state.address1} onChange={this.updateAddressOneState}></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputAddressLineTwo">Address Line 2</label>
	                    	<input type="address" className="form-control" id="inputAddressLineTwo" placeholder="Address Line 2" value={this.state.address2} onChange={this.updateAddressTwoState}></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputAddressLineThree">Address Line 3</label>
	                    	<input type="address" className="form-control" id="inputAddressLineThree" placeholder="Address Line 3" value={this.state.address3} onChange={this.updateAddressThreeState}></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="inputPostcode">Postcode</label>
	                    	<input type="postcode" className="form-control" id="inputPostcode" placeholder="Postcode" value={this.state.postcode} onChange={this.updatePostcodeState}></input>
	                    </div>
	                    <div className="form-group">
	                    	<label htmlFor="selectDuration">Duration of Excavation</label>
	                    	<input type="text" className="form-control" id="selectDuration" placeholder="Duration" value={this.state.duration} onChange={this.updateDurationState}></input>
	                    </div>
	                    <div className="form-group">
      						<label htmlFor="enterExcavationUrl">Excavation Home Page</label>
      						<input type="url" className="form-control" id="enterExcavationUrl" placeholder="Excavation Home Page URL" value={this.state.excavation_url} onChange={this.updateExcavationUrlState}></input>
    					</div>
    					<div className="form-group">
	                    	<label htmlFor="describeExcavation">Please Enter a Brief Description of the Excavation (max. 250 words)</label>
	                    	<input type="text" className="form-control" id="describeExcavation" placeholder="Description" value={this.state.excavation_description} onChange={this.updateExcavationDescriptionState}></input>
	                    </div>
	                    <div className="form-group">
							<input type="submit" value="Submit Your Excavation Details" className="form-control inputButton"></input>
						</div>
					</form>
				</div>
				<div className="row">
					<div className="col-xs-6 col-xs-offset-3">
						<button  type="button" onClick={this.handleCreateExcavationClickEvent} className="btn btn-success">Create Excavation Profile</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = CreateExcavation;