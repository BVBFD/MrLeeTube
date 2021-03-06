import { useEffect, useRef, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/searchHeader/searchHeader";
import VideoDetail from "./components/videoDetail/videoDetail";
import VideoLIst from "./components/videoList/videoLIst";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const searchHeader = useRef();
  const sectionPart = useRef();

  const selectVideo = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube.search(query).then((result) => setVideos(result.items));
  };

  const mostPopular = () => {
    setSelectedVideo(null);
    youtube.mostPopular().then((result) => setVideos(result.items));
  };

  useEffect(mostPopular, []);

  const handleMoveTop = () => {
    const top = document.querySelector(".headerForScrollMoveTop");
    top.scrollIntoView();
  };

  const handleColorDark = () => {
    if (sectionPart.current.classList.contains(`${styles.changeColor}`)) {
      searchHeader.current.style.backgroundColor = `lightyellow`;
      searchHeader.current.style.color = `black`;
      sectionPart.current.classList.remove(`${styles.changeColor}`);
    } else {
      searchHeader.current.style.backgroundColor = `black`;
      searchHeader.current.style.color = `white`;
      sectionPart.current.classList.add(`${styles.changeColor}`);
    }
  };

  return (
    <div className={styles.screen}>
      <div
        ref={searchHeader}
        className={styles.header}
        className="headerForScrollMoveTop"
      >
        <SearchHeader onSearch={search} onMostPopular={mostPopular} />
      </div>
      <section ref={sectionPart} className={styles.content}>
        {selectedVideo && (
          <div className={styles.ctnDetail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.ctnList}>
          <VideoLIst
            width={selectedVideo ? "100%" : "49.5%"}
            videos={videos}
            onSelectVideo={selectVideo}
          />
        </div>
      </section>
      <div className={styles.upLight}>
        <button onClick={handleMoveTop} className={styles.upBtn}>
          <i class="fas fa-arrow-circle-up"></i>
        </button>
        <button onClick={handleColorDark} className={styles.lightBtn}>
          <i class="fas fa-sun"></i>
        </button>
      </div>
    </div>
  );
}

export default App;

// selectedVideo && ????????? ????????? ?????? ????????? ????????? ?????? ???????????? ?????????
// select?????? ?????? ???????????? ????????? <VideoDetail selectedVideo={selectedVideo}/>
// ???????????? ?????? ????????? ??????.
