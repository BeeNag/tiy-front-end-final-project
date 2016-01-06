var React = require('react');
var ThumbnailImage = require('./ThumbnailImage.jsx');
var ThumbnailCaption = require('./ThumbnailCaption.jsx');
var SearchStore = require('../../stores/SearchStore.js');

var Thumbnail = React.createClass({
	render: function () {
		return (
			<div className="col-xs-3">
				<div className="thumbnail">
					<ThumbnailImage imageUrl={SearchStore.getThumbnailData().imageUrl} imageAlt={SearchStore.getThumbnailData().imageAlt} />
					<ThumbnailCaption name={SearchStore.getThumbnailData().name} email={SearchStore.getThumbnailData().email} specialism={SearchStore.getThumbnailData().specialism} experience={SearchStore.getThumbnailData().experience} />
				</div>
			</div>
		);
	}
});

module.exports = Thumbnail;