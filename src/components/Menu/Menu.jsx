import './Menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'>WHO AM I?</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#portfolio'>SKILLS</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#works'>PROJECTS!!</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#testimonials'>TESTIMONIALS</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#contact'>CONTACT ME</a>
        </li>
      </ul>
    </div>
  );
}
