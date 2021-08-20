import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css';

const VideoLIst = ({width, videos, onSelectVideo}) => {
    return (
        <ul className={styles.videoList}>
            {videos.map(video => (
                <VideoItem width={width} key={video.id.videoId} video={video} onSelectVideo={onSelectVideo}/>
            ))}
        </ul>
    );
};

export default VideoLIst;