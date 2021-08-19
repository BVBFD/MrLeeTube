import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/searchHeader/searchHeader';
import VideoDetail from './components/videoDetail/videoDetail';
import VideoLIst from './components/videoList/videoLIst';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC-iohmFKEU3z2hf5GLtys-AjFhXQf2whk`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyC-iohmFKEU3z2hf5GLtys-AjFhXQf2whk", requestOptions)
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
