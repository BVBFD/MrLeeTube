import React from 'react';
import styles from "./videoDetail.module.css";

const VideoDetail = ({video, video: { snippet }}) => {
    return (
        <span>{snippet.title}</span>
    )
};

export default VideoDetail;