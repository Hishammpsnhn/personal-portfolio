import React, { useState } from 'react'
import './Ressume.css'
import data from './data'
import { FaAdn } from "react-icons/fa"

function Ressume() {

    const [datas, setDatas] = useState(data)
    const [index, setIndex] = useState(0)



    return (
        <div className="resume-content" >

            <div className="heading-container">
                <div className="screen-heading">
                    <span>Resume</span>
                </div>
                <div className="sub-heading">
                    <span>My Formal Bio Details</span>
                </div>
                <div className="heading-seperator">
                    <div className="seperator-line">
                    </div>
                    <div className="seperator-blob">
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="resume-card">
                <div className="resume-bullets">
                    <div className="bullet-icons"></div>
                    <div className="bullet-container">

                        {
                            data.map((item, btnIndex) => {
                                const { title, head, id } = item
                                return (
                                    <div key={btnIndex} className="bullets" >
                                        <div className={` ${btnIndex === index ? 'active-bullet active-bullect-effeact' : 'bullet'} `} onClick={() => setIndex(btnIndex)}  >
                                            <FaAdn />
                                            <span className='bullet-label'>{title}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="resume-bullet-details">
                    <div className="bullet-details">
                        {
                            data.map((data, personIndex) => {
                                const { id, title, head, } = data
                                let position = 'nextSlide';
                                if (personIndex === index) {
                                    position = 'activeSlide';
                                }
                                if (
                                    personIndex === index - 1 ||
                                    (index === 0 && personIndex === datas.length - 1)
                                ) {
                                    position = 'lastSlide';
                                }
                                if (personIndex === index) {
                                    if (index === 2) {
                                        return (
                                            <div key={index} className='skill-container  w3-animate-top'>
                                                {
                                                    head.map((item) => {
                                                        const { language, percent, index } = item
                                                        const progreebar = {
                                                            height: '100%',
                                                            backgroundColor: '#1f2235',
                                                            width: `${percent}%`

                                                        }
                                                        return (
                                                            <div key={index} className='language-container '>
                                                                <div className='dot-with-language'>
                                                                <div className='dot-details'></div>
                                                                <span>{language}</span>
                                                                </div>
                                                                <div className='per-bar'>
                                                                    <div style={progreebar} >
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }

                                    return (
                                        <article key={id} className={position}>
                                            {
                                                head.map((subitem, mainIndex) => {
                                                    const { id, head1, subhead1, date } = subitem
                                                    return (
                                                        <div key={mainIndex} className='bullet-container w3-animate-top'>
                                                            <div className='bullet-details'>
                                                                <div className='dot-detail'></div>
                                                                <h3>{head1}</h3>
                                                                {

                                                                    date.map((item, index) => {
                                                                        const { date1 } = item
                                                                        return (
                                                                            <div key={index}>
                                                                                <p>{date1}</p>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            <div className='subhead'>
                                                                <span>{subhead1}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </article>
                                    )
                                }


                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ressume;