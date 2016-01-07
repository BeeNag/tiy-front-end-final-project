var React = require('react');
var ThumbnailImage = require('./ThumbnailImage.jsx');
var ThumbnailCaption = require('./ThumbnailCaption.jsx');
var SearchStore = require('../../stores/SearchStore.js');

var Thumbnail = React.createClass({
	render: function () {
		return (
			<div>
				<div className="col-xs-3">
					<div className="thumbnail">
						<ThumbnailImage imageUrl={SearchStore.getThumbnailData().thumbnail1.imageUrl} imageAlt={SearchStore.getThumbnailData().thumbnail1.imageAlt} />
						<ThumbnailCaption name={SearchStore.getThumbnailData().thumbnail1.name} email={SearchStore.getThumbnailData().thumbnail1.email} specialism={SearchStore.getThumbnailData().thumbnail1.specialism} experience={SearchStore.getThumbnailData().thumbnail1.experience} />
					</div>
				</div>
				<div className="col-xs-3">
					<div className="thumbnail">
						<ThumbnailImage imageUrl={SearchStore.getThumbnailData().thumbnail2.imageUrl} imageAlt={SearchStore.getThumbnailData().thumbnail2.imageAlt} />
						<ThumbnailCaption name={SearchStore.getThumbnailData().thumbnail2.name} email={SearchStore.getThumbnailData().thumbnail2.email} specialism={SearchStore.getThumbnailData().thumbnail2.specialism} experience={SearchStore.getThumbnailData().thumbnail2.experience} />
					</div>
				</div>
				<div className="col-xs-3">
					<div className="thumbnail">
						<ThumbnailImage imageUrl={SearchStore.getThumbnailData().thumbnail3.imageUrl} imageAlt={SearchStore.getThumbnailData().thumbnail3.imageAlt} />
						<ThumbnailCaption name={SearchStore.getThumbnailData().thumbnail3.name} email={SearchStore.getThumbnailData().thumbnail3.email} specialism={SearchStore.getThumbnailData().thumbnail3.specialism} experience={SearchStore.getThumbnailData().thumbnail3.experience} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Thumbnail;