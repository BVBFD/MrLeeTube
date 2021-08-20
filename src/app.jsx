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
    setSelectedVideo(null);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };

  const mostPopular = () => {
    setSelectedVideo(null);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=KR&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };

  useEffect(mostPopular, []);

  const handleMoveTop = () => {
    const top = document.querySelector('.headerForScrollMoveTop');
    top.scrollIntoView();
  };

  const handleColorDark = () => {
    const searchHeader = document.querySelector('.searchHeader_searchHeader__2Xh4S');
    const sectionPart = document.querySelector('.app_content__2UxY1');
    if(sectionPart.classList.contains(`${styles.changeColor}`)){
      searchHeader.style.backgroundColor = `lightyellow`;
      searchHeader.style.color = `black`;
      sectionPart.classList.remove(`${styles.changeColor}`);
    }else{
      searchHeader.style.backgroundColor = `black`;
      searchHeader.style.color = `white`;
      sectionPart.classList.add(`${styles.changeColor}`);
    }
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header} className='headerForScrollMoveTop'>
        <SearchHeader onSearch={search} onMostPopular={mostPopular}/>
      </div>
      <section className={styles.content}>
      {selectedVideo && <div className={styles.ctnDetail}>
          <VideoDetail video={selectedVideo}/>
        </div>}
        <div className={styles.ctnList}>
          <VideoLIst width={selectedVideo ? '100%' : '49.5%'} videos={videos} onSelectVideo={selectVideo}/>
        </div>
      </section>
      <div className={styles.upLight}>
        <button onClick={handleMoveTop} className={styles.upBtn}><i class="fas fa-arrow-circle-up"></i></button>
        <button onClick={handleColorDark} className={styles.lightBtn}><i class="fas fa-sun"></i></button>
      </div>
    </div>
  );
}

export default App;
