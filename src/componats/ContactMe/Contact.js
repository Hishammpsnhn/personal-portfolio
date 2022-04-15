
import React,{useRef,useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import socialmedia from '../../Assets/fonts/social-media.jpg'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [msg,setMsg] = useState('')

  console.log(name)
  console.log(email)
  console.log(msg)
 
  const form = useRef();
    
    
    const sendEmail = (e) => {
      e.preventDefault();
    
      if(!name || !email || !msg){
        alert('plese fill all the fields')
    
    }else{
        toast("Your Mail Is Sended")
        emailjs.sendForm('service_mq6aj6q', 'template_x8lhd6d', form.current, 'C2XDHRb4SmIh4nvOx')
          .then((result) => {
setEmail('')
setName('')
setMsg('')
            }, (error) => {
              console.log("error"+error.text);
              alert("Something Went Wrong")
          });
          e.target.reset()
      };
      }

  return (
    <div className="contact-content">
      <div className="heading-container">
        <div className="screen-heading">
          <span>Contact Me</span>
        </div>
        <div className="sub-heading">
          <span>Lets Keep In Touch</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line">
          </div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className="center-form">
        <div className="contact-left">
          <div className="contact-detalils">
            <div className="heading">
              <span>Get In Touch 📧</span>
            </div>
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
          </div>
          <div className="contact-details2">
            <div className="description">
              <span> send Your Email Here!</span>
            </div>
            <div className="contact-social-image">
              <img className='social-media' src={socialmedia} />
            </div>
          </div>
        </div>
        <div className="contact-form">

          <form ref={form} onSubmit={sendEmail}>


            <label >Name</label>
            <input className='name-box' type="text" name="sender_name"
                 placeholder='your name' value={name} onChange={(e)=>setName(e.target.value)} />

            <label className='name'>Email</label>
            <input className='name-box' type="email"  name="sender_email"
               placeholder='your email'  value={email} onChange={(e)=>setEmail(e.target.value)}  />

            <label className='name'>Message</label>
            <textarea className='message' name="message" rows='4'
                placeholder='your message'  value={msg}  onChange={(e)=>setMsg(e.target.value)} />

            <button className='btn primary-btn'  type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )

}



export default Contact