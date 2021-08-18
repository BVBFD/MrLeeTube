import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css';

const VideoLIst = ({videos, onSelectVideo}) => {
    return (
        <ul className={styles.videoList}>
            {videos.map(video => (
                <VideoItem key={video.id} video={video} onSelectVideo={onSelectVideo}/>
            ))}
        </ul>
    );
};

export default VideoLIst;