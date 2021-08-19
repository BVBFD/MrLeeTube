import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/searchHeader/searchHeader';
import VideoDetail from './components/videoDetail/videoDetail';
import VideoLIst from './components/videoList/videoLIst';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;
  // env 활용한 api키 보안책은 터미널 종료하고 다시 켜야 적용 가능

  const selectVideo = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <SearchHeader onSearch={search}/>
      {selectedVideo && <VideoDetail video={selectedVideo}/>}
      <VideoLIst videos={videos} onSelectVideo={selectVideo}/>
    </>
  );
}

export default App;
