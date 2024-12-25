import { Component } from 'react';
import './index.css'

import portfolioWebsite from '../../assets/Portfolio Website.png'
import Ecommerce from '../../assets/Ecommerce Website Thumbnail.png'
import jobby from '../../assets/Jobby Website Thumbnail.png'
import youtubeclone from '../../assets/YoutubeClone thumbnail.png'


const Projects  = () =>{
    return (
            <div id="PROJECTS" className='projects-section'>
                <h1 className='project-heading'>PROJECTS</h1>
                <ul className='projects-list'>
                    <li className='project-item'>
                       <img className='project-thumbnail' src={jobby} alt="project image"/>
                       <div className='card-details'>
                           <p className='card-text'>Username : rahul</p>
                           <p className='card-text'>Password : rahul@2021</p>
                           <div className='cardbtn-cont'>
                           <button className='card-btn'><a className="card-link" href="https://jobby26.netlify.app/">Visit</a></button>
                           <button className='card-btn'><a className="card-link" href="https://github.com/dhanraj574/jobby26.git">Code</a></button>
                           </div>
                           
                       </div>
                    </li>
                    <li className='project-item'>
                       <img className='project-thumbnail' src={portfolioWebsite} alt="project image"/>
                       <div className='card-details'>
                           
                           <div className='cardbtn-cont'>
                           <button className='card-btn'><a className="card-link" href="https://dineshdesigns.netlify.app/">Visit</a></button>
                           <button className='card-btn'><a className="card-link" href="https://github.com/dhanraj574/dineshkumarportfoliowebsite.git">Code</a></button>
                           </div>
                           
                       </div>
                    </li>
                    <li className='project-item'>
                       <img className='project-thumbnail' src={youtubeclone} alt="project image"/>
                       <div className='card-details'>
                           <p className='card-text'>Username : rahul</p>
                           <p className='card-text'>Password : rahul@2021</p>
                           <div className='cardbtn-cont'>
                           <button className='card-btn'><a className="card-link" href="https://youtubeclone26.netlify.app/">Visit</a></button>
                           <button className='card-btn'><a className="card-link" href="https://github.com/dhanraj574/youtubeclone.git">Code</a></button>
                           </div>
                           
                       </div>
                    </li>
                    <li className='project-item'>
                       <img className='project-thumbnail' src={Ecommerce} alt="project image"/>
                       <div className='card-details'>
                           <p className='card-text'>Username : rahul</p>
                           <p className='card-text'>Password : rahul@2021</p>
                           <div className='cardbtn-cont'>
                           <button className='card-btn'><a className="card-link" href="https://nxttrendz26.netlify.app/">Visit</a></button>
                           <button className='card-btn'><a className="card-link" href="https://github.com/dhanraj574/nxttrendz.git">Code</a></button>
                           </div>
                           
                       </div>
                    </li>
                </ul>
            </div>
        )
    
    
}

export default Projects