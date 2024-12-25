import './index.css'
import  html from '../../assets/html.png'
import  css from '../../assets/css.png'
import  javascript from '../../assets/javascript.png'
import  bootstrap from '../../assets/bootstrap.png'
import  react from '../../assets/react.png'
import  git from '../../assets/git.png'

const Skills = () =>{
    return (
        <div id="SKILLS" className='skills-section'>
            <h1 className='skills-heading'>SKILLS</h1>
            <ul className='skills-list'>
               <li className='skill-item'>
                  <img className='skills-img' src={html} alt="html" />
                  <p className='skillsitem-text'>HTML</p>
               </li>
               <li className='skill-item'>
                  <img className='skills-img' src={css} alt="css" />
                  <p className='skillsitem-text'>CSS</p>
               </li>
               <li className='skill-item'>
                  <img className='skills-img' src={bootstrap} alt="bootstrap" />
                  <p className='skillsitem-text'>BOOTSTRAP</p>
               </li>
               <li className='skill-item'>
                  <img className='skills-img' src={javascript} alt="javascript" />
                  <p className='skillsitem-text'>JAVASCRIPT</p>
               </li>
               <li className='skill-item'>
                  <img className='skills-img' src={react} alt="react" />
                  <p className='skillsitem-text'>REACT</p>
               </li>
               <li className='skill-item'>
                  <img className='skills-img' src={git} alt="python" />
                  <p className='skillsitem-text'>Git</p>
               </li>
            </ul>
        </div>
    )
}

export default Skills