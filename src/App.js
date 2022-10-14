import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Thanya Iyer - rest
        </p>
        {/* <video width="320" height="240" controls>
          <source src="../public/1_instrumentals_intro.mov" type="video/mov" />
          <source src="../public/1_instrumentals_intro.m4v" type="video/m4v" />
          Your browser does not support the video tag.
        </video> */}
        {/* <ReactPlayer url='https://youtu.be/dZ93T2zmeak' /> */}
        <ReactPlayer
          // url='../public/1_instrumentals_intro.mp4' 
          url={[
            { src: '../public/1_instrumentals_intro.mp4', type: 'video/mp4' },
            { src: '../public/1_instrumentals_intro.mov', type: 'video/mov' },
            { src: '../public/1_instrumentals_intro.m4v', type: 'video/m4v' },
            { src: '../public/1_instrumentals_intro.webm', type: 'video/webm' },
          ]}
        />
        {/* <ReactPlayer url='../public/1_instrumentals_intro.mov' />
        <ReactPlayer url='../public/1_instrumentals_intro.m4v' /> */}
      </header>
    </div>
  );
}

export default App;
