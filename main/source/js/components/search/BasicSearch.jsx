var React = require('react');

var BasicSearch = React.createClass({
	render: function () {
		return (
			<div className="row">
				<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#basic-search">Basic Search</button>
				<div className="collapse" id="basic-search">
					<div className="col-xs-6 col-xs-offset-3">
						<input type="text" className="form-control input-sm" maxlength="64" placeholder="Search"></input>
						<button type="submit" className="btn btn-primary btn-sm">Search</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = BasicSearch;