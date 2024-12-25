
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'
import  linkedin from '../../assets/linkedin.png'

const Contact = () => {

    


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z4rhvho', 'template_3420zlj', form.current, 
         'Of6iF3whFNrbhAQGp',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



    
   return (
    <div id="CONTACT" className='contact-section'>
        <div className='contact-textcont'>
            <h2 className='contact-head'>Let's Connect</h2>
            <p className='contact-description'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <a href="https://www.linkedin.com/in/dhanraj-b-00738123a/"><img  className='contact-img' src={linkedin} alt="linkedin logo"/></a>
        </div>
        <form className='contact-formcont' ref={form} onSubmit={sendEmail}>
           <div className='contact-inputcont'>
               <label className='contact-label'>Your Name</label>
               <input type="text" name="from_name" className='contact-input' placeholder='Your name'/>
           </div>
           <div className='contact-inputcont'>
               <label className='contact-label'>Email</label>
               <input type="email" name="mailid" className='contact-input' placeholder='jack@gmail.com'/>
           </div>
           <div className='contact-inputcont'>
               <label className='contact-label'>Message</label>
               <textarea name="message" className='contact-input' placeholder="Let's talk about.." rows="4" cols="50" />
           </div>
           <button type="submit" value="Send" className='contact-sendbtn'>Send Message</button>
        </form>
    </div>
   )
}

export default Contact