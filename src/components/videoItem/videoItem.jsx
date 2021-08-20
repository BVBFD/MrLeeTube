import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({width, video, video: { snippet }, onSelectVideo}) => {
    console.log(width);

    const changeWidth  = width === `100%` ? styles.changedWidth : styles.videoItem;

    return (
        <li className={changeWidth} onClick={() => onSelectVideo(video)}>
            <img className={styles.img} src={snippet.thumbnails.medium.url} alt={snippet.title}/>
            <div className={styles.videoItem_title}>
                <span className={styles.title_video}>{snippet.title}</span>
                <span className={styles.title_channel}>{snippet.channelTitle}</span>
            </div>
        </li>
    )};

export default VideoItem;