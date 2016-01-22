var React = require('react');
var SearchActionCreators = require('../../actions/SearchActionCreators.js');
var SignInDetailsStore = require('../../stores/SignInDetailsStore.js');

var BasicSearch = React.createClass({

	handleSearch: function () {

		var searchString = this.refs.input.value;

		console.log(searchString);

		SearchActionCreators.searchArchaeologistProfiles(searchString, SignInDetailsStore.getToken(), SignInDetailsStore.getId());
	},

	render: function () {
		return (
			<div className="row">
				<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#basic-search">Basic Search</button>
				<div className="collapse" id="basic-search">
					<div className="col-xs-6 col-xs-offset-3">
    					<h2>Please enter a keyword that you would like to search for</h2>
            			<div id="search-input">
                			<div className="input-group col-xs-12">
                    			<input type="text" className="form-control input-lg" placeholder="Search..." ref="input"></input>
                    			<span className="input-group-btn">
                        			<a href="#search-results" className="btn btn-info btn-lg" role="button" onClick={this.handleSearch}>
                            			<span className="glyphicon glyphicon-search"></span>
                        			</a>
                    			</span>
                			</div>
            			</div>
        			</div>
				</div>
			</div>
		);
	}
});

module.exports = BasicSearch;