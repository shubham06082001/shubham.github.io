import './TopBar.scss';
import {
  PersonPin,
  Drafts,
  GitHub,
  LinkedIn,
  Instagram,
  Code,
} from '@material-ui/icons';
import logo from '../../logo.png';
import Anime from 'react-anime';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            <img
              src={logo}
              alt='logo-pic'
              className='logo-image box bounce-2'
            />
          </a>
          <div className='itemContainer'>
            <PersonPin className='icon' />
            <span>+91 9771148474</span>
          </div>
          <div className='itemContainer'>
            <Drafts className='icon' />
            <span>shubhamkmr06082001@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <Anime
            easing='easeOutElastic'
            duration={1000}
            direction='alternate'
            loop={true}
            delay={(el, index) => index * 240}
            translateX='13px'
            scale={[0.75, 0.9]}
          >
            <div className='itemContainer'>
              <a
                className='anchor-links'
                target='_blank'
                rel='noreferrer'
                href='https://github.com/shubham06082001'
                title='Github'
              >
                <GitHub className='icon-github' />
              </a>

              <a
                className='anchor-links'
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/shubham-kumar-92498414b/'
              >
                <LinkedIn className='icon-linkedin' />
              </a>
              <a
                className='anchor-links'
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/rise_of_tomb_/'
              >
                <Instagram className='icon-instagram' />
              </a>
              <a
                className='anchor-links'
                target='_blank'
                rel='noreferrer'
                href='https://www.codechef.com/users/shubham00700'
              >
                <Code className='icon-codechef' />
              </a>
            </div>
          </Anime>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
