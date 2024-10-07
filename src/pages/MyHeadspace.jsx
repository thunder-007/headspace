import  { useState, useRef } from 'react';
import MyHeadspaceNav from '../components/childComponents/MyHeadspaceNav';
import HeadspaceTop from '../components/childComponents/HeadspaceTop';
import "../components/childComponents/MyHeadspace.css";
import HeadspaceContent from '../components/childComponents/HeadspaceContent';

// eslint-disable-next-line react/prop-types
const MyHeadspace = ({ title }) => {
    const [nowPlaying, setNowPlaying] = useState("Nothing playing");
    const audioRefs = useRef([]);

    const handlePlay = (audioIndex, title) => {
        setNowPlaying(title);
        audioRefs.current.forEach((audioRef, index) => {
            if (index !== audioIndex && audioRef) {
                audioRef.pause();
            }
        });
    };

    return (
        <>
            <MyHeadspaceNav />
            <div className="headspace-content-container">
                <div className="headspace-content-item">
                    <p className="topitem-head">{title}</p>
                    <HeadspaceTop />
                    <HeadspaceContent />
                    <div className="custom-music-player my-5">
                        <p className="music-player-title">Now Playing: {nowPlaying}</p>
                        <div className="audio-controls">
                            <audio
                                ref={(el) => (audioRefs.current[0] = el)}
                                controls
                                className="audio-element"
                                onPlay={() => handlePlay(0, "Baby Elephant Walk")}
                            >
                                <source src="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                    <br />
                    <div className="custom-music-player my-5">
                        <div className="audio-controls">
                            <audio
                                ref={(el) => (audioRefs.current[1] = el)}
                                controls
                                className="audio-element"
                                onPlay={() => handlePlay(1, "DJ Tillu")}
                            >
                                <source src="https://mp3teluguwap.net/mp3/2021/Dj Tillu/Tillu Anna DJ Pedithe.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyHeadspace;
