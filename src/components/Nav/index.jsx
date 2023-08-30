import React, {useState, useEffect} from "react";

const Nav = () => {
  
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  };


  const [mobileShadow, setMobileShadow] = useState(null);
  const [desktopShadow, setDesktopShadow] = useState(null);
  const handleScroll = () => {
    const scrollPosition = document.querySelector("#app").scrollTop;
    const mobileScrollPosition = window.scrollY;
    setDesktopShadow(scrollPosition);
    setMobileShadow(mobileScrollPosition);
  };
  useEffect(() => {
    handleScroll();
    document.querySelector("#app").addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="nav" className={mobileShadow || desktopShadow > 0 ? "nav scrolled" : "nav"}>
        <div className="nav__logo">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30" fill="silver">
              <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
            </svg>
          </a>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#about_me" onClick={toggleHamburger}>O mně</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#skills" onClick={toggleHamburger}>Dovednosti</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#portfolio" onClick={toggleHamburger}>Mé projekty</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#contact" onClick={toggleHamburger}>Kontakt</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="https://veronika-bosakova.netlify.app/">CV</a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <div className={hamburgerOpen ? "bar1 change" : "bar1"}></div>
          <div className={hamburgerOpen ? "bar2 change" : "bar2"}></div>
          <div className={hamburgerOpen ? "bar3 change" : "bar3"}></div>
        </div>
      </nav>
      <style> 
        {`
        @media screen and (max-width: 649px) {
          .nav__list {
            right: ${hamburgerOpen ? "0" : "-100%"};
          }
        }
        `}
      </style>
    </>
  );
}

export default Nav;