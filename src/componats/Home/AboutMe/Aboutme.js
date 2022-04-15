import React from 'react'
import './Aboutme.css'

export default function Aboutme() {
    return (
        <div className="about-me-parent" id='about'>
            <div className="about-heading-container">
                <div className="screen-heading">
                    <span>About Me</span>
                </div>
                <div className="sub-heading">
                    <span>Why Choose Me?</span>
                </div>
                <div className="heading-seperator">
                    <div className="seperator-line">
                    </div>
                    <div className="seperator-blob">
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="about-me-card">
                <div className="about-me-profile">
                </div>
                <div className="about-me-detaile">
                    <span className='about-me-description'>Learnig to become Full stack web  developer with background knowledge of MERN stacks with redux, along with a knack of building applications with altmost efficiency. Now learnig react and redux </span>
                    <div className="about-me-highlight">
                        <div className="highlight-heading">
                        <span>Here are a few Highlight :</span>
                        </div>
                        <div className="hightlight">
                            <div className="highlight-blob">
                                </div>
                                <span>MERN Stack Developer</span>
                        </div>
                        <div className="hightlight">
                            <div className="highlight-blob">
                            </div>
                                <span>Currently Learning Redux</span>
                        </div>
                        <div className="hightlight">
                            <div className="highlight-blob">
                            </div>
                                <span>Now FrontEnd Developer</span>
                        </div>
                        <div className="hightlight">
                            <div className="highlight-blob">
                            </div>
                                <span>Self Taught Developer </span>
                        </div>
                        <div className="hightlight">
                            <div className="highlight-blob">
                            </div>
                                <span>Enthusiastic Developer</span>
                        </div>
                    </div>
                    <div className='about-me-options'>
                              <button className='btn primary-btn'>
                                   {"  "}
                                   Hire Me{"  "}
                              </button>
                              <a href='Resume.pdf' download='Resume.pdf' >
                                   <button className='btn highlighted-btn'>Get Ressume</button>
                              </a>
                         </div>
                </div>
            </div>
        </div>
    )
}
