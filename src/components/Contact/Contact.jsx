import { useState } from 'react';
import './Contact.scss';
import { GitHub, LinkedIn, Instagram, Code, Twitter } from '@material-ui/icons';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <>
      <div className='contact' id='contact'>
        <div className='left'>
          <img src='assets/shake.svg' alt='hand-shake' />
        </div>
        <div className='right'>
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input placeholder='Email' type='email' />
            <textarea placeholder='Message'></textarea>
            <button type='submit' id='gooey-button'>
              Send
            </button>
            {message && (
              <span>
                Thanks, I'll reply ASAP!! <span className='emoji'> 😀</span>
              </span>
            )}
          </form>
        </div>
      </div>
      <div className='footer'>
        <div class='wrapper'>
          <div class='icon facebook'>
            <div class='tooltip'>LinkedIn</div>
            <span>
              <LinkedIn fontSize='large'></LinkedIn>
            </span>
          </div>
          <div class='icon twitter'>
            <div class='tooltip'>Twitter</div>
            <span>
              <Twitter fontSize='large'></Twitter>
            </span>
          </div>
          <div class='icon instagram'>
            <div class='tooltip'>Instagram</div>
            <span>
              <Instagram fontSize='large'></Instagram>
            </span>
          </div>
          <div class='icon github'>
            <div class='tooltip'>Github</div>
            <span>
              <GitHub fontSize='large'></GitHub>
            </span>
          </div>
          <div class='icon youtube'>
            <div class='tooltip'>Codechef</div>
            <span>
              <Code fontSize='large'></Code>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
