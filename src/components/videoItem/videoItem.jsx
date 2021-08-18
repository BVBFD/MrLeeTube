import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({video, video: { snippet }, onSelectVideo}) => {
    return (
        <li className={styles.videoItem} onClick={() => onSelectVideo(video)}>
            <img src={snippet.thumbnails.medium.url} alt={snippet.title}/>
            <div className={styles.videoItem_title}>
                <span className={styles.title_video}>{snippet.title}</span>
                <span className={styles.title_channel}>{snippet.channelTitle}</span>
            </div>
        </li>
    )};

export default VideoItem;