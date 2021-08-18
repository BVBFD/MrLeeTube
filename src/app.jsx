import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoDetail from './components/videoDetail/videoDetail';
import VideoLIst from './components/videoList/videoLIst';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyC-iohmFKEU3z2hf5GLtys-AjFhXQf2whk", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  console.log(videos);

  return (
    <>
      <VideoDetail video={selectedVideo}/>
      <VideoLIst videos={videos} onSelectVideo={selectVideo}/>
    </>
  );
}

export default App;
