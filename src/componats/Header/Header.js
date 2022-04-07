import { React, useState, useEffect, useRef } from 'react'
import './Header.css'
import { FaBars } from 'react-icons/fa';
import { links } from './data'
import { Links } from 'react-scroll'
import Link from 'react-scroll/modules/components/Link';

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };





  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <div className='main'>
      <button className='nav-toggle' onClick={toggleLinks}>
        <FaBars />
      </button>
      <div className='link-container' ref={linksContainerRef}>
        <ul className='links'   ref={linksRef}>
          {
            links.map((link) => {
              const { id, url, text,to } = link
              if (text === 'home') {
                return (
                  <li key={id}>
                    <a  onClick={toggleLinks} style={{ color: '#ff5823' }}  href={url}>{text}</a>
                  </li>

                )
              }

              return (
                <li key={id}>
                  <a>
                    <Link to={to} spy={true} smooth={true}>{text}</Link>
                  </a>
                </li>
              )
            })
          }
        </ul>

      </div>
    </div>
  )
}
