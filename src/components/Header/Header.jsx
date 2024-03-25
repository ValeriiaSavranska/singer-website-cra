import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import s from './Header.module.css';

const Header = () => {
  const body = document.querySelector('body');
  const [showMobMenu, setShowMobMenu] = useState(false);
  return (
    <header className={s.header}>
      <div className={s.wrap}>
        <h1 className={s.name}>Singer's Name</h1>
        <div onClick={() => setShowMobMenu(!showMobMenu)}>
          {showMobMenu ? (
            <AiOutlineClose className={s.menuMobileBtn} size={50} />
          ) : (
            <AiOutlineMenu className={s.menuMobileBtn} size={50} />
          )}
          {showMobMenu
            ? body.classList.add('noScroll')
            : body.classList.remove('noScroll')}
        </div>
      </div>
      <div
        // onClick={() => setShowMobMenu(false)}
        className={
          showMobMenu
            ? [s.menuMobOverlay, s.menuMobOverlayActive].join(' ')
            : [s.menuMobOverlay]
        }
      >
        <nav
          className={
            showMobMenu
              ? [s.menuMobile, s.menuActive].join(' ')
              : [s.menuMobile]
          }
        >
          <ul className={s.menuListMobile}>
            <li>
              <NavLink to="/" end onClick={() => setShowMobMenu(false)}>
                Home
              </NavLink>
              {/* <a href=".">Home</a> */}
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowMobMenu(false)}>
                About
              </NavLink>
              {/* <a href=".">About</a> */}
            </li>
            <li>
              <NavLink to="/gallery" onClick={() => setShowMobMenu(false)}>
                Gallery
              </NavLink>
              {/* <a href=".">Galerry</a> */}
            </li>
            <li>
              <NavLink to="/listen" onClick={() => setShowMobMenu(false)}>
                Listen
              </NavLink>
              {/* <a href=".">Listen</a> */}
            </li>
            <li>
              <NavLink
                to="/upcoming_events"
                onClick={() => setShowMobMenu(false)}
              >
                Upcoming events
              </NavLink>
              {/* <a href=".">Upcooming events</a> */}
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowMobMenu(false)}>
                Contact
              </NavLink>
              {/* <a href=".">Contact</a> */}
            </li>
          </ul>
        </nav>
      </div>
      <nav className={s.menuDesktop}>
        <ul className={s.menuListDesktop}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
            {/* <a href=".">Home</a> */}
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
            {/* <a href=".">About</a> */}
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
            {/* <a href=".">Galerry</a> */}
          </li>
          <li>
            <NavLink to="/listen">Listen</NavLink>
            {/* <a href=".">Listen</a> */}
          </li>
          <li>
            <NavLink to="/upcoming_events">Upcoming events</NavLink>
            {/* <a href=".">Upcooming events</a> */}
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
            {/* <a href=".">Contact</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
