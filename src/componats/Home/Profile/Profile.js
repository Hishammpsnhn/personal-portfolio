import React from 'react'
import Typical from 'react-typical'
import Header from '../../Header/Header'
import './Profile.css'

export default function Profile() {
     return (
          <nav>
          <Header/>

          <div className='profile-container'>
               <div className='profile-parent'>
                    <div className="profile-details">
                         <div className="colz">
                              <div className="colz-icon">
                                   <a href='https://www.facebook.com/hisham.hishammp.9/'>
                                        <i className='fa fa-facebook-square'></i>
                                   </a>
                                   <a href='#'>
                                        <i className='fa fa-google-plus-square'></i>
                                   </a>
                                   <a href='https://www.instagram.com/_hisham_mp/'>
                                        <i className='fa fa-instagram'></i>
                                   </a>
                                   <a href='https://www.linkedin.com/in/mohammad-hisham-b14296228/'>
                                        <i className='fa fa-linkedin-square'></i>
                                   </a>
                                   <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'>
                                        <i className='fa fa-twitter'></i>
                                   </a>


                              </div>
                         </div>
                         <div className='profile-details-name'>
                              <span className='primary-test'>
                                   {""}
                                   Hello, I'M <span className='highlighted-text'>Hisham</span>
                              </span>
                         </div>
                         <div className="profile-detail-role">
                              <span className="primary-text">
                                   {" "}
                                   <h1>
                                        {" "}
                                        <Typical
                                             loop={Infinity}
                                             steps={[
                                                  "Enthusiastic Dev",
                                                  1000,
                                                  "Full Stack Developer",
                                                  1000,
                                                  "MERN Stack Developer",
                                                  1000,
                                                  "React js/HTMl-CSS",
                                                  1000,
                                                  "Cross Platform Dev",
                                                  1000,
                                             ]}
                                        />
                                   </h1>
                                   <span className='profile-role-tagline'>
                                        Knack of bulding application with front end
                                        operation.
                                   </span>
                              </span>
                         </div>
                         <div className='profile-options'>
                              <button className='btn primary-btn'>
                                   {"  "}
                                   Hire Me{"  "}
                              </button>
                              <a href='ressume.pdf' download='unkown ressume.pdf' >
                                   <button className='btn highlighted-btn'>Get Ressume</button>
                              </a>
                         </div>
                    </div>
                    <div className='profile-picture'>
                         <div className='profile-picture-background'>
                         </div>
                    </div>
               </div>
          </div>
          </nav>
     )
}
