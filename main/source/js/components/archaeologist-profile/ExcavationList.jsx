var React = require('react');
var ExcavationStore = require('../../stores/ExcavationStore.js');

var ExcavationList = React.createClass({
	addExcavationList: function () {
		var excavationList = ExcavationStore.getExcavationDetails();

		var list = excavationList.map(function (element, index) {
			return (
				<li key={index}><a href={element.excavation_url} type="submit" target="_blank">{element.name}</a></li>
			);
		});
		return list;
	},

	render: function () {
		return (
			<ul>
				{this.addExcavationList()}
			</ul>
		);
	}
});

module.exports = ExcavationList;