import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imgUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	const videoDescription = video.snippet.description;
		return (
			<li onClick={() => onVideoSelect(video)}>
				<div> 
					<h2>{videoTitle}</h2>
					<h3>{videoDescription}</h3>
					<img src={imgUrl} alt=""/> 
				</div>
			</li>
		)
};

export default VideoListItem;