import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import portraitMainPage from "../styles/images/portraitMainPage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard, faHome, faMagicWandSparkles, faNavicon, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);
  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <nav className="text-white flex fixed absolute top-0 w-full h-12 bg-transparent z-40 items-center justify-end">
        <FontAwesomeIcon onClick={() => setOpen(!open)} className="hide-large px-2 text-4xl z-50" icon={faNavicon} />
        <ul className={`bg-[#27292C] tab:bg-transparent absolute top-0 h-[100vh] w-[100vw] tab:h-[8vh] tab:flex-row flex flex-col tab:justify-end justify-around px-2 items-center ${open ? "block" : "hide-small"}`}>
          <li className="tab:mx-3 list-none"><Link href="/"><FontAwesomeIcon className="px-2 text-4xl" icon={faHome} /></Link></li>
          <li className="tab:mx-3 list-none"><Link href="/about"><FontAwesomeIcon className="px-2 text-4xl" icon={faContactCard} /></Link></li>
          <li className="tab:mx-3 list-none"><Link href="/projects"><FontAwesomeIcon className="px-2 text-4xl" icon={faMagicWandSparkles} /></Link></li>
        </ul>
      </nav>
      <div className={`${styles[transitionStage]}`}>
        {children}
      </div>
    </div>
  )
}

export default Navbar;
