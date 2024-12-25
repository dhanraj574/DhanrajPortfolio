import './index.css'
import Typewriter from 'typewriter-effect';

import  profileImg from '../../assets/profile.png'

const Home = () =>{
    return (
        <div id="ABOUT" className='home-bg'>
           <div className='home-content'>
               <h1  className='highlighted-text'>Hello, I'm</h1>
               <Typewriter
                  
                    options={{
                        strings: ['Dhanraj', 'Frontend Developer'],
                        autoStart: true,
                        loop: true,}}/>
               
               <p className='home-description'>I'm a frontend developer proficient in HTML, CSS, and JavaScript, specializing in creating engaging user interfaces. Experienced in frameworks like React, I ensure responsive and dynamic web applications. Passionate about staying updated with trends to deliver intuitive designs.</p>
               <div className='home-btn-cont'>
               <a href="mailto:dhanrajbalaji73@gmail.com"><button className="hireme-btn">Hire Me</button></a>
                   <a href="https://drive.google.com/file/d/1Kq-HJEB98uCmwMJtv3BOIc50FegB6VLN/view?usp=sharing" ><button className='cv-btn'>View CV</button></a>
               </div>
           </div>
           <div className='home-img-cont'>
               <img className='home-profile-img' src={profileImg} alt="profile img" />
           </div>
        </div>

    )
}
export default Home