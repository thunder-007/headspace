import MyHeadspaceNav from '../components/childComponents/MyHeadspaceNav';
import HeadspaceTop from '../components/childComponents/HeadspaceTop';
import "../components/childComponents/MyHeadspace.css";
import HeadspaceContent from '../components/childComponents/HeadspaceContent';

// eslint-disable-next-line react/prop-types
const MyHeadspace = ({ title }) => {
  return (
      <>
        <MyHeadspaceNav />
        <div className="headspace-content-container">
          <div className="headspace-content-item">
            <p className="topitem-head">{title}</p>
            <HeadspaceTop />
            <HeadspaceContent />
            {/* Music Player */}
            <div className="custom-music-player my-5">
              <p className="music-player-title">Now Playing</p>
              <div className="audio-controls">
                <audio controls className="audio-element">
                  <source src="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>

        </div>

      </>
  );
}

export default MyHeadspace;
