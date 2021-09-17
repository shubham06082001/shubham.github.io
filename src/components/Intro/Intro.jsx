import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import arrowImg from '../../assets/down.png';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      backSpeed: 60,
      strings: [
        'WEB DEVELOPER',
        'APP DEVELOPER',
        'PROGRAMMER',
        'MACHINE LEARNING ENGINEER',
      ],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1 className='glitch' data-glitch='SHUBHAM KUMAR'>
            SHUBHAM KUMAR
          </h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <button className='resume'>MY RESUME </button>
        </div>
        <a href='#portfolio'>
          <img src={arrowImg} alt='portfolio' />
        </a>
        {/* <a href='#portfolio'>
          <img src='./assets/down.png' alt='portfolio' />
        </a> */}
      </div>
    </div>
  );
}
