import React, { useEffect, useRef, useState } from 'react';
import imageLogoSmall from '../../assets/images/logo-small.png';
import Button from "../Button/Button.jsx";
import { NavLink } from "react-router-dom";
import { useMenu } from '../../context/MenuContext.jsx';

const links = [
  { id: 1, text: "Home", go: '' },
  { id: 2, text: "About", go: 'about' },
  { id: 3, text: "How it works", go: 'how-it-works' },
  { id: 4, text: "Token design", go: 'token-design' },
  { id: 5, text: "YARD flywheel", go: 'yard-flywheel' },
];

const Header = () => {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const { closeMenu, toggleMenu, isOpen } = useMenu();
  const hoverBgRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const moveHoverBg = (e) => {
    const bg = hoverBgRef.current;
    const nav = navRef.current;
    if (!bg || !nav) return;

    const rect = e.target.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    bg.style.width = `${rect.width}px`;
    bg.style.transform = `translateX(${rect.left - navRect.left}px)`;
  };

  useEffect(() => {
    const nav = navRef.current;
    const bg = hoverBgRef.current;
    if (!nav || !bg) return;

    const activeLink = nav.querySelector('.link.active');
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      bg.style.width = `${rect.width}px`;
      bg.style.transform = `translateX(${rect.left - navRect.left}px)`;
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header w-full fixed top-[16px] right-0 flex items-center z-[999] md:top-[20px] 2xl:top-[34px] ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="c-cont max-w-cont">
        <div className="header-wrap w-full flex items-center justify-between">
          <NavLink
            to="/"
            className="logo flex items-center justify-start gap-[7px] transition-[.3s] hover:scale-[1.03]"
          >
            <img src={imageLogoSmall} alt="logo" />
            <span className="font-logo text-[#333333F2]">Backyard</span>
          </NavLink>

          <nav
            ref={navRef}
            onMouseLeave={() => {
              const nav = navRef.current;
              const bg = hoverBgRef.current;
              if (!nav || !bg) return;

              const activeLink = nav.querySelector('.link.active');
              if (activeLink) {
                const rect = activeLink.getBoundingClientRect();
                const navRect = nav.getBoundingClientRect();
                bg.style.width = `${rect.width}px`;
                bg.style.transform = `translateX(${rect.left - navRect.left}px)`;
              } else {
                bg.style.width = `0px`;
                bg.style.transform = `translateX(0px)`;
              }
            }}
            className={`header-mobile p-[3px] gap-[1px] md:flex items-center justify-center border-sec bg-[#F2F3F5] rounded-[100px] md:gap-[4px] relative lg:relative ${
              isOpen ? "active" : ""
            }`}
          >
            <span
              ref={hoverBgRef}
              className="nav-hover-bg absolute left-0 bg-[#303030] rounded-[100px] transition-transform duration-300 pointer-events-none z-0"
            />

            {links.map((link) => (
              <NavLink
                key={link.id}
                to={`/${link.go}`}
                onMouseEnter={moveHoverBg}
                onClick={closeMenu}
                className={({isActive}) =>
                  `link font-l z-[1] max-md:min-h-0 max-md:text-[14px] text-[#AEB0B1] min-h-[31px] px-[10px] flex items-center justify-center text-center rounded-[100px] lg:min-h-[38px] lg:px-[13px] ${
                    isActive ? "text-[#FBFBFC] bg-[#303030] max-md:text-[#303030]" : ""
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}

            <Button
              variant="connect"
              onClick={closeMenu}
            >
              <span>Connect</span>
            </Button>
          </nav>


          <div className="burger-menu flex items-center gap-2">
            <Button
              variant="connect"
            >
              <span>Connect</span>
            </Button>
            <div
              onClick={toggleMenu}
              className="burger rounded-[11px] w-[40px] h-[40px] border-sec flex items-center justify-center text-[17px] text-[#525352] md:hidden"
            >
              {isOpen ? <i className="icon-close"></i> :
                <i className="icon-burger"></i>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
