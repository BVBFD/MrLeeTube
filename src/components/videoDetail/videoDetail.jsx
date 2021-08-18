import React from 'react';
import styles from "./videoDetail.module.css";

const VideoDetail = ({ video }) => {
    return <span>{video.snippet.title}</span>;
};

export default VideoDetail;