import './App.css';
import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react';
import image from './img/back-cover.jpg'

const videoUrls = ['https://youtu.be/dZ93T2zmeak', 'https://www.youtube.com/watch?v=731f_1rMeVg', 'https://www.youtube.com/watch?v=33-F5RJ2LVc']

function App() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setCurrentVideo(prev => prev + 1)
    console.log('clicked');
  }

  useEffect(() => {
    fetch("/api")
      .then((res) => {
        console.log('res.data :>> ', res.data);
      })
    // .then((data) => setData(data.message));
  }, []);

  console.log('image :>> ', image);

  return (
    <div className="App" >
      {/* <img src={image} width='100%' /> */}
      <header className="App-header">
        <p>
          Thanya Iyer - rest
        </p>
        {/* <video width="320" height="240" controls>
          <source src="../public/1_instrumentals_intro.mov" type="video/mov" />
          <source src="../public/1_instrumentals_intro.m4v" type="video/m4v" />
          Your browser does not support the video tag.
        </video> */}

        <button onClick={() => setIsPlaying(true)}>Begin</button>
        <button>Previous</button>
        <button onClick={handleClick}>Next</button>
        <ReactPlayer playing={isPlaying} url={videoUrls[currentVideo]} crossOrigin="true" />
        {/* <ReactPlayer url={instrumentalIntroVid} /> */}
        {/* <ReactPlayer
          // url='https://www.youtube.com/watch?v=33-F5RJ2LVc'
          // onContextMenu={(e) => e.preventDefault()}
          // config={{
          //   youtube: {
          //     playerVars: { modestbranding: 1 }
          //   }
          // }}
          url={[
            { src: './videos/one_instrumentals_intro.mp4', type: 'video/mp4' },
            // { src: '1_instrumentals_intro.mov', type: 'video/mov' },
            // { src: '1_instrumentals_intro.m4v', type: 'video/m4v' },
            // { src: '1_instrumentals_intro.webm', type: 'video/webm' },
          ]}
        /> */}
        {/* <div className='player-wrapper'>
          <video controls
            src='./videos/one_instrumentals_intro.mp4'
            // poster='https://user-images.githubusercontent.com/28612032/172026551-e5a96748-d724-4a08-b6b3-f44655d4ef39.png'
            width="600">

            Sorry, your browser doesn't support embedded videos,
            but don't worry, you can <a href="https://user-images.githubusercontent.com/28612032/172026908-7c33e4cc-ebe5-40de-b9cc-009d12a7ced2.mp4">download it</a>
            and watch it with your favorite video player!

          </video>
        </div> */}
        {/* <ReactPlayer url='one_instrumentals_intro.mp4' /> */}
        {/* <ReactPlayer url='../public/1_instrumentals_intro.m4v' /> */}
      </header>
    </div>
  );
}

export default App;
