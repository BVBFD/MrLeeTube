import React from 'react';
import styles from "./videoDetail.module.css";

const VideoDetail = ({video, video: { snippet }}) => {
    return (
        <section className={styles.detail}>
            <iframe
                className={styles.video} 
                type="text/html" 
                width="100%" 
                height="500"
                src={`https://www.youtube.com/embed/${video.id.videoId ? video.id.videoId : video.id}`}
                frameBorder="0" 
                allowFullScreen>
                <img src={snippet.thumbnails.default.url} alt="Video Thumbnails Image" />    
            </iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre>{snippet.description}</pre>
        </section>
    )
};

export default VideoDetail;