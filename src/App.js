import React, { useRef, useState } from 'react';
import './App.css';
import GenreModal from './GenreModal';
import LoginModal from './LoginModal';

function App() {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Chasing',
    songArtist: 'NEFFEX',
    songSrc: './Assets/songs/Chasing - NEFFEX.mp3',
    songAvatar: './Assets/Images/image1.jpg'
  });

  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  };

  let avatarClass = ['objectFitCover', 'objectFitContain', 'none'];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0);
    } else {
      setAvatarClassIndex(avatarClassIndex + 1);
    }
  };

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const musicAPI = [
    {
      songName: 'Chasing',
      songArtist: 'NEFFEX',
      songSrc: './Assets/songs/Chasing - NEFFEX.mp3',
      songAvatar: './Assets/Images/image1.jpg'
    },
    {
      songName: 'AURORA - Runaway',
      songArtist: 'Aurora Aksnes',
      songSrc: './Assets/songs/AURORA - Runaway (Lyrics).mp3',
      songAvatar: './Assets/Images/image4.jpg'
    },
    {
      songName: 'Catch Me If I Fall',
      songArtist: 'TEGNENT',
      songSrc: './Assets/songs/Catch Me If I Fall - NEFFEX.mp3',
      songAvatar: './Assets/Images/image2.jpg'
    },
    {
      songName: 'Inspired (Clean)',
      songArtist: 'NEFFEX',
      songSrc: './Assets/songs/Inspired (Clean) - NEFFEX.mp3',
      songAvatar: './Assets/Images/image3.jpg'
    },
    {
      songName: 'Baby doll [ slowed + reverb ]',
      songArtist: 'Kanika Kapoor',
      songSrc: './Assets/songs/Baby doll [ slowed + reverb ] __ meet bros ,Kanika Kapoor __ jr santu.mp3',
      songAvatar: './Assets/Images/image5.jpg'
    },
    {
      songName: 'Soch (Slowed+Reverbed)',
      songArtist: 'Hardy Sandhu',
      songSrc: './Assets/songs/SOCH(Slowed+Reverbed) __ Hardy Sandhu.webm',
      songAvatar: './Assets/Images/image6.jpg'
    },
    {
      songName: 'Apna Bana Le',
      songArtist: 'Arijit Singh',
      songSrc: './Assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm',
      songAvatar: './Assets/Images/image7.jpg'
    }
  ];

  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const vidArray = [
    './Assets/Videos/video1.mp4',
    './Assets/Videos/video2.mp4',
    './Assets/Videos/video3.mp4',
    './Assets/Videos/video4.mp4',
    './Assets/Videos/video5.mp4',
    './Assets/Videos/video6.mp4'
  ];

  const handleChangeBackground = () => {
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex(videoIndex + 1);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleLoginModal = () => {
    setShowLoginModal(false); // Login modalni yopish
  };

  return (
      <>
        <div className="container">
          <audio
              src="./Assets/songs/Chasing - NEFFEX.mp3"
              ref={currentAudio}
              onEnded={handleNextSong}
              onTimeUpdate={handleAudioUpdate}
          ></audio>
          <video src={vidArray[videoIndex]} loop muted autoPlay className="backgroundVideo"></video>
          <div className="blackScreen"></div>
          <div className="music-Container">
            <div className="genre-button-container">
              <button className="genre-button" onClick={handleToggleModal}>Genres</button>
            </div>
            <p className="musicPlayer">Music Player</p>
            <p className="music-Head-Name">{currentMusicDetails.songName}</p>
            <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
            <img
                src={currentMusicDetails.songAvatar}
                className={avatarClass[avatarClassIndex]}
                onClick={handleAvatar}
                alt="song Avatar"
                id="songAvatar"
            />
            <div className="musicTimerDiv">
              <p className="musicCurrentTime">{musicCurrentTime}</p>
              <p className="musicTotalLenght">{musicTotalLength}</p>
            </div>
            <input
                type="range"
                name="musicProgressBar"
                className="musicProgressBar"
                value={audioProgress}
                onChange={handleMusicProgressBar}
            />
            <div className="musicControlers">
              <i className="fa-solid fa-backward musicControler" onClick={handlePrevSong}></i>
              <i
                  className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`}
                  onClick={handleAudioPlay}
              ></i>
              <i className="fa-solid fa-forward musicControler" onClick={handleNextSong}></i>
            </div>
          </div>

          <GenreModal show={showModal} onClose={handleToggleModal} />
          <LoginModal show={showLoginModal} onClose={handleToggleLoginModal} /> {/* Login modalni qo'shamiz */}
        </div>
      </>
  );
}

export default App;
